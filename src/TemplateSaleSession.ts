/*
 * MIT License
 * 
 * Copyright (c) 2023 Maxime Lecoq <maxime@lecoqlibre.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
import IOrganization from "./IOrganization.js"
import ITemplateSaleSession from "./ITemplateSaleSession.js"
import IPlace from "./IPlace.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const TEMPLATE_SALE_SESSION_SEM_TYPE: string = "dfc-b:TemplateSaleSession";

export default class TemplateSaleSession extends SemanticObject implements ITemplateSaleSession {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		hostingPlaces?: IPlace[],
		organizations?: IOrganization[],
		doNotStore?: boolean,
	}) {
		
		const type: string = TEMPLATE_SALE_SESSION_SEM_TYPE;
		
		if (parameters.other) {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				other: parameters.other,
			});
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		} else {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				semanticType: type,
				
		});
		}
		this.connector = parameters.connector;
		
		
		if (!parameters.doNotStore) {
			this.connector.store(this);
		}
		if (parameters.hostingPlaces) {
			parameters.hostingPlaces.forEach(e => this.addHostingPlace(e));
		}
		
		if (parameters.organizations) {
			parameters.organizations.forEach(e => this.addOrganization(e));
		}
		
	}

	public addHostingPlace(hostingPlace: IPlace): void {
		if (hostingPlace.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hostedAt", hostingPlace);
		}
		else {
			this.connector.store(hostingPlace);
			this.addSemanticPropertyReference("dfc-b:hostedAt", hostingPlace);
		}
	}

	public setDate(date: string): void {
		this.setSemanticPropertyLiteral("dfc-b:date", date);
	}

	public addOrganization(organization: IOrganization): void {
		if (organization.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:isTemplateSaleSessionOf", organization);
		}
		else {
			this.connector.store(organization);
			this.addSemanticPropertyReference("dfc-b:isTemplateSaleSessionOf", organization);
		}
	}

	public setHostingPlaces(hostingPlaces: IPlace[]): void {
		this.getSemanticPropertyAll("dfc-b:hostedAt").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		hostingPlaces.forEach((templateSaleSession) => {
			this.addSemanticPropertyReference("dfc-b:hostedAt", templateSaleSession, true);
			this.connector.store(templateSaleSession);
		});
	}

	public async getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]> {
		const results = new Array<IPlace>();
		const properties = this.getSemanticPropertyAll("dfc-b:hostedAt");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlace>semanticObject);
		}
		return results;
	}

	public removeHostingPlace(hostingPlace: IPlace): void {
		throw new Error("Not yet implemented.");
	}

	public async getOrganizations(options?: IGetterOptions): Promise<IOrganization[]> {
		const results = new Array<IOrganization>();
		const properties = this.getSemanticPropertyAll("dfc-b:isTemplateSaleSessionOf");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOrganization>semanticObject);
		}
		return results;
	}

	public removeOrganization(organization: IOrganization): void {
		throw new Error("Not yet implemented.");
	}

	public getDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:date");
	}

	public setOrganizations(organizations: IOrganization[]): void {
		this.getSemanticPropertyAll("dfc-b:isTemplateSaleSessionOf").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		organizations.forEach((templateSaleSession) => {
			this.addSemanticPropertyReference("dfc-b:isTemplateSaleSessionOf", templateSaleSession, true);
			this.connector.store(templateSaleSession);
		});
	}
}

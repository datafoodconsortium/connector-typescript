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
import ISaleSession from "./ISaleSession.js"
import IVirtualPlace from "./IVirtualPlace.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const VIRTUAL_PLACE_SEM_TYPE: string = "dfc-b:VirtualPlace";

export default class VirtualPlace extends SemanticObject implements IVirtualPlace {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		hostedSaleSessions?: ISaleSession[],
		urls?: string[],
		doNotStore?: boolean,
	}) {
		
		const type: string = VIRTUAL_PLACE_SEM_TYPE;
		
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
		if (parameters.name) {
			this.setName(parameters.name);
		}
		
		if (parameters.description) {
			this.setDescription(parameters.description);
		}
		
		if (parameters.hostedSaleSessions) {
			parameters.hostedSaleSessions.forEach(e => this.addHostedSaleSession(e));
		}
		
		if (parameters.urls) {
			parameters.urls.forEach(e => this.addUrl(e));
		}
		
	}

	public removeUrl(url: string): void {
		throw new Error("Not yet implemented.");
	}

	public setUrls(urls: string[]): void {
		this.setSemanticPropertyLiteralAll("dfc-b:URL", urls);
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public addUrl(url: string): void {
		this.addSemanticPropertyLiteral("dfc-b:URL", url);
	}

	public async getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]> {
		const results = new Array<ISaleSession>();
		const properties = this.getSemanticPropertyAll("dfc-b:hosts");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISaleSession>semanticObject);
		}
		return results;
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public addHostedSaleSession(saleSession: ISaleSession): void {
		if (saleSession.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hosts", saleSession);
		}
		else {
			this.connector.store(saleSession);
			this.addSemanticPropertyReference("dfc-b:hosts", saleSession);
		}
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public getUrls(): string[] {
		return this.getSemanticPropertyAll("dfc-b:URL");
	}

	public removeHostedSaleSession(): ISaleSession | undefined {
		throw new Error("Not yet implemented.");
	}

	public setHostedSaleSessions(saleSessions: ISaleSession[]): void {
		this.getSemanticPropertyAll("dfc-b:hosts").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		saleSessions.forEach((virtualPlace) => {
			this.addSemanticPropertyReference("dfc-b:hosts", virtualPlace, true);
			this.connector.store(virtualPlace);
		});
	}
}

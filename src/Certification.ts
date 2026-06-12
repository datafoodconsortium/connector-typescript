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
import ICertification from "./ICertification.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const CERTIFICATION_SEM_TYPE: string = "dfc-b:Certfication";

export default class Certification extends SemanticObject implements ICertification {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		certificationReferences?: string[],
		certificationScores?: string[],
		operatorIds?: string[],
		certifiedOrganizations?: IOrganization[],
		name?: string,
		description?: string,
		doNotStore?: boolean,
	}) {
		
		const type: string = CERTIFICATION_SEM_TYPE;
		
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
		if (parameters.certificationReferences) {
			parameters.certificationReferences.forEach(e => this.addCertificationReference(e));
		}
		
		if (parameters.certificationScores) {
			parameters.certificationScores.forEach(e => this.addCertificationScore(e));
		}
		
		if (parameters.operatorIds) {
			parameters.operatorIds.forEach(e => this.addOperatorId(e));
		}
		
		if (parameters.certifiedOrganizations) {
			parameters.certifiedOrganizations.forEach(e => this.addCertifiedOrganization(e));
		}
		
		if (parameters.name) {
			this.setName(parameters.name);
		}
		
		if (parameters.description) {
			this.setDescription(parameters.description);
		}
		
	}

	public addCertificationScore(certificationReference: string): void {
		this.addSemanticPropertyLiteral("dfc-b:certificationScore", certificationReference);
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public getCertificationReferences(): string[] {
		return this.getSemanticPropertyAll("dfc-b:certiferReference");
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public removeCertificationReference(certificationReference: string): void {
		throw new Error("Not yet implemented.");
	}

	public getCertificationScores(): string[] {
		return this.getSemanticPropertyAll("dfc-b:certificationScore");
	}

	public removeCertifiedOrganization(certifiedOrganization: IOrganization): void {
		throw new Error("Not yet implemented.");
	}

	public addOperatorId(operatorId: string): void {
		this.addSemanticPropertyLiteral("dfc-b:operatorId", operatorId);
	}

	public addCertifiedOrganization(certifiedOrganization: IOrganization): void {
		if (certifiedOrganization.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:certifies", certifiedOrganization);
		}
		else {
			this.connector.store(certifiedOrganization);
			this.addSemanticPropertyReference("dfc-b:certifies", certifiedOrganization);
		}
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:hasDescription");
	}

	public setCertificationScores(certificationReferences: string[]): void {
		this.setSemanticPropertyLiteralAll("dfc-b:certificationScore", certificationReferences);
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:hasDescription", description);
	}

	public setCertifiedOrganizations(certifiedOrganizations: IOrganization[]): void {
		this.getSemanticPropertyAll("dfc-b:certifies").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		certifiedOrganizations.forEach((certification) => {
			this.addSemanticPropertyReference("dfc-b:certifies", certification, true);
			this.connector.store(certification);
		});
	}

	public setCertificationReferences(certificationReferences: string[]): void {
		this.setSemanticPropertyLiteralAll("dfc-b:certiferReference", certificationReferences);
	}

	public getOpereratorIds(): string[] {
		return this.getSemanticPropertyAll("dfc-b:operatorId");
	}

	public removeCertificationScore(certificationReference: string): void {
		throw new Error("Not yet implemented.");
	}

	public removeOperatorId(operatorId: string): void {
		throw new Error("Not yet implemented.");
	}

	public addCertificationReference(certificationReference: string): void {
		this.addSemanticPropertyLiteral("dfc-b:certiferReference", certificationReference);
	}

	public async getCertifiedOrganizations(options?: IGetterOptions): Promise<IOrganization[]> {
		const results = new Array<IOrganization>();
		const properties = this.getSemanticPropertyAll("dfc-b:certifies");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOrganization>semanticObject);
		}
		return results;
	}

	public setOperatorIds(operatorIds: string[]): void {
		this.setSemanticPropertyLiteralAll("dfc-b:operatorId", operatorIds);
	}
}

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

import IPerson from "./IPerson.js"
import Agent from "./Agent.js"
import IAddress from "./IAddress.js"
import IEnterprise from "./IEnterprise.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default class Person extends Agent implements IPerson {
	

	public constructor(parameters: {connector: IConnector, semanticId?: string, other?: Semanticable, firstName?: string, lastName?: string, localizations?: IAddress[], organizations?: IEnterprise[], doNotStore?: boolean}) {
		const type: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#Person";
		
		if (parameters.other) {
			super({ connector: parameters.connector, semanticId: parameters.semanticId!, other: parameters.other });
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		}
		else super({ connector: parameters.connector, semanticId: parameters.semanticId!, semanticType: type, localizations: parameters.localizations });
		
		
		
		
		if (!parameters.doNotStore)
			this.connector.store(this);
		if (parameters.firstName) this.setFirstName(parameters.firstName);
		if (parameters.lastName) this.setLastName(parameters.lastName);
		if (parameters.organizations) parameters.organizations.forEach(e => this.affiliateTo(e));
	}

	public getLastName(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#familyName");
	}
	

	public getFirstName(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#firstName");
	}
	

	public setLastName(lastName: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#familyName";
		this.setSemanticPropertyLiteral(property, lastName);
	}
	

	public setFirstName(firstName: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#firstName";
		this.setSemanticPropertyLiteral(property, firstName);
	}
	
	public affiliateTo(organization: IEnterprise): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#affiliates";
		if (organization.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, organization);
		}
		else {
			this.connector.store(organization);
			this.addSemanticPropertyReference(property, organization);
		}
	}
	

	public leaveAffiliatedOrganization(organization: IEnterprise): void {
		throw new Error("Not yet implemented.");
	}
	

	public async getAffiliatedOrganizations(options?: IGetterOptions): Promise<Array<IEnterprise>>
	 {
		const results = new Array<IEnterprise>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#affiliates");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IEnterprise> semanticObject);
		}
		return results;
	}
	

}

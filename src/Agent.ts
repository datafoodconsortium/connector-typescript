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

import IAddress from "./IAddress.js"
import IAgent from "./IAgent.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default abstract class Agent extends SemanticObject implements IAgent {
	
	protected connector: IConnector;

	protected constructor(parameters: {connector: IConnector, semanticId?: string, semanticType?: string, other?: Semanticable, localizations?: IAddress[]}) {
		if (parameters.other) super({ semanticId: parameters.semanticId!, other: parameters.other })
		else super({ semanticId: parameters.semanticId!, semanticType: parameters.semanticType! });
		
		this.connector = parameters.connector;
		
		
		if (parameters.localizations) parameters.localizations.forEach(e => this.addLocalization(e));
	}

	public addLocalization(localization: IAddress): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasAddress";
		if (localization.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, localization);
		}
		else {
			this.connector.store(localization);
			this.addSemanticPropertyReference(property, localization);
		}
	}
	

	public removeLocalization(localization: IAddress): void {
		throw new Error("Not yet implemented.");
	}
	

	public async getLocalizations(options?: IGetterOptions): Promise<Array<IAddress>>
	 {
		const results = new Array<IAddress>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasAddress");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IAddress> semanticObject);
		}
		return results;
	}
	

}

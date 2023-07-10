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

import IOffer from "./IOffer.js"
import ISaleSession from "./ISaleSession.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default class SaleSession extends SemanticObject implements ISaleSession {
	
	protected connector: IConnector;

	public constructor(parameters: {connector: IConnector, semanticId?: string, other?: Semanticable, beginDate?: string, endDate?: string, quantity?: number, offers?: IOffer[], doNotStore?: boolean}) {
		const type: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#SaleSession";
		
		if (parameters.other) {
			super({ semanticId: parameters.semanticId!, other: parameters.other });
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		}
		else super({ semanticId: parameters.semanticId!, semanticType: type });
		
		this.connector = parameters.connector;
		
		
		if (!parameters.doNotStore)
			this.connector.store(this);
		if (parameters.beginDate) this.setBeginDate(parameters.beginDate);
		if (parameters.endDate) this.setEndDate(parameters.endDate);
		if (parameters.quantity || parameters.quantity === 0) this.setQuantity(parameters.quantity);
		if (parameters.offers) parameters.offers.forEach(e => this.addOffer(e));
	}

	public getBeginDate(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#beginDate");
	}
	

	public getEndDate(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#endDate");
	}
	

	public setBeginDate(beginDate: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#beginDate";
		this.setSemanticPropertyLiteral(property, beginDate);
	}
	

	public setEndDate(endDate: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#endDate";
		this.setSemanticPropertyLiteral(property, endDate);
	}
	
	public setQuantity(quantity: number): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#quantity";
		this.setSemanticPropertyLiteral(property, quantity);
	}
	

	public addOffer(offer: IOffer): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#lists";
		if (offer.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, offer);
		}
		else {
			this.connector.store(offer);
			this.addSemanticPropertyReference(property, offer);
		}
	}
	

	public async getOffers(options?: IGetterOptions): Promise<Array<IOffer>>
	 {
		const results = new Array<IOffer>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#lists");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOffer> semanticObject);
		}
		return results;
	}
	

	public getQuantity(): number
	 {
		return Number(this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#quantity"));
	}
	

}

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

import IOrder from "./IOrder.js"
import ISaleSession from "./ISaleSession.js"
import IOrderLine from "./IOrderLine.js"
import IAgent from "./IAgent.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default class Order extends SemanticObject implements IOrder {
	
	protected connector: IConnector;

	public constructor(parameters: {connector: IConnector, semanticId?: string, other?: Semanticable, number?: string, date?: string, saleSession?: ISaleSession, client?: IAgent, lines?: IOrderLine[], doNotStore?: boolean}) {
		const type: string = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Order";
		
		if (parameters.other) {
			super({ semanticId: parameters.semanticId!, other: parameters.other });
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		}
		else super({ semanticId: parameters.semanticId!, semanticType: type });
		
		this.connector = parameters.connector;
		
		
		if (!parameters.doNotStore)
			this.connector.store(this);
		if (parameters.number) this.setNumber(parameters.number);
		if (parameters.date) this.setDate(parameters.date);
		if (parameters.saleSession) this.setSaleSession(parameters.saleSession);
		if (parameters.client) this.setClient(parameters.client);
		if (parameters.lines) parameters.lines.forEach(e => this.addLine(e));
	}

	public setDate(date: string): void {
		const property: string = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#date";
		this.setSemanticPropertyLiteral(property, date);
	}
	

	public getNumber(): string
	 {
		return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#orderNumber");
	}
	

	public getDate(): string
	 {
		return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#date");
	}
	

	public addLine(line: IOrderLine): void {
		const property: string = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPart";
		if (line.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, line);
		}
		else {
			this.connector.store(line);
			this.addSemanticPropertyReference(property, line);
		}
	}
	

	public async getClient(options?: IGetterOptions): Promise<IAgent | undefined>
	 {
		let result: IAgent | undefined = undefined;
		const semanticId = this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#orderedBy");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IAgent | undefined> semanticObject;
		}
		return result;
		
	}
	

	public async getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>
	 {
		let result: ISaleSession | undefined = undefined;
		const semanticId = this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#belongsTo");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISaleSession | undefined> semanticObject;
		}
		return result;
		
	}
	

	public setClient(client: IAgent): void {
		const property: string = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#orderedBy";
		this.setSemanticPropertyReference(property, client);
		this.connector.store(client);
	}
	

	public async getLines(options?: IGetterOptions): Promise<Array<IOrderLine>>
	 {
		const results = new Array<IOrderLine>();
		const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPart");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOrderLine> semanticObject);
		}
		return results;
	}
	

	public setNumber(number: string): void {
		const property: string = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#orderNumber";
		this.setSemanticPropertyLiteral(property, number);
	}
	

	public setSaleSession(saleSession: ISaleSession): void {
		const property: string = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#belongsTo";
		this.setSemanticPropertyReference(property, saleSession);
		this.connector.store(saleSession);
	}
	

}

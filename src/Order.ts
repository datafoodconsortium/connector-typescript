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
import IOrderLine from "./IOrderLine.js"
import ISKOSConcept from "./ISKOSConcept.js"
import ISaleSession from "./ISaleSession.js"
import IOrder from "./IOrder.js"
import IAgent from "./IAgent.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const ORDER_SEM_TYPE: string = "dfc-b:Order";

export default class Order extends SemanticObject implements IOrder {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		number?: string,
		date?: string,
		saleSession?: ISaleSession,
		client?: IAgent,
		lines?: IOrderLine[],
		fulfilmentStatus?: ISKOSConcept,
		orderStatus?: ISKOSConcept,
		paymentStatus?: ISKOSConcept,
		doNotStore?: boolean,
	}) {
		
		const type: string = ORDER_SEM_TYPE;
		
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
		if (parameters.number) {
			this.setNumber(parameters.number);
		}
		
		if (parameters.date) {
			this.setDate(parameters.date);
		}
		
		if (parameters.saleSession) {
			this.setSaleSession(parameters.saleSession);
		}
		
		if (parameters.client) {
			this.setClient(parameters.client);
		}
		
		if (parameters.lines) {
			parameters.lines.forEach(e => this.addLine(e));
		}
		
		if (parameters.fulfilmentStatus) {
			this.setFulfilmentStatus(parameters.fulfilmentStatus);
		}
		
		if (parameters.orderStatus) {
			this.setOrderStatus(parameters.orderStatus);
		}
		
		if (parameters.paymentStatus) {
			this.setPaymentStatus(parameters.paymentStatus);
		}
		
	}

	public setPaymentStatus(paymentState: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasPaymentStatus", paymentState);
		
		this.connector.store(paymentState);
	}

	public async getFulfilmentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasFulfilmentStatus");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public setDate(date: string): void {
		this.setSemanticPropertyLiteral("dfc-b:date", date);
	}

	public getDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:date");
	}

	public getNumber(): string | undefined {
		return this.getSemanticProperty("dfc-b:orderNumber");
	}

	public async getOrderStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasOrderStatus");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public async getPaymentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasPaymentStatus");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public setFulfilmentStatus(fulfilmentState: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasFulfilmentStatus", fulfilmentState);
		
		this.connector.store(fulfilmentState);
	}

	public async getClient(options?: IGetterOptions): Promise<IAgent | undefined> {
		let result: IAgent | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:orderedBy");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IAgent> semanticObject;
		}
		return result;
	}

	public setSaleSession(saleSession: ISaleSession): void {
		this.setSemanticPropertyReference("dfc-b:belongsTo", saleSession);
		
		this.connector.store(saleSession);
	}

	public setClient(client: IAgent): void {
		this.setSemanticPropertyReference("dfc-b:orderedBy", client);
		
		this.connector.store(client);
	}

	public async getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined> {
		let result: ISaleSession | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:belongsTo");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISaleSession> semanticObject;
		}
		return result;
	}

	public addLine(line: IOrderLine): void {
		if (line.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasPart", line);
		}
		else {
			this.connector.store(line);
			this.addSemanticPropertyReference("dfc-b:hasPart", line);
		}
	}

	public async getLines(options?: IGetterOptions): Promise<IOrderLine[]> {
		const results = new Array<IOrderLine>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasPart");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOrderLine>semanticObject);
		}
		return results;
	}

	public setNumber(number: string): void {
		this.setSemanticPropertyLiteral("dfc-b:orderNumber", number);
	}

	public setOrderStatus(orderState: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasOrderStatus", orderState);
		
		this.connector.store(orderState);
	}
}

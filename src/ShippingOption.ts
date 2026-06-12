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
import IOrder from "./IOrder.js"
import IShippingOption from "./IShippingOption.js"
import IQuantity from "./IQuantity.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

export default abstract class ShippingOption extends SemanticObject implements IShippingOption {

	protected connector: IConnector;

	protected constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		semanticType?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		fee?: number,
		quantity?: IQuantity,
		order?: IOrder,
		saleSession?: ISaleSession,
		beginDate?: string,
		endDate?: string,
		doNotStore?: boolean,
	}) {
		
		if (parameters.other) {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				other: parameters.other,
			});
		} else {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				semanticType: parameters.semanticType!,
				
		});
		}
		this.connector = parameters.connector;
		
		
		if (parameters.name) {
			this.setName(parameters.name);
		}
		
		if (parameters.description) {
			this.setDescription(parameters.description);
		}
		
		if (parameters.fee || parameters.fee === 0) {
			this.setFee(parameters.fee);
		}
		
		if (parameters.quantity) {
			this.setQuantity(parameters.quantity);
		}
		
		if (parameters.order) {
			this.setOrder(parameters.order);
		}
		
		if (parameters.saleSession) {
			this.setSaleSession(parameters.saleSession);
		}
		
		if (parameters.beginDate) {
			this.setBeginDate(parameters.beginDate);
		}
		
		if (parameters.endDate) {
			this.setEndDate(parameters.endDate);
		}
		
	}

	public async getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined> {
		let result: ISaleSession | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:optionOf");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISaleSession> semanticObject;
		}
		return result;
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public setSaleSession(saleSession: ISaleSession): void {
		this.setSemanticPropertyReference("dfc-b:optionOf", saleSession);
		
		this.connector.store(saleSession);
	}

	public getEndDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:endDate");
	}

	public getQuantity(): IQuantity | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
		return <IQuantity> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public setFee(fee: number): void {
		this.setSemanticPropertyLiteral("dfc-b:fee", fee);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public setBeginDate(beginDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:startDate", beginDate);
	}

	public setQuantity(quantity: IQuantity): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
		
	}

	public setOrder(order: IOrder): void {
		this.setSemanticPropertyReference("dfc-b:selectedBy", order);
		
		this.connector.store(order);
	}

	public getFee(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:fee"));
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setEndDate(endDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:endDate", endDate);
	}

	public async getOrder(options?: IGetterOptions): Promise<IOrder | undefined> {
		let result: IOrder | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:selectedBy");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IOrder> semanticObject;
		}
		return result;
	}

	public getBeginDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:startDate");
	}
}

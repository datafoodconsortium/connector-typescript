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
import IPrice from "./IPrice.js"
import IOrder from "./IOrder.js"
import IOffer from "./IOffer.js"
import IOrderLine from "./IOrderLine.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const ORDER_LINE_SEM_TYPE: string = "dfc-b:OrderLine";

export default class OrderLine extends SemanticObject implements IOrderLine {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		quantity?: number,
		price?: IPrice,
		offer?: IOffer,
		order?: IOrder,
		doNotStore?: boolean,
	}) {
		
		const type: string = ORDER_LINE_SEM_TYPE;
		
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
		if (parameters.quantity || parameters.quantity === 0) {
			this.setQuantity(parameters.quantity);
		}
		
		if (parameters.price) {
			this.setPrice(parameters.price);
		}
		
		if (parameters.offer) {
			this.setOffer(parameters.offer);
		}
		
		if (parameters.order) {
			this.setOrder(parameters.order);
		}
		
	}

	public getPrice(): IPrice | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasPrice");
		return <IPrice> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setPrice(price: IPrice): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasPrice", price);
		
	}

	public setOffer(offer: IOffer): void {
		this.setSemanticPropertyReference("dfc-b:concerns", offer);
		
		this.connector.store(offer);
	}

	public async getOffer(options?: IGetterOptions): Promise<IOffer | undefined> {
		let result: IOffer | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:concerns");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IOffer> semanticObject;
		}
		return result;
	}

	public setOrder(order: IOrder): void {
		this.setSemanticPropertyReference("dfc-b:partOf", order);
		
		this.connector.store(order);
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setQuantity(quantity: number): void {
		this.setSemanticPropertyLiteral("dfc-b:quantity", quantity);
	}

	public getQuantity(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:quantity"));
	}

	public async getOrder(options?: IGetterOptions): Promise<IOrder | undefined> {
		let result: IOrder | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:partOf");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IOrder> semanticObject;
		}
		return result;
	}
}

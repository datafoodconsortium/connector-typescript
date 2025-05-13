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
import IOffer from "./IOffer.js"
import ICatalogItem from "./ICatalogItem.js"
import ICustomerCategory from "./ICustomerCategory.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const OFFER_SEM_TYPE: string = "dfc-b:Offer";

export default class Offer extends SemanticObject implements IOffer {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		offeredItem?: ICatalogItem,
		offeredTo?: ICustomerCategory,
		price?: IPrice,
		stockLimitation?: number,
		doNotStore?: boolean,
	}) {
		
		const type: string = OFFER_SEM_TYPE;
		
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
		if (parameters.offeredItem) {
			this.setOfferedItem(parameters.offeredItem);
		}
		
		if (parameters.offeredTo) {
			this.setCustomerCategory(parameters.offeredTo);
		}
		
		if (parameters.price) {
			this.setPrice(parameters.price);
		}
		
		if (parameters.stockLimitation || parameters.stockLimitation === 0) {
			this.setStockLimitation(parameters.stockLimitation);
		}
		
	}

	public getPrice(): IPrice | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasPrice");
		return <IPrice> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public setPrice(price: IPrice): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasPrice", price);
		
	}

	public async getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined> {
		let result: ICustomerCategory | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:offeredTo");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ICustomerCategory> semanticObject;
		}
		return result;
	}

	public setCustomerCategory(customerCategory: ICustomerCategory): void {
		this.setSemanticPropertyReference("dfc-b:offeredTo", customerCategory);
		
		this.connector.store(customerCategory);
	}

	public setStockLimitation(stockLimitation: number): void {
		this.setSemanticPropertyLiteral("dfc-b:stockLimitation", stockLimitation);
	}

	public setOfferedItem(offeredItem: ICatalogItem): void {
		this.setSemanticPropertyReference("dfc-b:offeredItem", offeredItem);
		
		this.connector.store(offeredItem);
	}

	public async getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined> {
		let result: ICatalogItem | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:offeredItem");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ICatalogItem> semanticObject;
		}
		return result;
	}

	public getStockLimitation(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:stockLimitation"));
	}
}

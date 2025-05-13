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
import IDefinedProduct from "./IDefinedProduct.js"
import ICatalog from "./ICatalog.js"
import IOffer from "./IOffer.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const CATALOG_ITEM_SEM_TYPE: string = "dfc-b:CatalogItem";

export default class CatalogItem extends SemanticObject implements ICatalogItem {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		product?: IDefinedProduct,
		sku?: string,
		stockLimitation?: number,
		offers?: IOffer[],
		catalogs?: ICatalog[],
		doNotStore?: boolean,
	}) {
		
		const type: string = CATALOG_ITEM_SEM_TYPE;
		
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
		if (parameters.product) {
			this.setOfferedProduct(parameters.product);
		}
		
		if (parameters.sku) {
			this.setSku(parameters.sku);
		}
		
		if (parameters.stockLimitation || parameters.stockLimitation === 0) {
			this.setStockLimitation(parameters.stockLimitation);
		}
		
		if (parameters.offers) {
			parameters.offers.forEach(e => this.addOffer(e));
		}
		
		if (parameters.catalogs) {
			parameters.catalogs.forEach(e => this.registerInCatalog(e));
		}
		
	}

	public addOffer(offer: IOffer): void {
		if (offer.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:offeredThrough", offer);
		}
		else {
			this.connector.store(offer);
			this.addSemanticPropertyReference("dfc-b:offeredThrough", offer);
		}
	}

	public setOfferedProduct(offeredProduct: IDefinedProduct): void {
		this.setSemanticPropertyReference("dfc-b:references", offeredProduct);
		
		this.connector.store(offeredProduct);
	}

	public setStockLimitation(stockLimitation: number): void {
		this.setSemanticPropertyLiteral("dfc-b:stockLimitation", stockLimitation);
	}

	public getSku(): string | undefined {
		return this.getSemanticProperty("dfc-b:sku");
	}

	public setSku(sku: string): void {
		this.setSemanticPropertyLiteral("dfc-b:sku", sku);
	}

	public getStockLimitation(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:stockLimitation"));
	}

	public async getCatalogs(options?: IGetterOptions): Promise<ICatalog[]> {
		const results = new Array<ICatalog>();
		const properties = this.getSemanticPropertyAll("dfc-b:listedIn");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalog>semanticObject);
		}
		return results;
	}

	public async getOfferers(options?: IGetterOptions): Promise<IOffer[]> {
		const results = new Array<IOffer>();
		const properties = this.getSemanticPropertyAll("dfc-b:offeredThrough");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOffer>semanticObject);
		}
		return results;
	}

	public async getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined> {
		let result: IDefinedProduct | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:references");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IDefinedProduct> semanticObject;
		}
		return result;
	}

	public registerInCatalog(repository: ICatalog): void {
		if (repository.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:listedIn", repository);
		}
		else {
			this.connector.store(repository);
			this.addSemanticPropertyReference("dfc-b:listedIn", repository);
		}
	}
}

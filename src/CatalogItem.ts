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

import ICatalog from "./ICatalog.js"
import IOffer from "./IOffer.js"
import IDefinedProduct from "./IDefinedProduct.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default class CatalogItem extends SemanticObject implements ICatalogItem {
	
	protected connector: IConnector;

	public constructor(parameters: {connector: IConnector, semanticId?: string, other?: Semanticable, product?: IDefinedProduct, sku?: string, stockLimitation?: number, offers?: IOffer[], catalogs?: ICatalog[], doNotStore?: boolean}) {
		const type: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#CatalogItem";
		
		if (parameters.other) {
			super({ semanticId: parameters.semanticId!, other: parameters.other });
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		}
		else super({ semanticId: parameters.semanticId!, semanticType: type });
		
		this.connector = parameters.connector;
		
		
		if (!parameters.doNotStore)
			this.connector.store(this);
		if (parameters.product) this.setOfferedProduct(parameters.product);
		if (parameters.sku) this.setSku(parameters.sku);
		if (parameters.stockLimitation || parameters.stockLimitation === 0) this.setStockLimitation(parameters.stockLimitation);
		if (parameters.offers) parameters.offers.forEach(e => this.addOffer(e));
		if (parameters.catalogs) parameters.catalogs.forEach(e => this.registerInCatalog(e));
	}

	public registerInCatalog(repository: ICatalog): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#listedIn";
		if (repository.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, repository);
		}
		else {
			this.connector.store(repository);
			this.addSemanticPropertyReference(property, repository);
		}
	}
	

	public async getCatalogs(options?: IGetterOptions): Promise<Array<ICatalog>>
	 {
		const results = new Array<ICatalog>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#listedIn");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalog> semanticObject);
		}
		return results;
	}
	
	public setOfferedProduct(offeredProduct: IDefinedProduct): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#references";
		this.setSemanticPropertyReference(property, offeredProduct);
		this.connector.store(offeredProduct);
	}
	

	public async getOfferers(options?: IGetterOptions): Promise<Array<IOffer>>
	 {
		const results = new Array<IOffer>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#offeredThrough");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOffer> semanticObject);
		}
		return results;
	}
	

	public async getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>
	 {
		let result: IDefinedProduct | undefined = undefined;
		const semanticId = this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#references");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IDefinedProduct | undefined> semanticObject;
		}
		return result;
		
	}
	

	public addOffer(offer: IOffer): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#offeredThrough";
		if (offer.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, offer);
		}
		else {
			this.connector.store(offer);
			this.addSemanticPropertyReference(property, offer);
		}
	}
	
	public setStockLimitation(stockLimitation: number): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#stockLimitation";
		this.setSemanticPropertyLiteral(property, stockLimitation);
	}
	

	public getStockLimitation(): number
	 {
		return Number(this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#stockLimitation"));
	}
	
	public getSku(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#sku");
	}
	

	public setSku(sku: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#sku";
		this.setSemanticPropertyLiteral(property, sku);
	}
	

}

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

import ISuppliedProduct from "./ISuppliedProduct.js"
import ICatalogItem from "./ICatalogItem.js"
import IEnterprise from "./IEnterprise.js"
import ICatalog from "./ICatalog.js"
import Agent from "./Agent.js"
import ICustomerCategory from "./ICustomerCategory.js"
import Onboardable from "./Onboardable.js"
import ITechnicalProduct from "./ITechnicalProduct.js"
import ProductSupplier from "./ProductSupplier.js"
import IAddress from "./IAddress.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default class Enterprise extends Agent implements Onboardable, ProductSupplier, IEnterprise {
	

	public constructor(parameters: {connector: IConnector, semanticId?: string, other?: Semanticable, localizations?: IAddress[], description?: string, vatNumber?: string, customerCategories?: ICustomerCategory[], catalogs?: ICatalog[], catalogItems?: ICatalogItem[], suppliedProducts?: ISuppliedProduct[], technicalProducts?: ITechnicalProduct[], doNotStore?: boolean}) {
		const type: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#Enterprise";
		
		if (parameters.other) {
			super({ connector: parameters.connector, semanticId: parameters.semanticId!, other: parameters.other });
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		}
		else super({ connector: parameters.connector, semanticId: parameters.semanticId!, semanticType: type, localizations: parameters.localizations });
		
		
		
		
		if (!parameters.doNotStore)
			this.connector.store(this);
		if (parameters.description) this.setDescription(parameters.description);
		if (parameters.vatNumber) this.setVatNumber(parameters.vatNumber);
		if (parameters.customerCategories) parameters.customerCategories.forEach(e => this.addCustomerCategory(e));
		if (parameters.catalogs) parameters.catalogs.forEach(e => this.maintainCatalog(e));
		if (parameters.catalogItems) parameters.catalogItems.forEach(e => this.manageCatalogItem(e));
		if (parameters.suppliedProducts) parameters.suppliedProducts.forEach(e => this.supplyProduct(e));
		if (parameters.technicalProducts) parameters.technicalProducts.forEach(e => this.proposeTechnicalProducts(e));
	}

	public manageCatalogItem(catalogItem: ICatalogItem): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#manages";
		if (catalogItem.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, catalogItem);
		}
		else {
			this.connector.store(catalogItem);
			this.addSemanticPropertyReference(property, catalogItem);
		}
	}
	

	public async getManagedCatalogItems(options?: IGetterOptions): Promise<Array<ICatalogItem>>
	 {
		const results = new Array<ICatalogItem>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#manages");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalogItem> semanticObject);
		}
		return results;
	}
	

	public unmanageCatalogItem(catalogItem: ICatalogItem): void {
		throw new Error("Not yet implemented.");
	}
	
	public maintainCatalog(catalog: ICatalog): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#maintains";
		if (catalog.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, catalog);
		}
		else {
			this.connector.store(catalog);
			this.addSemanticPropertyReference(property, catalog);
		}
	}
	

	public async getMaintainedCatalogs(options?: IGetterOptions): Promise<Array<ICatalog>>
	 {
		const results = new Array<ICatalog>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#maintains");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalog> semanticObject);
		}
		return results;
	}
	

	public unmaintainCatalog(catalog: ICatalog): void {
		throw new Error("Not yet implemented.");
	}
	
	public unsupplyProduct(suppliedProduct: ISuppliedProduct): void {
		throw new Error("Not yet implemented.");
	}
	

	public supplyProduct(suppliedProduct: ISuppliedProduct): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#supplies";
		if (suppliedProduct.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, suppliedProduct);
		}
		else {
			this.connector.store(suppliedProduct);
			this.addSemanticPropertyReference(property, suppliedProduct);
		}
	}
	

	public async getSuppliedProducts(options?: IGetterOptions): Promise<Array<ISuppliedProduct>>
	 {
		const results = new Array<ISuppliedProduct>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#supplies");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISuppliedProduct> semanticObject);
		}
		return results;
	}
	
	public unproposeTechnicalProducts(technicalProducts: ITechnicalProduct): void {
		throw new Error("Not yet implemented.");
	}
	

	public proposeTechnicalProducts(technicalProducts: ITechnicalProduct): void {
		const property: string = "";
		if (technicalProducts.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, technicalProducts);
		}
		else {
			this.connector.store(technicalProducts);
			this.addSemanticPropertyReference(property, technicalProducts);
		}
	}
	

	public async getProposedTechnicalProducts(options?: IGetterOptions): Promise<Array<ITechnicalProduct>>
	 {
		const results = new Array<ITechnicalProduct>();
		const properties = this.getSemanticPropertyAll("");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ITechnicalProduct> semanticObject);
		}
		return results;
	}
	
	public setDescription(description: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#hasDescription";
		this.setSemanticPropertyLiteral(property, description);
	}
	

	public getDescription(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#hasDescription");
	}
	
	public setVatNumber(vatNumber: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#VATnumber";
		this.setSemanticPropertyLiteral(property, vatNumber);
	}
	

	public getVatNumber(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#VATnumber");
	}
	
	public async getCustomerCategories(options?: IGetterOptions): Promise<Array<ICustomerCategory>>
	 {
		const results = new Array<ICustomerCategory>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#defines");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICustomerCategory> semanticObject);
		}
		return results;
	}
	

	public addCustomerCategory(customerCategory: ICustomerCategory): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_FullModel.owl#defines";
		if (customerCategory.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, customerCategory);
		}
		else {
			this.connector.store(customerCategory);
			this.addSemanticPropertyReference(property, customerCategory);
		}
	}
	

}

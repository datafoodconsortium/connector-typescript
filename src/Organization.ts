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
import ProductSupplier from "./ProductSupplier.js"
import ICertification from "./ICertification.js"
import IAddress from "./IAddress.js"
import ITechnicalProduct from "./ITechnicalProduct.js"
import ICatalog from "./ICatalog.js"
import IPerson from "./IPerson.js"
import ISuppliedProduct from "./ISuppliedProduct.js"
import ITemplateSaleSession from "./ITemplateSaleSession.js"
import Agent from "./Agent.js"
import ICustomerCategory from "./ICustomerCategory.js"
import ManagedByMainContact from "./ManagedByMainContact.js"
import Onboardable from "./Onboardable.js"
import IOrganization from "./IOrganization.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const ORGANIZATION_SEM_TYPE: string = "dfc-b:Organization";

export default class Organization extends Agent implements Onboardable, ManagedByMainContact, ProductSupplier, IOrganization {

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		localizations?: IAddress[],
		description?: string,
		vatNumber?: string,
		customerCategories?: ICustomerCategory[],
		catalogs?: ICatalog[],
		catalogItems?: ICatalogItem[],
		suppliedProducts?: ISuppliedProduct[],
		technicalProducts?: ITechnicalProduct[],
		mainContact?: IPerson,
		logo?: string,
		templateSaleSessions?: ITemplateSaleSession[],
		customerCategoriesMembership?: ICustomerCategory[],
		certifications?: ICertification[],
		affiliates?: IPerson[],
		doNotStore?: boolean,
	}) {
		
		const type: string = ORGANIZATION_SEM_TYPE;
		
		if (parameters.other) {
			super({
				connector: parameters.connector,
				semanticId: parameters.semanticId!,
				other: parameters.other,
			});
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		} else {
			super({
				connector: parameters.connector,
				semanticId: parameters.semanticId!,
				semanticType: type,
				localizations: parameters.localizations,
				logo: parameters.logo,
				customerCategoriesMembership: parameters.customerCategoriesMembership
		});
		}
		
		
		if (!parameters.doNotStore) {
			this.connector.store(this);
		}
		if (parameters.name) {
			this.setName(parameters.name);
		}
		
		if (parameters.description) {
			this.setDescription(parameters.description);
		}
		
		if (parameters.vatNumber) {
			this.setVatNumber(parameters.vatNumber);
		}
		
		if (parameters.customerCategories) {
			parameters.customerCategories.forEach(e => this.addCustomerCategory(e));
		}
		
		if (parameters.catalogs) {
			parameters.catalogs.forEach(e => this.maintainCatalog(e));
		}
		
		if (parameters.catalogItems) {
			parameters.catalogItems.forEach(e => this.manageCatalogItem(e));
		}
		
		if (parameters.suppliedProducts) {
			parameters.suppliedProducts.forEach(e => this.supplyProduct(e));
		}
		
		if (parameters.technicalProducts) {
			parameters.technicalProducts.forEach(e => this.proposeTechnicalProducts(e));
		}
		
		if (parameters.mainContact) {
			this.setMainContact(parameters.mainContact);
		}
		
		if (parameters.templateSaleSessions) {
			parameters.templateSaleSessions.forEach(e => this.addTemplateSaleSession(e));
		}
		
		if (parameters.certifications) {
			parameters.certifications.forEach(e => this.addCertification(e));
		}
		
		if (parameters.affiliates) {
			parameters.affiliates.forEach(e => this.addAffiliate(e));
		}
		
	}

	public setMainContact(mainContact: IPerson): void {
		this.setSemanticPropertyReference("dfc-b:hasMainContact", mainContact);
		
		this.connector.store(mainContact);
	}

	public async getMainContact(options?: IGetterOptions): Promise<IPerson | undefined> {
		let result: IPerson | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasMainContact");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IPerson> semanticObject;
		}
		return result;
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:hasDescription");
	}

	public async getSuppliedProducts(options?: IGetterOptions): Promise<ISuppliedProduct[]> {
		const results = new Array<ISuppliedProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:supplies");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISuppliedProduct>semanticObject);
		}
		return results;
	}

	public setProposedTechnicalProducts(technicalProducts: ITechnicalProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:proposes").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		technicalProducts.forEach((organization) => {
			this.addSemanticPropertyReference("dfc-b:proposes", organization, true);
			this.connector.store(organization);
		});
	}

	public setSuppliedProducts(suppliedProducts: ISuppliedProduct[]): void {
		
	}

	public async getManagedCatalogItems(options?: IGetterOptions): Promise<ICatalogItem[]> {
		const results = new Array<ICatalogItem>();
		const properties = this.getSemanticPropertyAll("dfc-b:manages");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalogItem>semanticObject);
		}
		return results;
	}

	public proposeTechnicalProducts(technicalProducts: ITechnicalProduct): void {
		if (technicalProducts.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:proposes", technicalProducts);
		}
		else {
			this.connector.store(technicalProducts);
			this.addSemanticPropertyReference("dfc-b:proposes", technicalProducts);
		}
	}

	public manageCatalogItem(catalogItem: ICatalogItem): void {
		if (catalogItem.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:manages", catalogItem);
		}
		else {
			this.connector.store(catalogItem);
			this.addSemanticPropertyReference("dfc-b:manages", catalogItem);
		}
	}

	public addTemplateSaleSession(templateSaleSession: ITemplateSaleSession): void {
		if (templateSaleSession.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasTemplateSaleSession", templateSaleSession);
		}
		else {
			this.connector.store(templateSaleSession);
			this.addSemanticPropertyReference("dfc-b:hasTemplateSaleSession", templateSaleSession);
		}
	}

	public async getMaintainedCatalogs(options?: IGetterOptions): Promise<ICatalog[]> {
		const results = new Array<ICatalog>();
		const properties = this.getSemanticPropertyAll("dfc-b:maintains");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalog>semanticObject);
		}
		return results;
	}

	public async getAffiliates(options?: IGetterOptions): Promise<IPerson[]> {
		const results = new Array<IPerson>();
		const properties = this.getSemanticPropertyAll("dfc-b:affiliates");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPerson>semanticObject);
		}
		return results;
	}

	public setManagedCatalogItems(catalogItems: ICatalogItem[]): void {
		
	}

	public addCertification(certification: ICertification): void {
		if (certification.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:isCertifiedBy", certification);
		}
		else {
			this.connector.store(certification);
			this.addSemanticPropertyReference("dfc-b:isCertifiedBy", certification);
		}
	}

	public removeCertification(certification: ICertification): void {
		throw new Error("Not yet implemented.");
	}

	public async getCustomerCategories(options?: IGetterOptions): Promise<ICustomerCategory[]> {
		const results = new Array<ICustomerCategory>();
		const properties = this.getSemanticPropertyAll("dfc-b:defines");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICustomerCategory>semanticObject);
		}
		return results;
	}

	public setCertifications(certifications: ICertification[]): void {
		this.getSemanticPropertyAll("dfc-b:isCertifiedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		certifications.forEach((organization) => {
			this.addSemanticPropertyReference("dfc-b:isCertifiedBy", organization, true);
			this.connector.store(organization);
		});
	}

	public unsupplyProduct(suppliedProduct: ISuppliedProduct): void {
		throw new Error("Not yet implemented.");
	}

	public unmanageCatalogItem(catalogItem: ICatalogItem): void {
		throw new Error("Not yet implemented.");
	}

	public setTemplateSaleSessions(templateSaleSessions: ITemplateSaleSession[]): void {
		this.getSemanticPropertyAll("dfc-b:hasTemplateSaleSession").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		templateSaleSessions.forEach((organization) => {
			this.addSemanticPropertyReference("dfc-b:hasTemplateSaleSession", organization, true);
			this.connector.store(organization);
		});
	}

	public removeAffiliate(affiliate: IPerson): void {
		throw new Error("Not yet implemented.");
	}

	public async getCertifications(options?: IGetterOptions): Promise<ICertification[]> {
		const results = new Array<ICertification>();
		const properties = this.getSemanticPropertyAll("dfc-b:isCertifiedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICertification>semanticObject);
		}
		return results;
	}

	public addAffiliate(affiliate: IPerson): void {
		if (affiliate.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:affiliates", affiliate);
		}
		else {
			this.connector.store(affiliate);
			this.addSemanticPropertyReference("dfc-b:affiliates", affiliate);
		}
	}

	public maintainCatalog(catalog: ICatalog): void {
		if (catalog.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:maintains", catalog);
		}
		else {
			this.connector.store(catalog);
			this.addSemanticPropertyReference("dfc-b:maintains", catalog);
		}
	}

	public async getTemplateSaleSessions(options?: IGetterOptions): Promise<ITemplateSaleSession[]> {
		const results = new Array<ITemplateSaleSession>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasTemplateSaleSession");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ITemplateSaleSession>semanticObject);
		}
		return results;
	}

	public removeTemplateSaleSession(templateSaleSession: ITemplateSaleSession): void {
		throw new Error("Not yet implemented.");
	}

	public setVatNumber(vatNumber: string): void {
		this.setSemanticPropertyLiteral("dfc-b:VATnumber", vatNumber);
	}

	public unmaintainCatalog(catalog: ICatalog): void {
		throw new Error("Not yet implemented.");
	}

	public supplyProduct(suppliedProduct: ISuppliedProduct): void {
		if (suppliedProduct.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:supplies", suppliedProduct);
		}
		else {
			this.connector.store(suppliedProduct);
			this.addSemanticPropertyReference("dfc-b:supplies", suppliedProduct);
		}
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public getVatNumber(): string | undefined {
		return this.getSemanticProperty("dfc-b:VATnumber");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:hasDescription", description);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public unproposeTechnicalProducts(technicalProducts: ITechnicalProduct): void {
		throw new Error("Not yet implemented.");
	}

	public setCustomerCategories(customerCategories: ICustomerCategory[]): void {
		this.getSemanticPropertyAll("dfc-b:defines").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		customerCategories.forEach((organization) => {
			this.addSemanticPropertyReference("dfc-b:defines", organization, true);
			this.connector.store(organization);
		});
	}

	public setAffiliates(affiliates: IPerson[]): void {
		this.getSemanticPropertyAll("dfc-b:affiliates").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		affiliates.forEach((organization) => {
			this.addSemanticPropertyReference("dfc-b:affiliates", organization, true);
			this.connector.store(organization);
		});
	}

	public addCustomerCategory(customerCategory: ICustomerCategory): void {
		if (customerCategory.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:defines", customerCategory);
		}
		else {
			this.connector.store(customerCategory);
			this.addSemanticPropertyReference("dfc-b:defines", customerCategory);
		}
	}

	public async getProposedTechnicalProducts(options?: IGetterOptions): Promise<ITechnicalProduct[]> {
		const results = new Array<ITechnicalProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:proposes");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ITechnicalProduct>semanticObject);
		}
		return results;
	}

	public removeCustomerCategory(customerCategory: ICustomerCategory): void {
		throw new Error("Not yet implemented.");
	}
}

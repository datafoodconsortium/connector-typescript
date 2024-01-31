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

import IProductType from "./IProductType.js"
import ICatalogItem from "./ICatalogItem.js"
import IGeographicalOrigin from "./IGeographicalOrigin.js"
import ICertification from "./ICertification.js"
import INatureOrigin from "./INatureOrigin.js"
import IQuantity from "./IQuantity.js"
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js"
import INutrientCharacteristic from "./INutrientCharacteristic.js"
import IDefinedProduct from "./IDefinedProduct.js"
import IAllergenCharacteristic from "./IAllergenCharacteristic.js"
import IClaim from "./IClaim.js"
import IPartOrigin from "./IPartOrigin.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js"

export default abstract class DefinedProduct extends SemanticObject implements IDefinedProduct {
	
	protected connector: IConnector;

	protected constructor(parameters: {connector: IConnector, semanticId?: string, semanticType?: string, other?: Semanticable, name?: string, description?: string, images?: string[], productType?: IProductType, quantity?: IQuantity, alcoholPercentage?: number, lifetime?: string, claims?: IClaim[], usageOrStorageConditions?: string, allergenCharacteristics?: IAllergenCharacteristic[], nutrientCharacteristics?: INutrientCharacteristic[], physicalCharacteristics?: IPhysicalCharacteristic[], geographicalOrigin?: IGeographicalOrigin, catalogItems?: ICatalogItem[], certifications?: ICertification[], natureOrigin?: INatureOrigin[], partOrigin?: IPartOrigin[]}) {
		if (parameters.other) super({ semanticId: parameters.semanticId!, other: parameters.other })
		else super({ semanticId: parameters.semanticId!, semanticType: parameters.semanticType! });
		
		this.connector = parameters.connector;
		
		
		if (parameters.name) this.setName(parameters.name);
		if (parameters.description) this.setDescription(parameters.description);
		if (parameters.images) parameters.images.forEach(e => this.addImage(e));
		if (parameters.productType) this.setProductType(parameters.productType);
		if (parameters.quantity) this.setQuantity(parameters.quantity);
		if (parameters.alcoholPercentage || parameters.alcoholPercentage === 0) this.setAlcoholPercentage(parameters.alcoholPercentage);
		if (parameters.lifetime) this.setLifetime(parameters.lifetime);
		if (parameters.claims) parameters.claims.forEach(e => this.addClaim(e));
		if (parameters.usageOrStorageConditions) this.setUsageOrStorageConditions(parameters.usageOrStorageConditions);
		if (parameters.allergenCharacteristics) parameters.allergenCharacteristics.forEach(e => this.addAllergenCharacteristic(e));
		if (parameters.nutrientCharacteristics) parameters.nutrientCharacteristics.forEach(e => this.addNutrientCharacteristic(e));
		if (parameters.physicalCharacteristics) parameters.physicalCharacteristics.forEach(e => this.addPhysicalCharacteristic(e));
		if (parameters.geographicalOrigin) this.setGeographicalOrigin(parameters.geographicalOrigin);
		if (parameters.catalogItems) parameters.catalogItems.forEach(e => this.addCatalogItem(e));
		if (parameters.certifications) parameters.certifications.forEach(e => this.addCertification(e));
		if (parameters.natureOrigin) parameters.natureOrigin.forEach(e => this.addNatureOrigin(e));
		if (parameters.partOrigin) parameters.partOrigin.forEach(e => this.addPartOrigin(e));
	}

	public setName(name: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#name";
		this.setSemanticPropertyLiteral(property, name);
	}
	

	public getName(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#name");
	}
	
	public async getPartOrigin(options?: IGetterOptions): Promise<Array<IPartOrigin>>
	 {
		const results = new Array<IPartOrigin>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasPartOrigin");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPartOrigin> semanticObject);
		}
		return results;
	}
	

	public addNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasNutrientCharacteristic";
		if (nutrientCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, nutrientCharacteristic);
		}
		else {
			this.connector.store(nutrientCharacteristic);
			this.addSemanticPropertyReference(property, nutrientCharacteristic);
		}
	}
	

	public getUsageOrStorageConditions(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#usageOrStorageCondition");
	}
	

	public async getGeographicalOrigin(options?: IGetterOptions): Promise<IGeographicalOrigin | undefined>
	 {
		let result: IGeographicalOrigin | undefined = undefined;
		const semanticId = this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasGeographicalOrigin");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IGeographicalOrigin | undefined> semanticObject;
		}
		return result;
		
	}
	

	public getAlcoholPercentage(): number
	 {
		return Number(this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#alcoholPercentage"));
	}
	

	public removeAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void {
		throw new Error("Not yet implemented.");
	}
	

	public async getNutrientCharacteristics(options?: IGetterOptions): Promise<Array<INutrientCharacteristic>>
	 {
		const results = new Array<INutrientCharacteristic>();
		const blankNodesId = this.getSemanticPropertyAnonymousAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasNutrientCharacteristic");
		blankNodesId.forEach(blankNodeId => {
			const blankNode = <INutrientCharacteristic> this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
			results.push(blankNode);
		});return results;
	}
	

	public async getPhysicalCharacteristics(options?: IGetterOptions): Promise<Array<IPhysicalCharacteristic>>
	 {
		const results = new Array<IPhysicalCharacteristic>();
		const blankNodesId = this.getSemanticPropertyAnonymousAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasPhysicalCharacteristic");
		blankNodesId.forEach(blankNodeId => {
			const blankNode = <IPhysicalCharacteristic> this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
			results.push(blankNode);
		});return results;
	}
	

	public removeNatureOrigin(natureOrigin: INatureOrigin): void {
		throw new Error("Not yet implemented.");
	}
	

	public async getNatureOrigin(options?: IGetterOptions): Promise<Array<INatureOrigin>>
	 {
		const results = new Array<INatureOrigin>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasNatureOrigin");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<INatureOrigin> semanticObject);
		}
		return results;
	}
	

	public addPartOrigin(partOrigin: IPartOrigin): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasPartOrigin";
		if (partOrigin.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, partOrigin);
		}
		else {
			this.connector.store(partOrigin);
			this.addSemanticPropertyReference(property, partOrigin);
		}
	}
	

	public removeNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void {
		throw new Error("Not yet implemented.");
	}
	

	public setLifetime(lifetime: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#lifetime";
		this.setSemanticPropertyLiteral(property, lifetime);
	}
	

	public setAlcoholPercentage(alcoholPercentage: number): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#alcoholPercentage";
		this.setSemanticPropertyLiteral(property, alcoholPercentage);
	}
	

	public addPhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasPhysicalCharacteristic";
		if (physicalCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, physicalCharacteristic);
		}
		else {
			this.connector.store(physicalCharacteristic);
			this.addSemanticPropertyReference(property, physicalCharacteristic);
		}
	}
	

	public async getAllergenCharacteristics(options?: IGetterOptions): Promise<Array<IAllergenCharacteristic>>
	 {
		const results = new Array<IAllergenCharacteristic>();
		const blankNodesId = this.getSemanticPropertyAnonymousAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasAllergenCharacteristic");
		blankNodesId.forEach(blankNodeId => {
			const blankNode = <IAllergenCharacteristic> this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
			results.push(blankNode);
		});return results;
	}
	

	public getLifetime(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#lifetime");
	}
	

	public addNatureOrigin(natureOrigin: INatureOrigin): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasNatureOrigin";
		if (natureOrigin.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, natureOrigin);
		}
		else {
			this.connector.store(natureOrigin);
			this.addSemanticPropertyReference(property, natureOrigin);
		}
	}
	

	public addAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasAllergenCharacteristic";
		if (allergenCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, allergenCharacteristic);
		}
		else {
			this.connector.store(allergenCharacteristic);
			this.addSemanticPropertyReference(property, allergenCharacteristic);
		}
	}
	

	public removePhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void {
		throw new Error("Not yet implemented.");
	}
	

	public removePartOrigin(partOrigin: IPartOrigin): void {
		throw new Error("Not yet implemented.");
	}
	

	public setUsageOrStorageConditions(usageOrStorageConditions: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#usageOrStorageCondition";
		this.setSemanticPropertyLiteral(property, usageOrStorageConditions);
	}
	

	public setGeographicalOrigin(geographicalOrigin: IGeographicalOrigin): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasGeographicalOrigin";
		this.setSemanticPropertyReference(property, geographicalOrigin);
		this.connector.store(geographicalOrigin);
	}
	
	public setDescription(description: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#description";
		this.setSemanticPropertyLiteral(property, description);
	}
	

	public getDescription(): string
	 {
		return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#description");
	}
	
	public removeCertification(certification: ICertification): void {
		throw new Error("Not yet implemented.");
	}
	

	public async getCertifications(options?: IGetterOptions): Promise<Array<ICertification>>
	 {
		const results = new Array<ICertification>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasCertification");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICertification> semanticObject);
		}
		return results;
	}
	

	public addCertification(certification: ICertification): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasCertification";
		if (certification.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, certification);
		}
		else {
			this.connector.store(certification);
			this.addSemanticPropertyReference(property, certification);
		}
	}
	
	public async getQuantity(options?: IGetterOptions): Promise<IQuantity | undefined>
	 {
		const blankNode: any = this.getSemanticPropertyAnonymous("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasQuantity");
		return <IQuantity> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}
	

	public async getProductType(options?: IGetterOptions): Promise<IProductType | undefined>
	 {
		let result: IProductType | undefined = undefined;
		const semanticId = this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasType");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IProductType | undefined> semanticObject;
		}
		return result;
		
	}
	

	public removeClaim(claim: IClaim): void {
		throw new Error("Not yet implemented.");
	}
	

	public async getClaims(options?: IGetterOptions): Promise<Array<IClaim>>
	 {
		const results = new Array<IClaim>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasClaim");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IClaim> semanticObject);
		}
		return results;
	}
	

	public addClaim(claim: IClaim): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasClaim";
		if (claim.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, claim);
		}
		else {
			this.connector.store(claim);
			this.addSemanticPropertyReference(property, claim);
		}
	}
	

	public setProductType(productType: IProductType): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasType";
		this.setSemanticPropertyReference(property, productType);
		this.connector.store(productType);
	}
	

	public setQuantity(quantity: IQuantity): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasQuantity";
		this.setSemanticPropertyAnonymous(property, quantity);
	}
	
	public addCatalogItem(catalogItem: ICatalogItem): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#referencedBy";
		if (catalogItem.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous(property, catalogItem);
		}
		else {
			this.connector.store(catalogItem);
			this.addSemanticPropertyReference(property, catalogItem);
		}
	}
	

	public async getCatalogItems(options?: IGetterOptions): Promise<Array<ICatalogItem>>
	 {
		const results = new Array<ICatalogItem>();
		const properties = this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#referencedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalogItem> semanticObject);
		}
		return results;
	}

	public addImage(url: string): void {
		const property: string = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#image";
		this.addSemanticPropertyLiteral(property, url);
	}

	public getImages(): string[] {
		return this.getSemanticPropertyAll("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#image");
	}
	

}

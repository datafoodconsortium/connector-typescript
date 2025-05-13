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
import IQuantity from "./IQuantity.js"
import IDefinedProduct from "./IDefinedProduct.js"
import IAllergenCharacteristic from "./IAllergenCharacteristic.js"
import INutrientCharacteristic from "./INutrientCharacteristic.js"
import ISKOSConcept from "./ISKOSConcept.js"
import ICatalogItem from "./ICatalogItem.js"
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

export default abstract class DefinedProduct extends SemanticObject implements IDefinedProduct {

	protected connector: IConnector;

	protected constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		semanticType?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		productType?: ISKOSConcept,
		quantity?: IQuantity,
		alcoholPercentage?: number,
		lifetime?: string,
		claims?: ISKOSConcept[],
		usageOrStorageConditions?: string,
		allergenCharacteristics?: IAllergenCharacteristic[],
		nutrientCharacteristics?: INutrientCharacteristic[],
		physicalCharacteristics?: IPhysicalCharacteristic[],
		geographicalOrigin?: ISKOSConcept,
		catalogItems?: ICatalogItem[],
		certifications?: ISKOSConcept[],
		natureOrigin?: ISKOSConcept[],
		partOrigin?: ISKOSConcept[],
		images?: string[],
		variants?: IDefinedProduct[],
		isVariantOf?: IDefinedProduct[],
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
		
		if (parameters.productType) {
			this.setProductType(parameters.productType);
		}
		
		if (parameters.quantity) {
			this.setQuantity(parameters.quantity);
		}
		
		if (parameters.alcoholPercentage || parameters.alcoholPercentage === 0) {
			this.setAlcoholPercentage(parameters.alcoholPercentage);
		}
		
		if (parameters.lifetime) {
			this.setLifetime(parameters.lifetime);
		}
		
		if (parameters.claims) {
			parameters.claims.forEach(e => this.addClaim(e));
		}
		
		if (parameters.usageOrStorageConditions) {
			this.setUsageOrStorageConditions(parameters.usageOrStorageConditions);
		}
		
		if (parameters.allergenCharacteristics) {
			parameters.allergenCharacteristics.forEach(e => this.addAllergenCharacteristic(e));
		}
		
		if (parameters.nutrientCharacteristics) {
			parameters.nutrientCharacteristics.forEach(e => this.addNutrientCharacteristic(e));
		}
		
		if (parameters.physicalCharacteristics) {
			parameters.physicalCharacteristics.forEach(e => this.addPhysicalCharacteristic(e));
		}
		
		if (parameters.geographicalOrigin) {
			this.setGeographicalOrigin(parameters.geographicalOrigin);
		}
		
		if (parameters.catalogItems) {
			parameters.catalogItems.forEach(e => this.addCatalogItem(e));
		}
		
		if (parameters.certifications) {
			parameters.certifications.forEach(e => this.addCertification(e));
		}
		
		if (parameters.natureOrigin) {
			parameters.natureOrigin.forEach(e => this.addNatureOrigin(e));
		}
		
		if (parameters.partOrigin) {
			parameters.partOrigin.forEach(e => this.addPartOrigin(e));
		}
		
		if (parameters.images) {
			parameters.images.forEach(e => this.addImage(e));
		}
		
		if (parameters.variants) {
			parameters.variants.forEach(e => this.addVariant(e));
		}
		
		if (parameters.isVariantOf) {
			parameters.isVariantOf.forEach(e => this.addIsVariantOf(e));
		}
		
	}

	public setProductType(productType: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasType", productType);
		
		this.connector.store(productType);
	}

	public addClaim(claim: ISKOSConcept): void {
		if (claim.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasClaim", claim);
		}
		else {
			this.connector.store(claim);
			this.addSemanticPropertyReference("dfc-b:hasClaim", claim);
		}
	}

	public async getPartOrigin(options?: IGetterOptions): Promise<ISKOSConcept[]> {
		const results = new Array<ISKOSConcept>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasPartOrigin");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISKOSConcept>semanticObject);
		}
		return results;
	}

	public removeIsVariantOf(parent: IDefinedProduct): void {
		throw new Error("Not yet implemented.");
	}

	public async getVariants(options?: IGetterOptions): Promise<IDefinedProduct[]> {
		const results = new Array<IDefinedProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasVariant");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IDefinedProduct>semanticObject);
		}
		return results;
	}

	public removeNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void {
		throw new Error("Not yet implemented.");
	}

	public async getProductType(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasType");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public addIsVariantOf(parent: IDefinedProduct): void {
		if (parent.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:isVariantOf", parent);
		}
		else {
			this.connector.store(parent);
			this.addSemanticPropertyReference("dfc-b:isVariantOf", parent);
		}
	}

	public getAlcoholPercentage(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:alcoholPercentage"));
	}

	public addVariant(variant: IDefinedProduct): void {
		if (variant.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasVariant", variant);
		}
		else {
			this.connector.store(variant);
			this.addSemanticPropertyReference("dfc-b:hasVariant", variant);
		}
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public async getClaims(options?: IGetterOptions): Promise<ISKOSConcept[]> {
		const results = new Array<ISKOSConcept>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasClaim");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISKOSConcept>semanticObject);
		}
		return results;
	}

	public async getIsVariantOf(options?: IGetterOptions): Promise<IDefinedProduct[]> {
		const results = new Array<IDefinedProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:isVariantOf");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IDefinedProduct>semanticObject);
		}
		return results;
	}

	public async getGeographicalOrigin(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasGeographicalOrigin");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public removeAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void {
		throw new Error("Not yet implemented.");
	}

	public setVariants(variants: IDefinedProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:hasVariant").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		variants.forEach((definedProduct) => {
			this.addSemanticPropertyReference("dfc-b:hasVariant", definedProduct, true);
			this.connector.store(definedProduct);
		});
	}

	public removeVariant(variant: IDefinedProduct): void {
		throw new Error("Not yet implemented.");
	}

	public removeNatureOrigin(natureOrigin: ISKOSConcept): void {
		throw new Error("Not yet implemented.");
	}

	public setLifetime(lifetime: string): void {
		this.setSemanticPropertyLiteral("dfc-b:lifetime", lifetime);
	}

	public addNatureOrigin(natureOrigin: ISKOSConcept): void {
		if (natureOrigin.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasNatureOrigin", natureOrigin);
		}
		else {
			this.connector.store(natureOrigin);
			this.addSemanticPropertyReference("dfc-b:hasNatureOrigin", natureOrigin);
		}
	}

	public removePartOrigin(partOrigin: ISKOSConcept): void {
		throw new Error("Not yet implemented.");
	}

	public addAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void {
		if (allergenCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasAllergenCharacteristic", allergenCharacteristic);
		}
		else {
			this.connector.store(allergenCharacteristic);
			this.addSemanticPropertyReference("dfc-b:hasAllergenCharacteristic", allergenCharacteristic);
		}
	}

	public addImage(image: string): void {
		this.addSemanticPropertyLiteral("dfc-b:image", image);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public setAlcoholPercentage(alcoholPercentage: number): void {
		this.setSemanticPropertyLiteral("dfc-b:alcoholPercentage", alcoholPercentage);
	}

	public getQuantity(): IQuantity | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
		return <IQuantity> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public getImages(): string[] {
		return this.getSemanticPropertyAll("dfc-b:image");
	}

	public async getAllergenCharacteristics(options?: IGetterOptions): Promise<IAllergenCharacteristic[]> {
		const results = new Array<IAllergenCharacteristic>();
		const blankNodesId = this.getSemanticPropertyAnonymousAll("dfc-b:hasAllergenCharacteristic");
		blankNodesId.forEach(blankNodeId => {
			const blankNode = <IAllergenCharacteristic> this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
			results.push(blankNode);
		});
		return results;
	}

	public async getCatalogItems(options?: IGetterOptions): Promise<ICatalogItem[]> {
		const results = new Array<ICatalogItem>();
		const properties = this.getSemanticPropertyAll("dfc-b:referencedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalogItem>semanticObject);
		}
		return results;
	}

	public getLifetime(): string | undefined {
		return this.getSemanticProperty("dfc-b:lifetime");
	}

	public addNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void {
		if (nutrientCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasNutrientCharacteristic", nutrientCharacteristic);
		}
		else {
			this.connector.store(nutrientCharacteristic);
			this.addSemanticPropertyReference("dfc-b:hasNutrientCharacteristic", nutrientCharacteristic);
		}
	}

	public addPartOrigin(partOrigin: ISKOSConcept): void {
		if (partOrigin.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasPartOrigin", partOrigin);
		}
		else {
			this.connector.store(partOrigin);
			this.addSemanticPropertyReference("dfc-b:hasPartOrigin", partOrigin);
		}
	}

	public removeClaim(claim: ISKOSConcept): void {
		throw new Error("Not yet implemented.");
	}

	public async getPhysicalCharacteristics(options?: IGetterOptions): Promise<IPhysicalCharacteristic[]> {
		const results = new Array<IPhysicalCharacteristic>();
		const blankNodesId = this.getSemanticPropertyAnonymousAll("dfc-b:hasPhysicalCharacteristic");
		blankNodesId.forEach(blankNodeId => {
			const blankNode = <IPhysicalCharacteristic> this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
			results.push(blankNode);
		});
		return results;
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public getUsageOrStorageConditions(): string | undefined {
		return this.getSemanticProperty("dfc-b:usageOrStorageCondition");
	}

	public setIsVariantOf(parents: IDefinedProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:isVariantOf").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		parents.forEach((definedProduct) => {
			this.addSemanticPropertyReference("dfc-b:isVariantOf", definedProduct, true);
			this.connector.store(definedProduct);
		});
	}

	public addCertification(certification: ISKOSConcept): void {
		if (certification.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasCertification", certification);
		}
		else {
			this.connector.store(certification);
			this.addSemanticPropertyReference("dfc-b:hasCertification", certification);
		}
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public async getCertifications(options?: IGetterOptions): Promise<ISKOSConcept[]> {
		const results = new Array<ISKOSConcept>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasCertification");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISKOSConcept>semanticObject);
		}
		return results;
	}

	public async getNutrientCharacteristics(options?: IGetterOptions): Promise<INutrientCharacteristic[]> {
		const results = new Array<INutrientCharacteristic>();
		const blankNodesId = this.getSemanticPropertyAnonymousAll("dfc-b:hasNutrientCharacteristic");
		blankNodesId.forEach(blankNodeId => {
			const blankNode = <INutrientCharacteristic> this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
			results.push(blankNode);
		});
		return results;
	}

	public setQuantity(quantity: IQuantity): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
		
	}

	public removePhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void {
		throw new Error("Not yet implemented.");
	}

	public removeImage(image: string): void {
		throw new Error("Not yet implemented.");
	}

	public setGeographicalOrigin(geographicalOrigin: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasGeographicalOrigin", geographicalOrigin);
		
		this.connector.store(geographicalOrigin);
	}

	public addPhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void {
		if (physicalCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasPhysicalCharacteristic", physicalCharacteristic);
		}
		else {
			this.connector.store(physicalCharacteristic);
			this.addSemanticPropertyReference("dfc-b:hasPhysicalCharacteristic", physicalCharacteristic);
		}
	}

	public removeCertification(certification: ISKOSConcept): void {
		throw new Error("Not yet implemented.");
	}

	public async getNatureOrigin(options?: IGetterOptions): Promise<ISKOSConcept[]> {
		const results = new Array<ISKOSConcept>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasNatureOrigin");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISKOSConcept>semanticObject);
		}
		return results;
	}

	public addCatalogItem(catalogItem: ICatalogItem): void {
		if (catalogItem.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:referencedBy", catalogItem);
		}
		else {
			this.connector.store(catalogItem);
			this.addSemanticPropertyReference("dfc-b:referencedBy", catalogItem);
		}
	}

	public setUsageOrStorageConditions(usageOrStorageConditions: string): void {
		this.setSemanticPropertyLiteral("dfc-b:usageOrStorageCondition", usageOrStorageConditions);
	}
}

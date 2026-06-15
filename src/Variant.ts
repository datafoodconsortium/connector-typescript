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
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js"
import IVariant from "./IVariant.js"
import IQuantity from "./IQuantity.js"
import INutrientCharacteristic from "./INutrientCharacteristic.js"
import IAllergenCharacteristic from "./IAllergenCharacteristic.js"
import ISKOSConcept from "./ISKOSConcept.js"
import DefinedProduct from "./DefinedProduct.js"
import IProductOption from "./IProductOption.js"
import IVariantCharacteristic from "./IVariantCharacteristic.js"
import IDefinedProduct from "./IDefinedProduct.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const VARIANT_SEM_TYPE: string = "dfc-b:Variant";

export default class Variant extends DefinedProduct implements IVariant {

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
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
		variantCharacteristics?: IVariantCharacteristic[],
		referenceProductOptions?: IProductOption[],
		doNotStore?: boolean,
	}) {
		
		const type: string = VARIANT_SEM_TYPE;
		
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
				name: parameters.name,
				description: parameters.description,
				productType: parameters.productType,
				quantity: parameters.quantity,
				alcoholPercentage: parameters.alcoholPercentage,
				lifetime: parameters.lifetime,
				claims: parameters.claims,
				usageOrStorageConditions: parameters.usageOrStorageConditions,
				allergenCharacteristics: parameters.allergenCharacteristics,
				nutrientCharacteristics: parameters.nutrientCharacteristics,
				physicalCharacteristics: parameters.physicalCharacteristics,
				geographicalOrigin: parameters.geographicalOrigin,
				catalogItems: parameters.catalogItems,
				certifications: parameters.certifications,
				natureOrigin: parameters.natureOrigin,
				partOrigin: parameters.partOrigin,
				images: parameters.images,
				variants: parameters.variants,
				referenceProductOptions: parameters.referenceProductOptions
		});
		}
		
		
		if (!parameters.doNotStore) {
			this.connector.store(this);
		}
		if (parameters.isVariantOf) {
			parameters.isVariantOf.forEach(e => this.addIsVariantOf(e));
		}
		
		if (parameters.variantCharacteristics) {
			parameters.variantCharacteristics.forEach(e => this.addVariantCharacteristic(e));
		}
		
	}

	public removeIsVariantOf(product: IDefinedProduct): void {
		throw new Error("Not yet implemented.");
	}

	public async getVariantCharacteristics(options?: IGetterOptions): Promise<IVariantCharacteristic[]> {
		const results = new Array<IVariantCharacteristic>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasVariantCaracteristic");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IVariantCharacteristic>semanticObject);
		}
		return results;
	}

	public async isVariantOf(options?: IGetterOptions): Promise<IDefinedProduct[]> {
		const results = new Array<IDefinedProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:isVariantOf");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IDefinedProduct>semanticObject);
		}
		return results;
	}

	public removeVariantCharacteristic(variantCharacteristic: IVariantCharacteristic): void {
		throw new Error("Not yet implemented.");
	}

	public setVariantCharacteristics(variantCharacteristics: IVariantCharacteristic[]): void {
		this.getSemanticPropertyAll("dfc-b:hasVariantCaracteristic").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		variantCharacteristics.forEach((variant) => {
			this.addSemanticPropertyReference("dfc-b:hasVariantCaracteristic", variant, true);
			this.connector.store(variant);
		});
	}

	public setIsVariantOf(products: IDefinedProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:isVariantOf").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		products.forEach((variant) => {
			this.addSemanticPropertyReference("dfc-b:isVariantOf", variant, true);
			this.connector.store(variant);
		});
	}

	public addVariantCharacteristic(variantCharacteristic: IVariantCharacteristic): void {
		if (variantCharacteristic.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasVariantCaracteristic", variantCharacteristic);
		}
		else {
			this.connector.store(variantCharacteristic);
			this.addSemanticPropertyReference("dfc-b:hasVariantCaracteristic", variantCharacteristic);
		}
	}

	public addIsVariantOf(product: IDefinedProduct): void {
		if (product.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:isVariantOf", product);
		}
		else {
			this.connector.store(product);
			this.addSemanticPropertyReference("dfc-b:isVariantOf", product);
		}
	}
}

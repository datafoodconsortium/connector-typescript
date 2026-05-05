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
import IProductOptionValue from "./IProductOptionValue.js"
import IProductOption from "./IProductOption.js"
import IVariantCharacteristic from "./IVariantCharacteristic.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const VARIANT_CHARACTERISTIC_SEM_TYPE: string = "dfc-b:VariantCaracteristic";

export default class VariantCharacteristic extends SemanticObject implements IVariantCharacteristic {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		date?: string,
		productOption?: IProductOption,
		productOptionValue?: IProductOptionValue,
		doNotStore?: boolean,
	}) {
		
		const type: string = VARIANT_CHARACTERISTIC_SEM_TYPE;
		
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
		if (parameters.name) {
			this.setName(parameters.name);
		}
		
		if (parameters.description) {
			this.setDescription(parameters.description);
		}
		
		if (parameters.date) {
			this.setDate(parameters.date);
		}
		
		if (parameters.productOption) {
			this.setProductOption(parameters.productOption);
		}
		
		if (parameters.productOptionValue) {
			this.setProductOptionValue(parameters.productOptionValue);
		}
		
	}

	public async getProductOption(options?: IGetterOptions): Promise<IProductOption | undefined> {
		let result: IProductOption | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasProductOption");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IProductOption> semanticObject;
		}
		return result;
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setDate(date: string): void {
		this.setSemanticPropertyLiteral("dfc-b:date", date);
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setProductOptionValue(productOptionValue: IProductOptionValue): void {
		this.setSemanticPropertyReference("dfc-b:hasProductOptionValue", productOptionValue);
		
		this.connector.store(productOptionValue);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public getDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:date");
	}

	public async getProductOptionValue(options?: IGetterOptions): Promise<IProductOptionValue | undefined> {
		let result: IProductOptionValue | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasProductOptionValue");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IProductOptionValue> semanticObject;
		}
		return result;
	}

	public setProductOption(productOption: IProductOption): void {
		this.setSemanticPropertyReference("dfc-b:hasProductOption", productOption);
		
		this.connector.store(productOption);
	}
}

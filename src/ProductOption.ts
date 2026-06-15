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
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PRODUCT_OPTION_SEM_TYPE: string = "dfc-b:ProductOption";

export default class ProductOption extends SemanticObject implements IProductOption {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		date?: string,
		referenceProductionOptionValue?: IProductOptionValue[],
		doNotStore?: boolean,
	}) {
		
		const type: string = PRODUCT_OPTION_SEM_TYPE;
		
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
		
		if (parameters.referenceProductionOptionValue) {
			parameters.referenceProductionOptionValue.forEach(e => this.addReferenceProductionOptionValue(e));
		}
		
	}

	public getDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:date");
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public addReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void {
		if (productOptionValue.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasReferenceProductOptionValue", productOptionValue);
		}
		else {
			this.connector.store(productOptionValue);
			this.addSemanticPropertyReference("dfc-b:hasReferenceProductOptionValue", productOptionValue);
		}
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public removeReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void {
		throw new Error("Not yet implemented.");
	}

	public setDate(date: string): void {
		this.setSemanticPropertyLiteral("dfc-b:date", date);
	}

	public setReferenceProductionOptionValue(productOptionValues: IProductOptionValue[]): void {
		this.getSemanticPropertyAll("dfc-b:hasReferenceProductOptionValue").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		productOptionValues.forEach((productOption) => {
			this.addSemanticPropertyReference("dfc-b:hasReferenceProductOptionValue", productOption, true);
			this.connector.store(productOption);
		});
	}

	public async getReferenceProductionOptionValue(options?: IGetterOptions): Promise<IProductOptionValue[]> {
		const results = new Array<IProductOptionValue>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasReferenceProductOptionValue");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IProductOptionValue>semanticObject);
		}
		return results;
	}
}

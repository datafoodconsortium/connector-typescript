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
import Quantifiable from "./Quantifiable.js"
import ISKOSConcept from "./ISKOSConcept.js"
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const QUANTITATIVE_VALUE_SEM_TYPE: string = "dfc-b:QuantitativeValue";

export default class QuantitativeValue extends SemanticObjectAnonymous implements Quantifiable {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		semanticType?: string,
		other?: Semanticable,
		unit?: ISKOSConcept,
		value?: number,
	}) {
		
		const type: string = parameters.semanticType ? parameters.semanticType : QUANTITATIVE_VALUE_SEM_TYPE;
		
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
		
		
		if (parameters.unit) {
			this.setQuantityUnit(parameters.unit);
		}
		
		if (parameters.value || parameters.value === 0) {
			this.setQuantityValue(parameters.value);
		}
		
	}

	public getQuantityValue(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:value"));
	}

	public setQuantityValue(quantityValue: number): void {
		this.setSemanticPropertyLiteral("dfc-b:value", quantityValue);
	}

	public async getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasUnit");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public setQuantityUnit(quantityUnit: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasUnit", quantityUnit);
		
		this.connector.store(quantityUnit);
	}
}

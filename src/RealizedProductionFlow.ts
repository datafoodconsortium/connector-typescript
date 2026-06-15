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
import IRealizedProductionFlow from "./IRealizedProductionFlow.js"
import Flow from "./Flow.js"
import IQuantity from "./IQuantity.js"
import IRealizedTransformation from "./IRealizedTransformation.js"
import IPhysicalProduct from "./IPhysicalProduct.js"
import IRealizedFlow from "./IRealizedFlow.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const REALIZED_PRODUCTION_FLOW_SEM_TYPE: string = "dfc-b:AsRealizedProductionFlow";

export default class RealizedProductionFlow extends Flow implements IRealizedFlow, IRealizedProductionFlow {

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		quantity?: IQuantity,
		transformation?: IRealizedTransformation,
		product?: IPhysicalProduct,
		doNotStore?: boolean,
	}) {
		
		const type: string = REALIZED_PRODUCTION_FLOW_SEM_TYPE;
		
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
				quantity: parameters.quantity
		});
		}
		
		
		if (!parameters.doNotStore) {
			this.connector.store(this);
		}
		if (parameters.transformation) {
			this.setRealizedTransformation(parameters.transformation);
		}
		
		if (parameters.product) {
			this.setProducedProduct(parameters.product);
		}
		
	}

	public async getRealizedTransformation(options?: IGetterOptions): Promise<IRealizedTransformation | undefined> {
		let result: IRealizedTransformation | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:outputOf");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IRealizedTransformation> semanticObject;
		}
		return result;
	}

	public setRealizedTransformation(realizedTransformation: IRealizedTransformation): void {
		this.setSemanticPropertyReference("dfc-b:outputOf", realizedTransformation);
		
		this.connector.store(realizedTransformation);
	}

	public setProducedProduct(producedProduct: IPhysicalProduct): void {
		this.setSemanticPropertyReference("dfc-b:produces", producedProduct);
		
		this.connector.store(producedProduct);
	}

	public async getProducedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined> {
		let result: IPhysicalProduct | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:produces");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IPhysicalProduct> semanticObject;
		}
		return result;
	}
}

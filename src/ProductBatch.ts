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
import IRealStock from "./IRealStock.js"
import IPhysicalProduct from "./IPhysicalProduct.js"
import IProductBatch from "./IProductBatch.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PRODUCT_BATCH_SEM_TYPE: string = "dfc-b:ProductBatch";

export default class ProductBatch extends SemanticObject implements IProductBatch {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		batchNumber?: string,
		realStock?: IRealStock,
		physicalProduct?: IPhysicalProduct,
		bestBeforeDate?: string,
		expirationDate?: string,
		productionDate?: string,
		doNotStore?: boolean,
	}) {
		
		const type: string = PRODUCT_BATCH_SEM_TYPE;
		
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
		
		if (parameters.batchNumber) {
			this.setBatchNumber(parameters.batchNumber);
		}
		
		if (parameters.realStock) {
			this.setRealStock(parameters.realStock);
		}
		
		if (parameters.physicalProduct) {
			this.setPhysicalProduct(parameters.physicalProduct);
		}
		
		if (parameters.bestBeforeDate) {
			this.setBestBeforeDate(parameters.bestBeforeDate);
		}
		
		if (parameters.expirationDate) {
			this.setExpirationDate(parameters.expirationDate);
		}
		
		if (parameters.productionDate) {
			this.setProductionDate(parameters.productionDate);
		}
		
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setPhysicalProduct(physicalProduct: IPhysicalProduct): void {
		this.setSemanticPropertyReference("dfc-b:contains", physicalProduct);
		
		this.connector.store(physicalProduct);
	}

	public getProductionDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:productionDate");
	}

	public getBestBeforeDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:bestBeforeDate");
	}

	public getBatchNumber(): string | undefined {
		return this.getSemanticProperty("dfc-b:batchNumber");
	}

	public setBestBeforeDate(bestBeforeDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:bestBeforeDate", bestBeforeDate);
	}

	public setBatchNumber(batchNumber: string): void {
		this.setSemanticPropertyLiteral("dfc-b:batchNumber", batchNumber);
	}

	public getExpirationDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:expirationDate");
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public setRealStock(realStock: IRealStock): void {
		this.setSemanticPropertyReference("dfc-b:identifiedBy", realStock);
		
		this.connector.store(realStock);
	}

	public setExpirationDate(expirationDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:expirationDate", expirationDate);
	}

	public async getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined> {
		let result: IPhysicalProduct | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:contains");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IPhysicalProduct> semanticObject;
		}
		return result;
	}

	public async getRealStock(options?: IGetterOptions): Promise<IRealStock | undefined> {
		let result: IRealStock | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:identifiedBy");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IRealStock> semanticObject;
		}
		return result;
	}

	public setProductionDate(productionDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:productionDate", productionDate);
	}
}

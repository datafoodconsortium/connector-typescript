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
import IPhysicalProduct from "./IPhysicalProduct.js"
import IProductBatch from "./IProductBatch.js"
import IPhysicalPlace from "./IPhysicalPlace.js"
import IRealStock from "./IRealStock.js"
import IQuantity from "./IQuantity.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const REAL_STOCK_SEM_TYPE: string = "dfc-b:RealStock";

export default class RealStock extends SemanticObject implements IRealStock {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		physicalProduct?: IPhysicalProduct,
		quantity?: IQuantity,
		physicalPlace?: IPhysicalPlace,
		availabilityDate?: string,
		productBatches?: IProductBatch[],
		doNotStore?: boolean,
	}) {
		
		const type: string = REAL_STOCK_SEM_TYPE;
		
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
		if (parameters.physicalProduct) {
			this.setPhysicalProduct(parameters.physicalProduct);
		}
		
		if (parameters.quantity) {
			this.setQuantity(parameters.quantity);
		}
		
		if (parameters.physicalPlace) {
			this.setPhysicalPlace(parameters.physicalPlace);
		}
		
		if (parameters.availabilityDate) {
			this.setAvailabilityDate(parameters.availabilityDate);
		}
		
		if (parameters.productBatches) {
			parameters.productBatches.forEach(e => this.addProductBatch(e));
		}
		
	}

	public setPhysicalProduct(physicalProduct: IPhysicalProduct): void {
		this.setSemanticPropertyReference("dfc-b:constitutes", physicalProduct);
		
		this.connector.store(physicalProduct);
	}

	public getQuantity(): IQuantity | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
		return <IQuantity> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public setQuantity(quantity: IQuantity): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
		
	}

	public async getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined> {
		let result: IPhysicalPlace | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:isStoredIn");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IPhysicalPlace> semanticObject;
		}
		return result;
	}

	public getAvailabilityDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:availabilityDate");
	}

	public async getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined> {
		let result: IPhysicalProduct | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:constitutes");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IPhysicalProduct> semanticObject;
		}
		return result;
	}

	public setAvailabilityDate(availabilityDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:availabilityDate", availabilityDate);
	}

	public addProductBatch(productBatch: IProductBatch): void {
		if (productBatch.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:identifies", productBatch);
		}
		else {
			this.connector.store(productBatch);
			this.addSemanticPropertyReference("dfc-b:identifies", productBatch);
		}
	}

	public removeProductBatch(ProductBatch: IProductBatch): void {
		throw new Error("Not yet implemented.");
	}

	public setPhysicalPlace(physicalPlace: IPhysicalPlace): void {
		this.setSemanticPropertyReference("dfc-b:isStoredIn", physicalPlace);
		
		this.connector.store(physicalPlace);
	}

	public setProductBatches(ProductBatches: IProductBatch[]): void {
		this.getSemanticPropertyAll("dfc-b:identifies").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		ProductBatches.forEach((realStock) => {
			this.addSemanticPropertyReference("dfc-b:identifies", realStock, true);
			this.connector.store(realStock);
		});
	}

	public async getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]> {
		const results = new Array<IProductBatch>();
		const properties = this.getSemanticPropertyAll("dfc-b:identifies");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IProductBatch>semanticObject);
		}
		return results;
	}
}

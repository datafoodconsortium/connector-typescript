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
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js"
import IProductBatch from "./IProductBatch.js"
import IRealizedProductionFlow from "./IRealizedProductionFlow.js"
import ILocalizedProduct from "./ILocalizedProduct.js"
import IRealStock from "./IRealStock.js"
import IQuantity from "./IQuantity.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PHYSICAL_PRODUCT_SEM_TYPE: string = "dfc-b:PhysicalProduct";

export default class PhysicalProduct extends SemanticObject implements IPhysicalProduct {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		quantity?: IQuantity,
		images?: string[],
		localizedProducts?: ILocalizedProduct[],
		productBatches?: IProductBatch[],
		realStocks?: IRealStock[],
		realizedConsumptionFlows?: IRealizedConsumptionFlow[],
		realizedProductionFlows?: IRealizedProductionFlow[],
		doNotStore?: boolean,
	}) {
		
		const type: string = PHYSICAL_PRODUCT_SEM_TYPE;
		
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
		
		if (parameters.quantity) {
			this.setQuantity(parameters.quantity);
		}
		
		if (parameters.images) {
			parameters.images.forEach(e => this.addImage(e));
		}
		
		if (parameters.localizedProducts) {
			parameters.localizedProducts.forEach(e => this.addLocalizedProduct(e));
		}
		
		if (parameters.productBatches) {
			parameters.productBatches.forEach(e => this.addProductBatch(e));
		}
		
		if (parameters.realStocks) {
			parameters.realStocks.forEach(e => this.addRealStock(e));
		}
		
		if (parameters.realizedConsumptionFlows) {
			parameters.realizedConsumptionFlows.forEach(e => this.addRealizedConsumptionFlow(e));
		}
		
		if (parameters.realizedProductionFlows) {
			parameters.realizedProductionFlows.forEach(e => this.addRealizedProductionFlow(e));
		}
		
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public async getLocalizedProducts(options?: IGetterOptions): Promise<ILocalizedProduct[]> {
		const results = new Array<ILocalizedProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:represents");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ILocalizedProduct>semanticObject);
		}
		return results;
	}

	public setRealStocks(realStock: IRealStock[]): void {
		this.getSemanticPropertyAll("dfc-b:constituedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		realStock.forEach((physicalProduct) => {
			this.addSemanticPropertyReference("dfc-b:constituedBy", physicalProduct, true);
			this.connector.store(physicalProduct);
		});
	}

	public async getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]> {
		const results = new Array<IProductBatch>();
		const properties = this.getSemanticPropertyAll("dfc-b:tracedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IProductBatch>semanticObject);
		}
		return results;
	}

	public async getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]> {
		const results = new Array<IRealizedProductionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:producedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRealizedProductionFlow>semanticObject);
		}
		return results;
	}

	public getQuantity(): IQuantity | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
		return <IQuantity> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void {
		if (realizedProductionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:producedBy", realizedProductionFlow);
		}
		else {
			this.connector.store(realizedProductionFlow);
			this.addSemanticPropertyReference("dfc-b:producedBy", realizedProductionFlow);
		}
	}

	public addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void {
		if (realizedConsumptionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:consumedBy", realizedConsumptionFlow);
		}
		else {
			this.connector.store(realizedConsumptionFlow);
			this.addSemanticPropertyReference("dfc-b:consumedBy", realizedConsumptionFlow);
		}
	}

	public addRealStock(realStock: IRealStock): void {
		if (realStock.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:constituedBy", realStock);
		}
		else {
			this.connector.store(realStock);
			this.addSemanticPropertyReference("dfc-b:constituedBy", realStock);
		}
	}

	public removeRealStock(realStock: IRealStock): void {
		throw new Error("Not yet implemented.");
	}

	public addImage(image: string): void {
		this.addSemanticPropertyLiteral("dfc-b:image", image);
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public removeProductBatch(productBatch: IProductBatch): void {
		throw new Error("Not yet implemented.");
	}

	public addProductBatch(productBatch: IProductBatch): void {
		if (productBatch.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:tracedBy", productBatch);
		}
		else {
			this.connector.store(productBatch);
			this.addSemanticPropertyReference("dfc-b:tracedBy", productBatch);
		}
	}

	public setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:consumedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		realizedConsumptionFlows.forEach((physicalProduct) => {
			this.addSemanticPropertyReference("dfc-b:consumedBy", physicalProduct, true);
			this.connector.store(physicalProduct);
		});
	}

	public addLocalizedProduct(localizedProduct: ILocalizedProduct): void {
		if (localizedProduct.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:represents", localizedProduct);
		}
		else {
			this.connector.store(localizedProduct);
			this.addSemanticPropertyReference("dfc-b:represents", localizedProduct);
		}
	}

	public removeImage(image: string): void {
		throw new Error("Not yet implemented.");
	}

	public setImages(image: string[]): void {
		this.setSemanticPropertyLiteralAll("dfc-b:image", image);
	}

	public setProductBatches(productBatches: IProductBatch[]): void {
		this.getSemanticPropertyAll("dfc-b:tracedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		productBatches.forEach((physicalProduct) => {
			this.addSemanticPropertyReference("dfc-b:tracedBy", physicalProduct, true);
			this.connector.store(physicalProduct);
		});
	}

	public async getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]> {
		const results = new Array<IRealizedConsumptionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:consumedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRealizedConsumptionFlow>semanticObject);
		}
		return results;
	}

	public setQuantity(quantity: IQuantity): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
		
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:represents").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		localizedProducts.forEach((physicalProduct) => {
			this.addSemanticPropertyReference("dfc-b:represents", physicalProduct, true);
			this.connector.store(physicalProduct);
		});
	}

	public getImages(): string[] {
		return this.getSemanticPropertyAll("dfc-b:image");
	}

	public setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:producedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		realizedProductionFlows.forEach((physicalProduct) => {
			this.addSemanticPropertyReference("dfc-b:producedBy", physicalProduct, true);
			this.connector.store(physicalProduct);
		});
	}

	public async getRealStocks(options?: IGetterOptions): Promise<IRealStock[]> {
		const results = new Array<IRealStock>();
		const properties = this.getSemanticPropertyAll("dfc-b:constituedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRealStock>semanticObject);
		}
		return results;
	}

	public removeLocalizedProduct(localizedProduct: ILocalizedProduct): void {
		throw new Error("Not yet implemented.");
	}

	public removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void {
		throw new Error("Not yet implemented.");
	}
}

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
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js"
import IQuantity from "./IQuantity.js"
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js"
import ISuppliedProduct from "./ISuppliedProduct.js"
import ILocalizedProduct from "./ILocalizedProduct.js"
import IPhysicalProduct from "./IPhysicalProduct.js"
import ITheoreticalStock from "./ITheoreticalStock.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const LOCALIZED_PRODUCT_SEM_TYPE: string = "dfc-b:LocalizedProduct";

export default class LocalizedProduct extends SemanticObject implements ILocalizedProduct {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		quantity?: IQuantity,
		images?: string[],
		cost?: number,
		suppliedProducts?: ISuppliedProduct[],
		physicalProducts?: IPhysicalProduct[],
		theoreticalStocks?: ITheoreticalStock[],
		plannedLocalConsumptionFlows?: IPlannedLocalConsumptionFlow[],
		plannedLocalProductionFlows?: IPlannedLocalProductionFlow[],
		doNotStore?: boolean,
	}) {
		
		const type: string = LOCALIZED_PRODUCT_SEM_TYPE;
		
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
		
		if (parameters.cost || parameters.cost === 0) {
			this.setCost(parameters.cost);
		}
		
		if (parameters.suppliedProducts) {
			parameters.suppliedProducts.forEach(e => this.addSuppliedProduct(e));
		}
		
		if (parameters.physicalProducts) {
			parameters.physicalProducts.forEach(e => this.addPhysicalProduct(e));
		}
		
		if (parameters.theoreticalStocks) {
			parameters.theoreticalStocks.forEach(e => this.addTheoreticalStock(e));
		}
		
		if (parameters.plannedLocalConsumptionFlows) {
			parameters.plannedLocalConsumptionFlows.forEach(e => this.addPlannedLocalConsumptionFlow(e));
		}
		
		if (parameters.plannedLocalProductionFlows) {
			parameters.plannedLocalProductionFlows.forEach(e => this.addPlannedLocalProductionFlow(e));
		}
		
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public addPlannedLocalConsumptionFlow(consumptionFlow: IPlannedLocalConsumptionFlow): void {
		if (consumptionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:consumedBy", consumptionFlow);
		}
		else {
			this.connector.store(consumptionFlow);
			this.addSemanticPropertyReference("dfc-b:consumedBy", consumptionFlow);
		}
	}

	public removeTheoreticalStock(theoreticalStock: ITheoreticalStock): void {
		throw new Error("Not yet implemented.");
	}

	public getCost(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:cost"));
	}

	public getQuantity(): IQuantity | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
		return <IQuantity> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}

	public removePlannedLocalProductionFlow(productionFlow: IPlannedLocalProductionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public async getPhysicalProducts(options?: IGetterOptions): Promise<IPhysicalProduct[]> {
		const results = new Array<IPhysicalProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:representedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPhysicalProduct>semanticObject);
		}
		return results;
	}

	public removePlannedLocalConsumptionFlow(consumptionFlow: IPlannedLocalConsumptionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public setImages(image: string[]): void {
		this.setSemanticPropertyLiteralAll("dfc-b:image", image);
	}

	public setSuppliedProducts(suppliedProducts: ISuppliedProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:hasReference").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		suppliedProducts.forEach((localizedProduct) => {
			this.addSemanticPropertyReference("dfc-b:hasReference", localizedProduct, true);
			this.connector.store(localizedProduct);
		});
	}

	public addTheoreticalStock(theoreticalStock: ITheoreticalStock): void {
		if (theoreticalStock.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:constituedBy", theoreticalStock);
		}
		else {
			this.connector.store(theoreticalStock);
			this.addSemanticPropertyReference("dfc-b:constituedBy", theoreticalStock);
		}
	}

	public setPlannedLocalConsumptionFlows(consumptionFlows: IPlannedLocalConsumptionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:consumedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		consumptionFlows.forEach((localizedProduct) => {
			this.addSemanticPropertyReference("dfc-b:consumedBy", localizedProduct, true);
			this.connector.store(localizedProduct);
		});
	}

	public addPlannedLocalProductionFlow(productionFlow: IPlannedLocalProductionFlow): void {
		if (productionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:producedBy", productionFlow);
		}
		else {
			this.connector.store(productionFlow);
			this.addSemanticPropertyReference("dfc-b:producedBy", productionFlow);
		}
	}

	public setPlannedLocalProductionFlows(productionFlows: IPlannedLocalProductionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:producedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		productionFlows.forEach((localizedProduct) => {
			this.addSemanticPropertyReference("dfc-b:producedBy", localizedProduct, true);
			this.connector.store(localizedProduct);
		});
	}

	public removePhysicalProduct(physicalProduct: IPhysicalProduct): void {
		throw new Error("Not yet implemented.");
	}

	public removeImage(image: string): void {
		throw new Error("Not yet implemented.");
	}

	public addSuppliedProduct(suppliedProduct: ISuppliedProduct): void {
		if (suppliedProduct.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasReference", suppliedProduct);
		}
		else {
			this.connector.store(suppliedProduct);
			this.addSemanticPropertyReference("dfc-b:hasReference", suppliedProduct);
		}
	}

	public removeSuppliedProduct(suppliedProduct: ISuppliedProduct): void {
		throw new Error("Not yet implemented.");
	}

	public async getTheoreticalStocks(options?: IGetterOptions): Promise<ITheoreticalStock[]> {
		const results = new Array<ITheoreticalStock>();
		const properties = this.getSemanticPropertyAll("dfc-b:constituedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ITheoreticalStock>semanticObject);
		}
		return results;
	}

	public setQuantity(quantity: IQuantity): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
		
	}

	public getImages(): string[] {
		return this.getSemanticPropertyAll("dfc-b:image");
	}

	public async getPlannedLocalProductionFlows(options?: IGetterOptions): Promise<IPlannedLocalProductionFlow[]> {
		const results = new Array<IPlannedLocalProductionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:producedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlannedLocalProductionFlow>semanticObject);
		}
		return results;
	}

	public addImage(image: string): void {
		this.addSemanticPropertyLiteral("dfc-b:image", image);
	}

	public addPhysicalProduct(physicalProduct: IPhysicalProduct): void {
		if (physicalProduct.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:representedBy", physicalProduct);
		}
		else {
			this.connector.store(physicalProduct);
			this.addSemanticPropertyReference("dfc-b:representedBy", physicalProduct);
		}
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public setTheoreticalStocks(theoreticalStocks: ITheoreticalStock[]): void {
		this.getSemanticPropertyAll("dfc-b:constituedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		theoreticalStocks.forEach((localizedProduct) => {
			this.addSemanticPropertyReference("dfc-b:constituedBy", localizedProduct, true);
			this.connector.store(localizedProduct);
		});
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setCost(cost: number): void {
		this.setSemanticPropertyLiteral("dfc-b:cost", cost);
	}

	public setPhysicalProducts(physicalProducts: IPhysicalProduct[]): void {
		this.getSemanticPropertyAll("dfc-b:representedBy").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		physicalProducts.forEach((localizedProduct) => {
			this.addSemanticPropertyReference("dfc-b:representedBy", localizedProduct, true);
			this.connector.store(localizedProduct);
		});
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public async getSuppliedProducts(options?: IGetterOptions): Promise<ISuppliedProduct[]> {
		const results = new Array<ISuppliedProduct>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasReference");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISuppliedProduct>semanticObject);
		}
		return results;
	}

	public async getPlannedLocalConsumptionFlows(options?: IGetterOptions): Promise<IPlannedLocalConsumptionFlow[]> {
		const results = new Array<IPlannedLocalConsumptionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:consumedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlannedLocalConsumptionFlow>semanticObject);
		}
		return results;
	}
}

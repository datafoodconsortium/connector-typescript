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
import IPlannedTransformation from "./IPlannedTransformation.js"
import ISKOSConcept from "./ISKOSConcept.js"
import IPlannedProductionFlow from "./IPlannedProductionFlow.js"
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PLANNED_TRANSFORMATION_SEM_TYPE: string = "dfc-b:AsPlannedTransformation";

export default class PlannedTransformation extends SemanticObject implements IPlannedTransformation {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		transformationType?: ISKOSConcept,
		consumptionFlows?: IPlannedConsumptionFlow[],
		productionFlows?: IPlannedProductionFlow[],
		doNotStore?: boolean,
	}) {
		
		const type: string = PLANNED_TRANSFORMATION_SEM_TYPE;
		
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
		if (parameters.transformationType) {
			this.setTransformationType(parameters.transformationType);
		}
		
		if (parameters.consumptionFlows) {
			parameters.consumptionFlows.forEach(e => this.addPlannedConsumptionFlow(e));
		}
		
		if (parameters.productionFlows) {
			parameters.productionFlows.forEach(e => this.addPlannedProductionFlow(e));
		}
		
	}

	public setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void {
		
	}

	public removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void {
		if (plannedProductionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasOutcome", plannedProductionFlow);
		}
		else {
			this.connector.store(plannedProductionFlow);
			this.addSemanticPropertyReference("dfc-b:hasOutcome", plannedProductionFlow);
		}
	}

	public async getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined> {
		let result: ISKOSConcept | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasTransformationType");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ISKOSConcept> semanticObject;
		}
		return result;
	}

	public async getPlannedConsumptionFlows(options?: IGetterOptions): Promise<IPlannedConsumptionFlow[]> {
		const results = new Array<IPlannedConsumptionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasIncome");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlannedConsumptionFlow>semanticObject);
		}
		return results;
	}

	public setTransformationType(transformationType: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasTransformationType", transformationType);
		
		this.connector.store(transformationType);
	}

	public setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void {
		
	}

	public async getPlannedProductionFlows(options?: IGetterOptions): Promise<IPlannedProductionFlow[]> {
		const results = new Array<IPlannedProductionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasOutcome");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlannedProductionFlow>semanticObject);
		}
		return results;
	}

	public addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void {
		if (plannedConsumptionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasIncome", plannedConsumptionFlow);
		}
		else {
			this.connector.store(plannedConsumptionFlow);
			this.addSemanticPropertyReference("dfc-b:hasIncome", plannedConsumptionFlow);
		}
	}

	public removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void {
		throw new Error("Not yet implemented.");
	}
}

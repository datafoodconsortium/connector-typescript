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
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js"
import ISKOSConcept from "./ISKOSConcept.js"
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PLANNED_LOCAL_TRANSFORMATION_SEM_TYPE: string = "dfc-b:AsPlannedLocalTransformation";

export default class PlannedLocalTransformation extends SemanticObject implements IPlannedLocalTransformation {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		transformationType?: ISKOSConcept,
		cost?: number,
		startDate?: string,
		endDate?: string,
		consumptionFlows?: IPlannedLocalConsumptionFlow[],
		productionFlows?: IPlannedLocalProductionFlow[],
		doNotStore?: boolean,
	}) {
		
		const type: string = PLANNED_LOCAL_TRANSFORMATION_SEM_TYPE;
		
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
		
		if (parameters.cost || parameters.cost === 0) {
			this.setCost(parameters.cost);
		}
		
		if (parameters.startDate) {
			this.setBeginDate(parameters.startDate);
		}
		
		if (parameters.endDate) {
			this.setEndDate(parameters.endDate);
		}
		
		if (parameters.consumptionFlows) {
			parameters.consumptionFlows.forEach(e => this.addPlannedLocalConsumptionFlow(e));
		}
		
		if (parameters.productionFlows) {
			parameters.productionFlows.forEach(e => this.addPlannedLocalProductionFlow(e));
		}
		
	}

	public getCost(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:cost"));
	}

	public setCost(cost: number): void {
		this.setSemanticPropertyLiteral("dfc-b:cost", cost);
	}

	public getEndDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:endDate");
	}

	public addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void {
		if (plannedLocalProductionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasOutput", plannedLocalProductionFlow);
		}
		else {
			this.connector.store(plannedLocalProductionFlow);
			this.addSemanticPropertyReference("dfc-b:hasOutput", plannedLocalProductionFlow);
		}
	}

	public setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows: IPlannedLocalConsumptionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:hasInput").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		plannedLocalConsumptionFlows.forEach((plannedLocalTransformation) => {
			this.addSemanticPropertyReference("dfc-b:hasInput", plannedLocalTransformation, true);
			this.connector.store(plannedLocalTransformation);
		});
	}

	public addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void {
		if (plannedLocalConsumptionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasInput", plannedLocalConsumptionFlow);
		}
		else {
			this.connector.store(plannedLocalConsumptionFlow);
			this.addSemanticPropertyReference("dfc-b:hasInput", plannedLocalConsumptionFlow);
		}
	}

	public removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void {
		throw new Error("Not yet implemented.");
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

	public removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public async getPlannedLocalConsumptionFlows(options?: IGetterOptions): Promise<IPlannedLocalConsumptionFlow[]> {
		const results = new Array<IPlannedLocalConsumptionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasInput");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlannedLocalConsumptionFlow>semanticObject);
		}
		return results;
	}

	public setTransformationType(transformationType: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasTransformationType", transformationType);
		
		this.connector.store(transformationType);
	}

	public setBeginDate(beginDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:startDate", beginDate);
	}

	public getBeginDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:startDate");
	}

	public setEndDate(endDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:endDate", endDate);
	}

	public async getPlannedLocalProductionFlows(options?: IGetterOptions): Promise<IPlannedLocalProductionFlow[]> {
		const results = new Array<IPlannedLocalProductionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasOutput");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPlannedLocalProductionFlow>semanticObject);
		}
		return results;
	}

	public setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:hasOutput").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		plannedLocalProductionFlows.forEach((plannedLocalTransformation) => {
			this.addSemanticPropertyReference("dfc-b:hasOutput", plannedLocalTransformation, true);
			this.connector.store(plannedLocalTransformation);
		});
	}
}

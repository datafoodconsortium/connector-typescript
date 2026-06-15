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
import ISKOSConcept from "./ISKOSConcept.js"
import IRealizedProductionFlow from "./IRealizedProductionFlow.js"
import IRealizedTransformation from "./IRealizedTransformation.js"
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const REALIZED_TRANSFORMATION_SEM_TYPE: string = "dfc-b:AsRealizedTransformation";

export default class RealizedTransformation extends SemanticObject implements IRealizedTransformation {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		transformationType?: ISKOSConcept,
		startDate?: string,
		endDate?: string,
		consumptionFlows?: IRealizedConsumptionFlow[],
		productionFlows?: IRealizedProductionFlow[],
		doNotStore?: boolean,
	}) {
		
		const type: string = REALIZED_TRANSFORMATION_SEM_TYPE;
		
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
		
		if (parameters.startDate) {
			this.setBeginDate(parameters.startDate);
		}
		
		if (parameters.endDate) {
			this.setEndDate(parameters.endDate);
		}
		
		if (parameters.consumptionFlows) {
			parameters.consumptionFlows.forEach(e => this.addRealizedConsumptionFlow(e));
		}
		
		if (parameters.productionFlows) {
			parameters.productionFlows.forEach(e => this.addRealizedProductionFlow(e));
		}
		
	}

	public async getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]> {
		const results = new Array<IRealizedConsumptionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasInput");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRealizedConsumptionFlow>semanticObject);
		}
		return results;
	}

	public setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:hasOutput").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		realizedProductionFlows.forEach((realizedTransformation) => {
			this.addSemanticPropertyReference("dfc-b:hasOutput", realizedTransformation, true);
			this.connector.store(realizedTransformation);
		});
	}

	public getBeginDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:startDate");
	}

	public async getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]> {
		const results = new Array<IRealizedProductionFlow>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasOutput");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRealizedProductionFlow>semanticObject);
		}
		return results;
	}

	public removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public setEndDate(endDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:endDate", endDate);
	}

	public removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void {
		throw new Error("Not yet implemented.");
	}

	public addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void {
		if (realizedProductionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasOutput", realizedProductionFlow);
		}
		else {
			this.connector.store(realizedProductionFlow);
			this.addSemanticPropertyReference("dfc-b:hasOutput", realizedProductionFlow);
		}
	}

	public getEndDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:endDate");
	}

	public addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void {
		if (realizedConsumptionFlow.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasInput", realizedConsumptionFlow);
		}
		else {
			this.connector.store(realizedConsumptionFlow);
			this.addSemanticPropertyReference("dfc-b:hasInput", realizedConsumptionFlow);
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

	public setBeginDate(beginDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:startDate", beginDate);
	}

	public setTransformationType(transformationType: ISKOSConcept): void {
		this.setSemanticPropertyReference("dfc-b:hasTransformationType", transformationType);
		
		this.connector.store(transformationType);
	}

	public setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void {
		this.getSemanticPropertyAll("dfc-b:hasInput").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		realizedConsumptionFlows.forEach((realizedTransformation) => {
			this.addSemanticPropertyReference("dfc-b:hasInput", realizedTransformation, true);
			this.connector.store(realizedTransformation);
		});
	}
}

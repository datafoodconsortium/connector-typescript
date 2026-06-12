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
import IGeoJsonFeature from "./IGeoJsonFeature.js"
import IRoute from "./IRoute.js"
import IStep from "./IStep.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const ROUTE_SEM_TYPE: string = "dfc-b:Route";

export default class Route extends SemanticObject implements IRoute {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		steps?: IStep[],
		features?: IGeoJsonFeature[],
		doNotStore?: boolean,
	}) {
		
		const type: string = ROUTE_SEM_TYPE;
		
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
		
		if (parameters.steps) {
			parameters.steps.forEach(e => this.addStep(e));
		}
		
		if (parameters.features) {
			parameters.features.forEach(e => this.addFeature(e));
		}
		
	}

	public addStep(step: IStep): void {
		if (step.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasStep", step);
		}
		else {
			this.connector.store(step);
			this.addSemanticPropertyReference("dfc-b:hasStep", step);
		}
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public setFeatures(features: IGeoJsonFeature[]): void {
		this.getSemanticPropertyAll("dfc-b:hasGeoJsonFeature").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		features.forEach((route) => {
			this.addSemanticPropertyReference("dfc-b:hasGeoJsonFeature", route, true);
			this.connector.store(route);
		});
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public async getSteps(options?: IGetterOptions): Promise<IStep[]> {
		const results = new Array<IStep>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasStep");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IStep>semanticObject);
		}
		return results;
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public setSteps(steps: IStep[]): void {
		this.getSemanticPropertyAll("dfc-b:hasStep").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		steps.forEach((route) => {
			this.addSemanticPropertyReference("dfc-b:hasStep", route, true);
			this.connector.store(route);
		});
	}

	public removeStep(step: IStep): void {
		throw new Error("Not yet implemented.");
	}

	public addFeature(feature: IGeoJsonFeature): void {
		if (feature.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasGeoJsonFeature", feature);
		}
		else {
			this.connector.store(feature);
			this.addSemanticPropertyReference("dfc-b:hasGeoJsonFeature", feature);
		}
	}

	public removeFeature(feature: IGeoJsonFeature): void {
		throw new Error("Not yet implemented.");
	}

	public async getFeatures(options?: IGetterOptions): Promise<IGeoJsonFeature[]> {
		const results = new Array<IGeoJsonFeature>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasGeoJsonFeature");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IGeoJsonFeature>semanticObject);
		}
		return results;
	}
}

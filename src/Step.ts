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
import IStep from "./IStep.js"
import IShipment from "./IShipment.js"
import IRoute from "./IRoute.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

export default abstract class Step extends SemanticObject implements IStep {

	protected connector: IConnector;

	protected constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		semanticType?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		routes?: IRoute[],
		deliveredShipments?: IShipment[],
		pickedUpShipments?: IShipment[],
		duration?: string,
		arrivalDate?: string,
		doNotStore?: boolean,
	}) {
		
		if (parameters.other) {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				other: parameters.other,
			});
		} else {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				semanticType: parameters.semanticType!,
				
		});
		}
		this.connector = parameters.connector;
		
		
		if (parameters.name) {
			this.setName(parameters.name);
		}
		
		if (parameters.description) {
			this.setDescription(parameters.description);
		}
		
		if (parameters.routes) {
			parameters.routes.forEach(e => this.addRoute(e));
		}
		
		if (parameters.deliveredShipments) {
			parameters.deliveredShipments.forEach(e => this.addDeliveredShipment(e));
		}
		
		if (parameters.pickedUpShipments) {
			parameters.pickedUpShipments.forEach(e => this.addPickedUpShipment(e));
		}
		
		if (parameters.duration) {
			this.setDuration(parameters.duration);
		}
		
		if (parameters.arrivalDate) {
			this.setArrivalDate(parameters.arrivalDate);
		}
		
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setDuration(duration: string): void {
		this.setSemanticPropertyLiteral("dfc-b:duration", duration);
	}

	public addRoute(route: IRoute): void {
		if (route.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:isStepOf", route);
		}
		else {
			this.connector.store(route);
			this.addSemanticPropertyReference("dfc-b:isStepOf", route);
		}
	}

	public setDeliveredShipments(deliveredShipments: IShipment[]): void {
		this.getSemanticPropertyAll("dfc-b:delivery").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		deliveredShipments.forEach((step) => {
			this.addSemanticPropertyReference("dfc-b:delivery", step, true);
			this.connector.store(step);
		});
	}

	public async getPickedUpShipments(options?: IGetterOptions): Promise<IShipment[]> {
		const results = new Array<IShipment>();
		const properties = this.getSemanticPropertyAll("dfc-b:pickUp");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IShipment>semanticObject);
		}
		return results;
	}

	public setPickedUpShipments(pickedUpShipments: IShipment[]): void {
		this.getSemanticPropertyAll("dfc-b:pickUp").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		pickedUpShipments.forEach((step) => {
			this.addSemanticPropertyReference("dfc-b:pickUp", step, true);
			this.connector.store(step);
		});
	}

	public removeRoute(route: IRoute): void {
		throw new Error("Not yet implemented.");
	}

	public addDeliveredShipment(deliveredShipment: IShipment): void {
		if (deliveredShipment.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:delivery", deliveredShipment);
		}
		else {
			this.connector.store(deliveredShipment);
			this.addSemanticPropertyReference("dfc-b:delivery", deliveredShipment);
		}
	}

	public addPickedUpShipment(pickedUpShipment: IShipment): void {
		if (pickedUpShipment.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:pickUp", pickedUpShipment);
		}
		else {
			this.connector.store(pickedUpShipment);
			this.addSemanticPropertyReference("dfc-b:pickUp", pickedUpShipment);
		}
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public removePickedUpShipment(pickedUpShipment: IShipment): void {
		throw new Error("Not yet implemented.");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setArrivalDate(arrivalDate: string): void {
		this.setSemanticPropertyLiteral("dfc-b:arrivalDate", arrivalDate);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public async getRoutes(options?: IGetterOptions): Promise<IRoute[]> {
		const results = new Array<IRoute>();
		const properties = this.getSemanticPropertyAll("dfc-b:isStepOf");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRoute>semanticObject);
		}
		return results;
	}

	public getDuration(): string | undefined {
		return this.getSemanticProperty("dfc-b:duration");
	}

	public async getDeliveredShipments(options?: IGetterOptions): Promise<IShipment[]> {
		const results = new Array<IShipment>();
		const properties = this.getSemanticPropertyAll("dfc-b:delivery");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IShipment>semanticObject);
		}
		return results;
	}

	public removeDeliveredShipment(deliveredShipment: IShipment): void {
		throw new Error("Not yet implemented.");
	}

	public getArrivalDate(): string | undefined {
		return this.getSemanticProperty("dfc-b:arrivalDate");
	}

	public setRoutes(routes: IRoute[]): void {
		this.getSemanticPropertyAll("dfc-b:isStepOf").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		routes.forEach((step) => {
			this.addSemanticPropertyReference("dfc-b:isStepOf", step, true);
			this.connector.store(step);
		});
	}
}

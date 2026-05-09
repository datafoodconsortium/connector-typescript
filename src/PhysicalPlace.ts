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
import IPerson from "./IPerson.js"
import IAddress from "./IAddress.js"
import IOpeningHoursSpecification from "./IOpeningHoursSpecification.js"
import IRealStock from "./IRealStock.js"
import ITheoreticalStock from "./ITheoreticalStock.js"
import IPhysicalPlace from "./IPhysicalPlace.js"
import IPhoneNumber from "./IPhoneNumber.js"
import ISaleSession from "./ISaleSession.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PHYSICAL_PLACE_SEM_TYPE: string = "dfc-b:PhysicalPlace";

export default class PhysicalPlace extends SemanticObject implements IPhysicalPlace {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		hostedSaleSessions?: ISaleSession[],
		phoneNumbers?: IPhoneNumber[],
		openingHours?: IOpeningHoursSpecification[],
		address?: IAddress,
		mainContacts?: IPerson[],
		theoreticalStocks?: ITheoreticalStock[],
		realStocks?: IRealStock[],
		doNotStore?: boolean,
	}) {
		
		const type: string = PHYSICAL_PLACE_SEM_TYPE;
		
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
		
		if (parameters.hostedSaleSessions) {
			parameters.hostedSaleSessions.forEach(e => this.addHostedSaleSession(e));
		}
		
		if (parameters.phoneNumbers) {
			parameters.phoneNumbers.forEach(e => this.addPhoneNumber(e));
		}
		
		if (parameters.openingHours) {
			parameters.openingHours.forEach(e => this.addOpeningHour(e));
		}
		
		if (parameters.address) {
			this.setAddress(parameters.address);
		}
		
		if (parameters.mainContacts) {
			parameters.mainContacts.forEach(e => this.addMainContact(e));
		}
		
		if (parameters.theoreticalStocks) {
			parameters.theoreticalStocks.forEach(e => this.addTheoreticalStock(e));
		}
		
		if (parameters.realStocks) {
			parameters.realStocks.forEach(e => this.addRealStock(e));
		}
		
	}

	public removeHostedSaleSession(): ISaleSession | undefined {
		throw new Error("Not yet implemented.");
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public removePhoneNumber(phoneNumber: IPhoneNumber): void {
		throw new Error("Not yet implemented.");
	}

	public removeTheoreticalStock(theoreticalStock: ITheoreticalStock): void {
		throw new Error("Not yet implemented.");
	}

	public removeOpeningHour(openingHour: IOpeningHoursSpecification): void {
		throw new Error("Not yet implemented.");
	}

	public setTheoreticalStocks(theoreticalStocks: ITheoreticalStock[]): void {
		this.getSemanticPropertyAll("dfc-b:localizes").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		theoreticalStocks.forEach((physicalPlace) => {
			this.addSemanticPropertyReference("dfc-b:localizes", physicalPlace, true);
			this.connector.store(physicalPlace);
		});
	}

	public async getRealStocks(options?: IGetterOptions): Promise<IRealStock[]> {
		const results = new Array<IRealStock>();
		const properties = this.getSemanticPropertyAll("dfc-b:stores");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IRealStock>semanticObject);
		}
		return results;
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public async getOpeningHours(options?: IGetterOptions): Promise<IOpeningHoursSpecification[]> {
		const results = new Array<IOpeningHoursSpecification>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasOpeningHours");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IOpeningHoursSpecification>semanticObject);
		}
		return results;
	}

	public async getTheoreticalStocks(options?: IGetterOptions): Promise<ITheoreticalStock[]> {
		const results = new Array<ITheoreticalStock>();
		const properties = this.getSemanticPropertyAll("dfc-b:localizes");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ITheoreticalStock>semanticObject);
		}
		return results;
	}

	public async getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]> {
		const results = new Array<IPhoneNumber>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasPhoneNumber");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPhoneNumber>semanticObject);
		}
		return results;
	}

	public setPhoneNumbers(phoneNumbers: IPhoneNumber[]): void {
		this.getSemanticPropertyAll("dfc-b:hasPhoneNumber").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		phoneNumbers.forEach((physicalPlace) => {
			this.addSemanticPropertyReference("dfc-b:hasPhoneNumber", physicalPlace, true);
			this.connector.store(physicalPlace);
		});
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setHostedSaleSessions(saleSessions: ISaleSession[]): void {
		this.getSemanticPropertyAll("dfc-b:hosts").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		saleSessions.forEach((physicalPlace) => {
			this.addSemanticPropertyReference("dfc-b:hosts", physicalPlace, true);
			this.connector.store(physicalPlace);
		});
	}

	public addOpeningHour(openingHour: IOpeningHoursSpecification): void {
		if (openingHour.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasOpeningHours", openingHour);
		}
		else {
			this.connector.store(openingHour);
			this.addSemanticPropertyReference("dfc-b:hasOpeningHours", openingHour);
		}
	}

	public addMainContact(mainContact: IPerson): void {
		if (mainContact.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasMainContact", mainContact);
		}
		else {
			this.connector.store(mainContact);
			this.addSemanticPropertyReference("dfc-b:hasMainContact", mainContact);
		}
	}

	public addPhoneNumber(phoneNumber: IPhoneNumber): void {
		if (phoneNumber.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasPhoneNumber", phoneNumber);
		}
		else {
			this.connector.store(phoneNumber);
			this.addSemanticPropertyReference("dfc-b:hasPhoneNumber", phoneNumber);
		}
	}

	public removeMainContact(mainContact: IPerson): void {
		throw new Error("Not yet implemented.");
	}

	public removeRealStock(realStock: IRealStock): void {
		throw new Error("Not yet implemented.");
	}

	public async getAddress(options?: IGetterOptions): Promise<IAddress | undefined> {
		let result: IAddress | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:hasAddress");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IAddress> semanticObject;
		}
		return result;
	}

	public async getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]> {
		const results = new Array<ISaleSession>();
		const properties = this.getSemanticPropertyAll("dfc-b:hosts");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISaleSession>semanticObject);
		}
		return results;
	}

	public addRealStock(realStock: IRealStock): void {
		if (realStock.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:stores", realStock);
		}
		else {
			this.connector.store(realStock);
			this.addSemanticPropertyReference("dfc-b:stores", realStock);
		}
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public addTheoreticalStock(theoreticalStock: ITheoreticalStock): void {
		if (theoreticalStock.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:localizes", theoreticalStock);
		}
		else {
			this.connector.store(theoreticalStock);
			this.addSemanticPropertyReference("dfc-b:localizes", theoreticalStock);
		}
	}

	public setAddress(address: IAddress): void {
		this.setSemanticPropertyReference("dfc-b:hasAddress", address);
		
		this.connector.store(address);
	}

	public addHostedSaleSession(saleSession: ISaleSession): void {
		if (saleSession.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hosts", saleSession);
		}
		else {
			this.connector.store(saleSession);
			this.addSemanticPropertyReference("dfc-b:hosts", saleSession);
		}
	}

	public setMainContacts(mainContacts: IPerson[]): void {
		this.getSemanticPropertyAll("dfc-b:hasMainContact").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		mainContacts.forEach((physicalPlace) => {
			this.addSemanticPropertyReference("dfc-b:hasMainContact", physicalPlace, true);
			this.connector.store(physicalPlace);
		});
	}

	public setOpeningHours(openingHours: IOpeningHoursSpecification[]): void {
		this.getSemanticPropertyAll("dfc-b:hasOpeningHours").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		openingHours.forEach((physicalPlace) => {
			this.addSemanticPropertyReference("dfc-b:hasOpeningHours", physicalPlace, true);
			this.connector.store(physicalPlace);
		});
	}

	public async getMainContacts(options?: IGetterOptions): Promise<IPerson[]> {
		const results = new Array<IPerson>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasMainContact");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IPerson>semanticObject);
		}
		return results;
	}

	public setRealStocks(realStocks: IRealStock[]): void {
		this.getSemanticPropertyAll("dfc-b:stores").forEach((prop) => {
			this.connector.removeFromStore(prop);
		});
		realStocks.forEach((physicalPlace) => {
			this.addSemanticPropertyReference("dfc-b:stores", physicalPlace, true);
			this.connector.store(physicalPlace);
		});
	}
}

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
import IAddress from "./IAddress.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const ADDRESS_SEM_TYPE: string = "dfc-b:Address";

export default class Address extends SemanticObject implements IAddress {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		street?: string,
		postalCode?: string,
		city?: string,
		country?: string,
		latitude?: number,
		longitude?: number,
		region?: string,
		doNotStore?: boolean,
	}) {
		
		const type: string = ADDRESS_SEM_TYPE;
		
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
		if (parameters.street) {
			this.setStreet(parameters.street);
		}
		
		if (parameters.postalCode) {
			this.setPostalCode(parameters.postalCode);
		}
		
		if (parameters.city) {
			this.setCity(parameters.city);
		}
		
		if (parameters.country) {
			this.setCountry(parameters.country);
		}
		
		if (parameters.latitude || parameters.latitude === 0) {
			this.setLatitude(parameters.latitude);
		}
		
		if (parameters.longitude || parameters.longitude === 0) {
			this.setLongitude(parameters.longitude);
		}
		
		if (parameters.region) {
			this.setRegion(parameters.region);
		}
		
	}

	public setPostalCode(postalCode: string): void {
		this.setSemanticPropertyLiteral("dfc-b:hasPostalCode", postalCode);
	}

	public setCountry(country: string): void {
		this.setSemanticPropertyLiteral("dfc-b:hasCountry", country);
	}

	public getLatitude(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:latitude"));
	}

	public getRegion(): string | undefined {
		return this.getSemanticProperty("dfc-b:region");
	}

	public setLatitude(latitude: number): void {
		this.setSemanticPropertyLiteral("dfc-b:latitude", latitude);
	}

	public setRegion(region: string): void {
		this.setSemanticPropertyLiteral("dfc-b:region", region);
	}

	public getPostalCode(): string | undefined {
		return this.getSemanticProperty("dfc-b:hasPostalCode");
	}

	public getCountry(): string | undefined {
		return this.getSemanticProperty("dfc-b:hasCountry");
	}

	public setCity(city: string): void {
		this.setSemanticPropertyLiteral("dfc-b:hasCity", city);
	}

	public setLongitude(longitude: number): void {
		this.setSemanticPropertyLiteral("dfc-b:longitude", longitude);
	}

	public getLongitude(): number | undefined {
		return Number(this.getSemanticProperty("dfc-b:longitude"));
	}

	public setStreet(street: string): void {
		this.setSemanticPropertyLiteral("dfc-b:hasStreet", street);
	}

	public getStreet(): string | undefined {
		return this.getSemanticProperty("dfc-b:hasStreet");
	}

	public getCity(): string | undefined {
		return this.getSemanticProperty("dfc-b:hasCity");
	}
}

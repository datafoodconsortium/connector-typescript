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
import ISocialMedia from "./ISocialMedia.js"
import IPhoneNumber from "./IPhoneNumber.js"
import IAddress from "./IAddress.js"
import IAgent from "./IAgent.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

export default abstract class Agent extends SemanticObject implements IAgent {

	protected connector: IConnector;

	protected constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		semanticType?: string,
		other?: Semanticable,
		localizations?: IAddress[],
		phoneNumbers?: IPhoneNumber[],
		emails?: string[],
		websites?: string[],
		socialMedias?: ISocialMedia[],
		logo?: string,
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
		
		
		if (parameters.localizations) {
			parameters.localizations.forEach(e => this.addLocalization(e));
		}
		
		if (parameters.phoneNumbers) {
			parameters.phoneNumbers.forEach(e => this.addPhoneNumber(e));
		}
		
		if (parameters.emails) {
			parameters.emails.forEach(e => this.addEmailAddress(e));
		}
		
		if (parameters.websites) {
			parameters.websites.forEach(e => this.addWebsite(e));
		}
		
		if (parameters.socialMedias) {
			parameters.socialMedias.forEach(e => this.addSocialMedia(e));
		}
		
		if (parameters.logo) {
			this.setLogo(parameters.logo);
		}
		
	}

	public removePhoneNumber(phoneNumber: IPhoneNumber): void {
		throw new Error("Not yet implemented.");
	}

	public getWebsites(): string[] {
		return this.getSemanticPropertyAll("dfc-b:websitePage");
	}

	public addWebsite(website: string): void {
		this.addSemanticPropertyLiteral("dfc-b:websitePage", website);
	}

	public removeWebsite(website: string): void {
		throw new Error("Not yet implemented.");
	}

	public getLogo(): string | undefined {
		return this.getSemanticProperty("dfc-b:logo");
	}

	public setLogo(logo: string): void {
		this.setSemanticPropertyLiteral("dfc-b:logo", logo);
	}

	public removeEmailAddress(emailAddress: string): void {
		throw new Error("Not yet implemented.");
	}

	public addLocalization(localization: IAddress): void {
		if (localization.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasAddress", localization);
		}
		else {
			this.connector.store(localization);
			this.addSemanticPropertyReference("dfc-b:hasAddress", localization);
		}
	}

	public removeSocialMedia(socialMedia: ISocialMedia): void {
		throw new Error("Not yet implemented.");
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

	public getEmails(): string[] {
		return this.getSemanticPropertyAll("dfc-b:email");
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

	public addSocialMedia(socialMedia: ISocialMedia): void {
		if (socialMedia.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:hasSocialMedia", socialMedia);
		}
		else {
			this.connector.store(socialMedia);
			this.addSemanticPropertyReference("dfc-b:hasSocialMedia", socialMedia);
		}
	}

	public removeLocalization(localization: IAddress): void {
		throw new Error("Not yet implemented.");
	}

	public async getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]> {
		const results = new Array<ISocialMedia>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasSocialMedia");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ISocialMedia>semanticObject);
		}
		return results;
	}

	public addEmailAddress(emailAddress: string): void {
		this.addSemanticPropertyLiteral("dfc-b:email", emailAddress);
	}

	public async getLocalizations(options?: IGetterOptions): Promise<IAddress[]> {
		const results = new Array<IAddress>();
		const properties = this.getSemanticPropertyAll("dfc-b:hasAddress");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IAddress>semanticObject);
		}
		return results;
	}
}

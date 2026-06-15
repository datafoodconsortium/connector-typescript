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
import IPrice from "./IPrice.js"
import IPaymentMethod from "./IPaymentMethod.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PAYMENT_METHOD_SEM_TYPE: string = "dfc-b:PaymentMethod";

export default class PaymentMethod extends SemanticObject implements IPaymentMethod {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		price?: IPrice,
		provider?: string,
		type?: string,
		doNotStore?: boolean,
	}) {
		
		const type: string = PAYMENT_METHOD_SEM_TYPE;
		
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
		
		if (parameters.price) {
			this.setPrice(parameters.price);
		}
		
		if (parameters.provider) {
			this.setProvider(parameters.provider);
		}
		
		if (parameters.type) {
			this.setType(parameters.type);
		}
		
	}

	public setType(type: string): void {
		this.setSemanticPropertyLiteral("dfc-b:paymentMethodType", type);
	}

	public getName(): string | undefined {
		return this.getSemanticProperty("dfc-b:name");
	}

	public getDescription(): string | undefined {
		return this.getSemanticProperty("dfc-b:description");
	}

	public setDescription(description: string): void {
		this.setSemanticPropertyLiteral("dfc-b:description", description);
	}

	public setName(name: string): void {
		this.setSemanticPropertyLiteral("dfc-b:name", name);
	}

	public getType(): string | undefined {
		return this.getSemanticProperty("dfc-b:paymentMethodType");
	}

	public setProvider(provider: string): void {
		this.setSemanticPropertyLiteral("dfc-b:paymentMethodProvider", provider);
	}

	public setPrice(price: IPrice): void {
		this.setSemanticPropertyAnonymous("dfc-b:hasPrice", price);
		
	}

	public getProvider(): string | undefined {
		return this.getSemanticProperty("dfc-b:paymentMethodProvider");
	}

	public getPrice(): IPrice | undefined {
		const blankNode: any = this.getSemanticPropertyAnonymous("dfc-b:hasPrice");
		return <IPrice> this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
	}
}

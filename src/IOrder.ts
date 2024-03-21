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
import IOrderLine from "./IOrderLine.js"
import ISKOSConcept from "./ISKOSConcept.js"
import ISaleSession from "./ISaleSession.js"
import IAgent from "./IAgent.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IOrder extends Semanticable{

	getNumber(): string | undefined;

	getDate(): string | undefined;

	getSaleSession(): Promise<ISaleSession | undefined>;

	getClient(): Promise<IAgent | undefined>;

	getLines(): Promise<IOrderLine[]>;

	setNumber(number: string): void;

	setDate(date: string): void;

	setSaleSession(saleSession: ISaleSession): void;

	setClient(client: IAgent): void;

	addLine(line: IOrderLine): void;

	getFulfilmentStatus(): Promise<ISKOSConcept | undefined>;

	setFulfilmentStatus(fulfilmentState: ISKOSConcept): void;

	getOrderStatus(): Promise<ISKOSConcept | undefined>;

	setOrderStatus(orderState: ISKOSConcept): void;

	getPaymentStatus(): Promise<ISKOSConcept | undefined>;

	setPaymentStatus(paymentState: ISKOSConcept): void;

}

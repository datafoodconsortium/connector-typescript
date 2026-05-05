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
import Openable from "./Openable.js"
import IAddress from "./IAddress.js"
import ContactableByPhone from "./ContactableByPhone.js"
import PhoneNumberOwner from "./PhoneNumberOwner.js"
import IPerson from "./IPerson.js"
import ITheoreticalStock from "./ITheoreticalStock.js"
import IPlace from "./IPlace.js"
import IRealStock from "./IRealStock.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IPhysicalPlace extends PhoneNumberOwner, ContactableByPhone, IPlace, Openable {

	getAddress(): Promise<IAddress | undefined>;

	setAddress(address: IAddress): void;

	getMainContacts(): Promise<IPerson[]>;

	addMainContact(mainContact: IPerson): void;

	removeMainContact(mainContact: IPerson): void;

	setMainContacts(mainContacts: IPerson[]): void;

	getTheoreticalStocks(): Promise<ITheoreticalStock[]>;

	addTheoreticalStock(theoreticalStock: ITheoreticalStock): void;

	removeTheoreticalStock(theoreticalStock: ITheoreticalStock): void;

	setTheoreticalStocks(theoreticalStocks: ITheoreticalStock[]): void;

	getRealStocks(): Promise<IRealStock[]>;

	addRealStock(realStock: IRealStock): void;

	removeRealStock(realStock: IRealStock): void;

	setRealStocks(realStocks: IRealStock[]): void;

	getFeatures(): Promise<IGeoJsonFeature[]>;

	setFeatures(features: IGeoJsonFeature[]): void;

	addFeature(feature: IGeoJsonFeature): void;

	removeFeature(feature: IGeoJsonFeature): void;

}

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
import Nameable from "./Nameable.js"
import Describable from "./Describable.js"
import IRealizedProductionFlow from "./IRealizedProductionFlow.js"
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js"
import IRealStock from "./IRealStock.js"
import IQuantity from "./IQuantity.js"
import Exhibitable from "./Exhibitable.js"
import ILocalizedProduct from "./ILocalizedProduct.js"
import IProductBatch from "./IProductBatch.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IPhysicalProduct extends Semanticable, Exhibitable, Describable, Nameable {

	getRealStocks(): Promise<IRealStock[]>;

	addRealStock(realStock: IRealStock): void;

	removeRealStock(realStock: IRealStock): void;

	setRealStocks(realStock: IRealStock[]): void;

	getLocalizedProducts(): Promise<ILocalizedProduct[]>;

	addLocalizedProduct(localizedProduct: ILocalizedProduct): void;

	removeLocalizedProduct(localizedProduct: ILocalizedProduct): void;

	setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void;

	getProductBatches(): Promise<IProductBatch[]>;

	addProductBatch(productBatch: IProductBatch): void;

	removeProductBatch(productBatch: IProductBatch): void;

	setProductBatches(productBatches: IProductBatch[]): void;

	getRealizedConsumptionFlows(): Promise<IRealizedConsumptionFlow[]>;

	addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;

	removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;

	setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;

	getRealizedProductionFlows(): Promise<IRealizedProductionFlow[]>;

	addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;

	removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;

	setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;

	getQuantity(): IQuantity | undefined;

	setQuantity(quantity: IQuantity): void;

}

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
import ITheoreticalStock from "./ITheoreticalStock.js"
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js"
import ISuppliedProduct from "./ISuppliedProduct.js"
import IQuantity from "./IQuantity.js"
import IPhysicalProduct from "./IPhysicalProduct.js"
import Exhibitable from "./Exhibitable.js"
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface ILocalizedProduct extends Semanticable, Describable, Exhibitable, Nameable {

	getCost(): number | undefined;

	setCost(cost: number): void;

	getTheoreticalStocks(): Promise<ITheoreticalStock[]>;

	addTheoreticalStock(theoreticalStock: ITheoreticalStock): void;

	removeTheoreticalStock(theoreticalStock: ITheoreticalStock): void;

	setTheoreticalStocks(theoreticalStocks: ITheoreticalStock[]): void;

	getSuppliedProducts(): Promise<ISuppliedProduct[]>;

	addSuppliedProduct(suppliedProduct: ISuppliedProduct): void;

	removeSuppliedProduct(suppliedProduct: ISuppliedProduct): void;

	setSuppliedProducts(suppliedProducts: ISuppliedProduct[]): void;

	getPhysicalProducts(): Promise<IPhysicalProduct[]>;

	addPhysicalProduct(physicalProduct: IPhysicalProduct): void;

	removePhysicalProduct(physicalProduct: IPhysicalProduct): void;

	setPhysicalProducts(physicalProducts: IPhysicalProduct[]): void;

	getPlannedLocalConsumptionFlows(): Promise<IPlannedLocalConsumptionFlow[]>;

	addPlannedLocalConsumptionFlow(consumptionFlow: IPlannedLocalConsumptionFlow): void;

	removePlannedLocalConsumptionFlow(consumptionFlow: IPlannedLocalConsumptionFlow): void;

	setPlannedLocalConsumptionFlows(consumptionFlows: IPlannedLocalConsumptionFlow[]): void;

	getPlannedLocalProductionFlows(): Promise<IPlannedLocalProductionFlow[]>;

	addPlannedLocalProductionFlow(productionFlow: IPlannedLocalProductionFlow): void;

	removePlannedLocalProductionFlow(productionFlow: IPlannedLocalProductionFlow): void;

	setPlannedLocalProductionFlows(productionFlows: IPlannedLocalProductionFlow[]): void;

	getQuantity(): IQuantity | undefined;

	setQuantity(quantity: IQuantity): void;

}

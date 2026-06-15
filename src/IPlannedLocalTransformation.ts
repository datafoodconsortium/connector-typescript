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
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js"
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js"
import Ellapsable from "./Ellapsable.js"
import ISKOSConcept from "./ISKOSConcept.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IPlannedLocalTransformation extends Semanticable, Ellapsable {

	getTransformationType(): Promise<ISKOSConcept | undefined>;

	setTransformationType(transformationType: ISKOSConcept): void;

	getCost(): number | undefined;

	setCost(cost: number): void;

	getPlannedLocalConsumptionFlows(): Promise<IPlannedLocalConsumptionFlow[]>;

	setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows: IPlannedLocalConsumptionFlow[]): void;

	getPlannedLocalProductionFlows(): Promise<IPlannedLocalProductionFlow[]>;

	setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void;

	addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;

	removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;

	addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;

	removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;

}

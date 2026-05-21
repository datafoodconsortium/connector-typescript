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
import IOrder from "./IOrder.js"
import IPhysicalPlace from "./IPhysicalPlace.js"
import IPickupOption from "./IPickupOption.js"
import ISaleSession from "./ISaleSession.js"
import ShippingOption from "./ShippingOption.js"
import IQuantity from "./IQuantity.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const PICKUP_OPTION_SEM_TYPE: string = "dfc-b:PickupOption";

export default class PickupOption extends ShippingOption implements IPickupOption {

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		name?: string,
		description?: string,
		fee?: number,
		quantity?: IQuantity,
		order?: IOrder,
		saleSession?: ISaleSession,
		pickupPlace?: IPhysicalPlace,
		beginDate?: string,
		endDate?: string,
		doNotStore?: boolean,
	}) {
		
		const type: string = PICKUP_OPTION_SEM_TYPE;
		
		if (parameters.other) {
			super({
				connector: parameters.connector,
				semanticId: parameters.semanticId!,
				other: parameters.other,
			});
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		} else {
			super({
				connector: parameters.connector,
				semanticId: parameters.semanticId!,
				semanticType: type,
				name: parameters.name,
				description: parameters.description,
				fee: parameters.fee,
				quantity: parameters.quantity,
				order: parameters.order,
				saleSession: parameters.saleSession,
				beginDate: parameters.beginDate,
				endDate: parameters.endDate
		});
		}
		
		
		if (!parameters.doNotStore) {
			this.connector.store(this);
		}
		if (parameters.pickupPlace) {
			this.setPickedUpPlace(parameters.pickupPlace);
		}
		
	}

	public setPickedUpPlace(pickedUpPlace: IPhysicalPlace): void {
		this.setSemanticPropertyReference("dfc-b:pickedUpAt", pickedUpPlace);
		
		this.connector.store(pickedUpPlace);
	}

	public async getPickedUpPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined> {
		let result: IPhysicalPlace | undefined = undefined;
		const semanticId = this.getSemanticProperty("dfc-b:pickedUpAt");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <IPhysicalPlace> semanticObject;
		}
		return result;
	}
}

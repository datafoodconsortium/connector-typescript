import IUnit from "./IUnit.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IPrice extends Semanticable{

	getValue(): number
	;
	getVatRate(): number
	;
	getUnit(): Promise<IUnit | undefined>
	;
	setValue(value: number): void;
	setVatRate(vatRate: number): void;
	setUnit(unit: IUnit): void;

}

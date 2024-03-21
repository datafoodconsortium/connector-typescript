import QuantitativeValue from "./QuantitativeValue.js";
export default class Characteristic extends QuantitativeValue {
    constructor(parameters) {
        if (parameters.other) {
            super({
                connector: parameters.connector,
                semanticId: parameters.semanticId,
                other: parameters.other,
            });
        }
        else {
            super({
                connector: parameters.connector,
                semanticId: parameters.semanticId,
                semanticType: parameters.semanticType,
                unit: parameters.unit,
                value: parameters.value
            });
        }
    }
}
//# sourceMappingURL=Characteristic.js.map
import { SemanticObject } from "@virtual-assembly/semantizer";
const PHONE_NUMBER_SEM_TYPE = "dfc-b:PhoneNumber";
export default class PhoneNumber extends SemanticObject {
    constructor(parameters) {
        const type = PHONE_NUMBER_SEM_TYPE;
        if (parameters.other) {
            super({
                semantizer: parameters.connector.getSemantizer(),
                semanticId: parameters.semanticId,
                other: parameters.other,
            });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else {
            super({
                semantizer: parameters.connector.getSemantizer(),
                semanticId: parameters.semanticId,
                semanticType: type,
            });
        }
        this.connector = parameters.connector;
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.countryCode || parameters.countryCode === 0) {
            this.setCountryCode(parameters.countryCode);
        }
        if (parameters.phoneNumber) {
            this.setNumber(parameters.phoneNumber);
        }
    }
    setNumber(number) {
        this.setSemanticPropertyLiteral("dfc-b:phoneNumber", number);
    }
    setCountryCode(countryCode) {
        this.setSemanticPropertyLiteral("dfc-b:countryCode", countryCode);
    }
    getNumber() {
        return this.getSemanticProperty("dfc-b:phoneNumber");
    }
    getCountryCode() {
        return Number(this.getSemanticProperty("dfc-b:countryCode"));
    }
}
//# sourceMappingURL=PhoneNumber.js.map
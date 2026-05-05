import { SemanticObject } from "@virtual-assembly/semantizer";
const PRODUCT_OPTION_VALUE_SEM_TYPE = "dfc-b:ProductOptionValue";
export default class ProductOptionValue extends SemanticObject {
    constructor(parameters) {
        const type = PRODUCT_OPTION_VALUE_SEM_TYPE;
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
        if (parameters.name) {
            this.setName(parameters.name);
        }
        if (parameters.description) {
            this.setDescription(parameters.description);
        }
        if (parameters.date) {
            this.setDate(parameters.date);
        }
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setDate(date) {
        this.setSemanticPropertyLiteral("dfc-b:date", date);
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getDate() {
        return this.getSemanticProperty("dfc-b:date");
    }
}
//# sourceMappingURL=ProductOptionValue.js.map
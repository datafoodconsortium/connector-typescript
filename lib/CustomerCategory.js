import { SemanticObject } from "@virtual-assembly/semantizer";
const CUSTOMER_CATEGORY_SEM_TYPE = "dfc-b:CustomerCategory";
export default class CustomerCategory extends SemanticObject {
    constructor(parameters) {
        const type = CUSTOMER_CATEGORY_SEM_TYPE;
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
        if (parameters.description) {
            this.setDescription(parameters.description);
        }
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
}
//# sourceMappingURL=CustomerCategory.js.map
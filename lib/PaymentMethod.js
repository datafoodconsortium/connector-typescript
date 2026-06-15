import { SemanticObject } from "@virtual-assembly/semantizer";
const PAYMENT_METHOD_SEM_TYPE = "dfc-b:PaymentMethod";
export default class PaymentMethod extends SemanticObject {
    constructor(parameters) {
        const type = PAYMENT_METHOD_SEM_TYPE;
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
        if (parameters.price) {
            this.setPrice(parameters.price);
        }
        if (parameters.provider) {
            this.setProvider(parameters.provider);
        }
        if (parameters.type) {
            this.setType(parameters.type);
        }
    }
    setType(type) {
        this.setSemanticPropertyLiteral("dfc-b:paymentMethodType", type);
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getType() {
        return this.getSemanticProperty("dfc-b:paymentMethodType");
    }
    setProvider(provider) {
        this.setSemanticPropertyLiteral("dfc-b:paymentMethodProvider", provider);
    }
    setPrice(price) {
        this.setSemanticPropertyAnonymous("dfc-b:hasPrice", price);
    }
    getProvider() {
        return this.getSemanticProperty("dfc-b:paymentMethodProvider");
    }
    getPrice() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasPrice");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
}
//# sourceMappingURL=PaymentMethod.js.map
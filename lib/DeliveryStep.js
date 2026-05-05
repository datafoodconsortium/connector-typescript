import Step from "./Step.js";
const DELIVERY_STEP_SEM_TYPE = "dfc-b:DeliveryStep";
export default class DeliveryStep extends Step {
    constructor(parameters) {
        const type = DELIVERY_STEP_SEM_TYPE;
        if (parameters.other) {
            super({
                connector: parameters.connector,
                semanticId: parameters.semanticId,
                other: parameters.other,
            });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else {
            super({
                connector: parameters.connector,
                semanticId: parameters.semanticId,
                semanticType: type,
                name: parameters.name,
                description: parameters.description,
                routes: parameters.routes,
                deliveredShipments: parameters.deliveredShipments,
                pickedUpShipments: parameters.pickedUpShipments,
                duration: parameters.duration,
                arrivalDate: parameters.arrivalDate
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
    }
}
//# sourceMappingURL=DeliveryStep.js.map
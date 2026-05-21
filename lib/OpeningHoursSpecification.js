import { SemanticObject } from "@virtual-assembly/semantizer";
const OPENING_HOURS_SPECIFICATION_SEM_TYPE = "https://schema.org/OpeningHoursSpecification";
export default class OpeningHoursSpecification extends SemanticObject {
    constructor(parameters) {
        const type = OPENING_HOURS_SPECIFICATION_SEM_TYPE;
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
        if (parameters.dayOfWeek) {
            this.setDayOfWeek(parameters.dayOfWeek);
        }
        if (parameters.opens) {
            this.setOpens(parameters.opens);
        }
        if (parameters.closes) {
            this.setCloses(parameters.closes);
        }
    }
    setCloses(closes) {
        this.setSemanticPropertyLiteral("https://schema.org/closes", closes);
    }
    getDayOfWeek() {
        return this.getSemanticProperty("https://schema.org/dayOfWeek");
    }
    getCloses() {
        return this.getSemanticProperty("https://schema.org/closes");
    }
    setOpens(opens) {
        this.setSemanticPropertyLiteral("https://schema.org/opens", opens);
    }
    getOpens() {
        return this.getSemanticProperty("https://schema.org/opens");
    }
    setDayOfWeek(dayOfWeek) {
        this.setSemanticPropertyLiteral("https://schema.org/dayOfWeek", dayOfWeek);
    }
}
//# sourceMappingURL=OpeningHoursSpecification.js.map
import { SemanticObject } from "@virtual-assembly/semantizer";
const SOCIAL_MEDIA_SEM_TYPE = "dfc-b:SocialMedia";
export default class SocialMedia extends SemanticObject {
    constructor(parameters) {
        const type = SOCIAL_MEDIA_SEM_TYPE;
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
        if (parameters.url) {
            this.setUrl(parameters.url);
        }
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getUrl() {
        return this.getSemanticProperty("dfc-b:URL");
    }
    setUrl(url) {
        this.setSemanticPropertyLiteral("dfc-b:URL", url);
    }
}
//# sourceMappingURL=SocialMedia.js.map
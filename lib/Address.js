import { SemanticObject } from "@virtual-assembly/semantizer";
const ADDRESS_SEM_TYPE = "dfc-b:Address";
export default class Address extends SemanticObject {
    constructor(parameters) {
        const type = ADDRESS_SEM_TYPE;
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
        if (parameters.street) {
            this.setStreet(parameters.street);
        }
        if (parameters.postalCode) {
            this.setPostalCode(parameters.postalCode);
        }
        if (parameters.city) {
            this.setCity(parameters.city);
        }
        if (parameters.country) {
            this.setCountry(parameters.country);
        }
        if (parameters.latitude || parameters.latitude === 0) {
            this.setLatitude(parameters.latitude);
        }
        if (parameters.longitude || parameters.longitude === 0) {
            this.setLongitude(parameters.longitude);
        }
        if (parameters.region) {
            this.setRegion(parameters.region);
        }
    }
    setPostalCode(postalCode) {
        this.setSemanticPropertyLiteral("dfc-b:hasPostalCode", postalCode);
    }
    setCountry(country) {
        this.setSemanticPropertyLiteral("dfc-b:hasCountry", country);
    }
    getLatitude() {
        return Number(this.getSemanticProperty("dfc-b:latitude"));
    }
    getRegion() {
        return this.getSemanticProperty("dfc-b:region");
    }
    setLatitude(latitude) {
        this.setSemanticPropertyLiteral("dfc-b:latitude", latitude);
    }
    setRegion(region) {
        this.setSemanticPropertyLiteral("dfc-b:region", region);
    }
    getPostalCode() {
        return this.getSemanticProperty("dfc-b:hasPostalCode");
    }
    getCountry() {
        return this.getSemanticProperty("dfc-b:hasCountry");
    }
    setCity(city) {
        this.setSemanticPropertyLiteral("dfc-b:hasCity", city);
    }
    setLongitude(longitude) {
        this.setSemanticPropertyLiteral("dfc-b:longitude", longitude);
    }
    getLongitude() {
        return Number(this.getSemanticProperty("dfc-b:longitude"));
    }
    setStreet(street) {
        this.setSemanticPropertyLiteral("dfc-b:hasStreet", street);
    }
    getStreet() {
        return this.getSemanticProperty("dfc-b:hasStreet");
    }
    getCity() {
        return this.getSemanticProperty("dfc-b:hasCity");
    }
}
//# sourceMappingURL=Address.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    setCity(city) {
        this.setSemanticPropertyLiteral("dfc-b:hasCity", city);
    }
    getLongitude() {
        return Number(this.getSemanticProperty("dfc-b:longitude"));
    }
    getCountry(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasCountry");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getStreet() {
        return this.getSemanticProperty("dfc-b:hasStreet");
    }
    setStreet(street) {
        this.setSemanticPropertyLiteral("dfc-b:hasStreet", street);
    }
    getRegion() {
        return this.getSemanticProperty("dfc-b:region");
    }
    getPostalCode() {
        return this.getSemanticProperty("dfc-b:hasPostalCode");
    }
    setLatitude(latitude) {
        this.setSemanticPropertyLiteral("dfc-b:latitude", latitude);
    }
    setLongitude(longitude) {
        this.setSemanticPropertyLiteral("dfc-b:longitude", longitude);
    }
    setRegion(region) {
        this.setSemanticPropertyLiteral("dfc-b:region", region);
    }
    setCountry(country) {
        this.setSemanticPropertyReference("dfc-b:hasCountry", country);
        this.connector.store(country);
    }
    setPostalCode(postalCode) {
        this.setSemanticPropertyLiteral("dfc-b:hasPostalCode", postalCode);
    }
    getLatitude() {
        return Number(this.getSemanticProperty("dfc-b:latitude"));
    }
    getCity() {
        return this.getSemanticProperty("dfc-b:hasCity");
    }
}
//# sourceMappingURL=Address.js.map
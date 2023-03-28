/*
 * MIT License
 *
 * Copyright (c) 2023 Maxime Lecoq <maxime@lecoqlibre.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
import { SemanticObject } from "@virtual-assembly/semantizer";
export default class Address extends SemanticObject {
    constructor(parameters) {
        const type = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Address";
        if (parameters.other) {
            super({ semanticId: parameters.semanticId, other: parameters.other });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else
            super({ semanticId: parameters.semanticId, semanticType: type });
        this.connector = parameters.connector;
        if (!parameters.doNotStore)
            this.connector.store(this);
        if (parameters.street)
            this.setStreet(parameters.street);
        if (parameters.postalCode)
            this.setPostalCode(parameters.postalCode);
        if (parameters.city)
            this.setCity(parameters.city);
        if (parameters.country)
            this.setCountry(parameters.country);
    }
    setCountry(country) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCountry";
        this.setSemanticPropertyLiteral(property, country);
    }
    setStreet(street) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasStreet";
        this.setSemanticPropertyLiteral(property, street);
    }
    setCity(city) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCity";
        this.setSemanticPropertyLiteral(property, city);
    }
    getCountry() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCountry");
    }
    setPostalCode(postalCode) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPostalCode";
        this.setSemanticPropertyLiteral(property, postalCode);
    }
    getPostalCode() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPostalCode");
    }
    getCity() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCity");
    }
    getStreet() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasStreet");
    }
}
//# sourceMappingURL=Address.js.map
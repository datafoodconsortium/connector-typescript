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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer";
export default class Price extends SemanticObjectAnonymous {
    constructor(parameters) {
        const type = parameters.semanticType ? parameters.semanticType : "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Price";
        if (parameters.other) {
            super({ semanticId: parameters.semanticId, other: parameters.other });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else
            super({ semanticId: parameters.semanticId, semanticType: type });
        this.connector = parameters.connector;
        if (parameters.value || parameters.value === 0)
            this.setValue(parameters.value);
        if (parameters.vatRate || parameters.vatRate === 0)
            this.setVatRate(parameters.vatRate);
        if (parameters.unit)
            this.setUnit(parameters.unit);
    }
    getUnit(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasUnit");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setValue(value) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#value";
        this.setSemanticPropertyLiteral(property, value);
    }
    getValue() {
        return Number(this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#value"));
    }
    setUnit(unit) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasUnit";
        this.setSemanticPropertyReference(property, unit);
        this.connector.store(unit);
    }
    getVatRate() {
        return Number(this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#VATrate"));
    }
    setVatRate(vatRate) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#VATrate";
        this.setSemanticPropertyLiteral(property, vatRate);
    }
}
//# sourceMappingURL=Price.js.map
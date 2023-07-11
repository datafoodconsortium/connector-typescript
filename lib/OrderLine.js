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
import { SemanticObject } from "@virtual-assembly/semantizer";
export default class OrderLine extends SemanticObject {
    constructor(parameters) {
        const type = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#OrderLine";
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
        if (parameters.quantity || parameters.quantity === 0)
            this.setQuantity(parameters.quantity);
        if (parameters.price)
            this.setPrice(parameters.price);
        if (parameters.offer)
            this.setOffer(parameters.offer);
        if (parameters.order)
            this.setOrder(parameters.order);
    }
    setOffer(offer) {
        const property = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#concerns";
        this.setSemanticPropertyReference(property, offer);
        this.connector.store(offer);
    }
    setQuantity(quantity) {
        const property = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#quantity";
        this.setSemanticPropertyLiteral(property, quantity);
    }
    getPrice(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const blankNode = this.getSemanticPropertyAnonymous("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasPrice");
            return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
        });
    }
    setOrder(order) {
        const property = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#partOf";
        this.setSemanticPropertyReference(property, order);
        this.connector.store(order);
    }
    getOffer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#concerns");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#partOf");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getQuantity() {
        return Number(this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#quantity"));
    }
    setPrice(price) {
        const property = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#hasPrice";
        this.setSemanticPropertyAnonymous(property, price);
    }
    setDescription(description) {
        const property = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#description";
        this.setSemanticPropertyLiteral(property, description);
    }
    getDescription() {
        return this.getSemanticProperty("https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#description");
    }
}
//# sourceMappingURL=OrderLine.js.map
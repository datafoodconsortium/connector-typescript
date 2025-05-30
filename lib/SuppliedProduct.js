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
import DefinedProduct from "./DefinedProduct.js";
const SUPPLIED_PRODUCT_SEM_TYPE = "dfc-b:SuppliedProduct";
export default class SuppliedProduct extends DefinedProduct {
    getTotalTheoreticalStock() {
        return Number(this.getSemanticProperty("dfc-b:totalTheoreticalStock"));
    }
    setTotalTheoreticalStock(totalTheoreticalStock) {
        this.setSemanticPropertyLiteral("dfc-b:totalTheoreticalStock", totalTheoreticalStock);
    }
    constructor(parameters) {
        const type = SUPPLIED_PRODUCT_SEM_TYPE;
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
                productType: parameters.productType,
                quantity: parameters.quantity,
                alcoholPercentage: parameters.alcoholPercentage,
                lifetime: parameters.lifetime,
                claims: parameters.claims,
                usageOrStorageConditions: parameters.usageOrStorageConditions,
                allergenCharacteristics: parameters.allergenCharacteristics,
                nutrientCharacteristics: parameters.nutrientCharacteristics,
                physicalCharacteristics: parameters.physicalCharacteristics,
                geographicalOrigin: parameters.geographicalOrigin,
                catalogItems: parameters.catalogItems,
                certifications: parameters.certifications,
                natureOrigin: parameters.natureOrigin,
                partOrigin: parameters.partOrigin,
                images: parameters.images
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.totalTheoreticalStock || parameters.totalTheoreticalStock === 0) {
            this.setTotalTheoreticalStock(parameters.totalTheoreticalStock);
        }
    }
}
//# sourceMappingURL=SuppliedProduct.js.map
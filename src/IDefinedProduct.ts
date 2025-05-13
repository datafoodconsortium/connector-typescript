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
import Describable from "./Describable.js"
import IQuantity from "./IQuantity.js"
import Proposable from "./Proposable.js"
import Nameable from "./Nameable.js"
import ISKOSConcept from "./ISKOSConcept.js"
import Manufacturable from "./Manufacturable.js"
import Certifiable from "./Certifiable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IDefinedProduct extends Semanticable, Manufacturable, Proposable, Nameable, Describable, Certifiable {

	addClaim(claim: ISKOSConcept): void;

	getQuantity(): IQuantity | undefined;

	setQuantity(quantity: IQuantity): void;

	getClaims(): Promise<ISKOSConcept[]>;

	getProductType(): Promise<ISKOSConcept | undefined>;

	setProductType(productType: ISKOSConcept): void;

	removeClaim(claim: ISKOSConcept): void;

	addImage(image: string): void;

	removeImage(image: string): void;

	getImages(): string[];

	addVariant(variant: IDefinedProduct): void;

	getVariants(): Promise<IDefinedProduct[]>;

	setVariants(variants: IDefinedProduct[]): void;

	removeVariant(variant: IDefinedProduct): void;

	addIsVariantOf(parent: IDefinedProduct): void;

	getIsVariantOf(): Promise<IDefinedProduct[]>;

	setIsVariantOf(parents: IDefinedProduct[]): void;

	removeIsVariantOf(parent: IDefinedProduct): void;

}

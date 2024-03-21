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
import TechnicalProductProposer from "./TechnicalProductProposer.js"
import MainContactOwner from "./MainContactOwner.js"
import ProductSupplier from "./ProductSupplier.js"
import CatalogMaintainer from "./CatalogMaintainer.js"
import CatalogItemManager from "./CatalogItemManager.js"
import Taxable from "./Taxable.js"
import Describable from "./Describable.js"
import Onboardable from "./Onboardable.js"
import Nameable from "./Nameable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IEnterprise extends Semanticable, MainContactOwner, CatalogItemManager, Onboardable, Describable, ProductSupplier, Nameable, TechnicalProductProposer, CatalogMaintainer, Taxable {


}

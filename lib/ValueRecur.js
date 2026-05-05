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
const VALUE_RECUR_SEM_TYPE = "http://www.w3.org/2002/12/cal/icaltzd#Value_RECUR";
export default class ValueRecur extends SemanticObject {
    getByDay() {
        return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#byday");
    }
    setByDay(byDay) {
        this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#byday", byDay);
    }
    getByMonth() {
        return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#bymonth");
    }
    setByMonth(byMonth) {
        this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#bymonth", byMonth);
    }
    getFreq() {
        return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#freq");
    }
    setFreq(freq) {
        this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#freq", freq);
    }
    getInterval() {
        return Number(this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#interval"));
    }
    setInterval(interval) {
        this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#interval", interval);
    }
    constructor(parameters) {
        const type = VALUE_RECUR_SEM_TYPE;
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
        if (parameters.byDay) {
            this.setByDay(parameters.byDay);
        }
        if (parameters.byMonth) {
            this.setByMonth(parameters.byMonth);
        }
        if (parameters.freq) {
            this.setFreq(parameters.freq);
        }
        if (parameters.interval || parameters.interval === 0) {
            this.setInterval(parameters.interval);
        }
    }
}
//# sourceMappingURL=ValueRecur.js.map
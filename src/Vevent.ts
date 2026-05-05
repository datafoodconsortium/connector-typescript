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
import ValueRecur from "./ValueRecur.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const VEVENT_SEM_TYPE: string = "http://www.w3.org/2002/12/cal/icaltzd#Vevent";

export default class Vevent extends SemanticObject {

	protected connector: IConnector;

	public getStart(): string | undefined {
		return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtstart");
	}

	public setStart(start: string): void {
		this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#dtstart", start);
	}

	public getEnd(): string | undefined {
		return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtend");
	}

	public setEnd(end: string): void {
		this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#dtend", end);
	}

	public async getRule(options?: IGetterOptions): Promise<ValueRecur | undefined> {
		let result: ValueRecur | undefined = undefined;
		const semanticId = this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#rrule");
		if (semanticId) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) result = <ValueRecur> semanticObject;
		}
		return result;
	}

	public setRule(rule: ValueRecur): void {
		this.setSemanticPropertyReference("http://www.w3.org/2002/12/cal/icaltzd#rrule", rule);
		
		this.connector.store(rule);
	}

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		start?: string,
		end?: string,
		rule?: ValueRecur,
		doNotStore?: boolean,
	}) {
		
		const type: string = VEVENT_SEM_TYPE;
		
		if (parameters.other) {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				other: parameters.other,
			});
			if (!parameters.other.isSemanticTypeOf(type))
				throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
		} else {
			super({
				semantizer: parameters.connector.getSemantizer(),
				semanticId: parameters.semanticId!,
				semanticType: type,
				
		});
		}
		this.connector = parameters.connector;
		
		
		if (!parameters.doNotStore) {
			this.connector.store(this);
		}
		if (parameters.start) {
			this.setStart(parameters.start);
		}
		
		if (parameters.end) {
			this.setEnd(parameters.end);
		}
		
		if (parameters.rule) {
			this.setRule(parameters.rule);
		}
		
	}
}

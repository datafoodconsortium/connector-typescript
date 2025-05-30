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
import ICatalog from "./ICatalog.js"
import ICatalogItem from "./ICatalogItem.js"
import IEnterprise from "./IEnterprise.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";

const CATALOG_SEM_TYPE: string = "dfc-b:Catalog";

export default class Catalog extends SemanticObject implements ICatalog {

	protected connector: IConnector;

	public constructor(parameters: {
		connector: IConnector,
		semanticId?: string,
		other?: Semanticable,
		maintainers?: IEnterprise[],
		items?: ICatalogItem[],
		doNotStore?: boolean,
	}) {
		
		const type: string = CATALOG_SEM_TYPE;
		
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
		if (parameters.maintainers) {
			parameters.maintainers.forEach(e => this.addMaintainer(e));
		}
		
		if (parameters.items) {
			parameters.items.forEach(e => this.addItem(e));
		}
		
	}

	public async getMaintainers(options?: IGetterOptions): Promise<IEnterprise[]> {
		const results = new Array<IEnterprise>();
		const properties = this.getSemanticPropertyAll("dfc-b:maintainedBy");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<IEnterprise>semanticObject);
		}
		return results;
	}

	public removeItem(item: ICatalogItem): void {
		throw new Error("Not yet implemented.");
	}

	public addItem(item: ICatalogItem): void {
		if (item.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:lists", item);
		}
		else {
			this.connector.store(item);
			this.addSemanticPropertyReference("dfc-b:lists", item);
		}
	}

	public addMaintainer(maintainer: IEnterprise): void {
		if (maintainer.isSemanticObjectAnonymous()) {
			this.addSemanticPropertyAnonymous("dfc-b:maintainedBy", maintainer);
		}
		else {
			this.connector.store(maintainer);
			this.addSemanticPropertyReference("dfc-b:maintainedBy", maintainer);
		}
	}

	public async getItems(options?: IGetterOptions): Promise<ICatalogItem[]> {
		const results = new Array<ICatalogItem>();
		const properties = this.getSemanticPropertyAll("dfc-b:lists");
		for await (const semanticId of properties) {
			const semanticObject: Semanticable | undefined = await this.connector.fetch(semanticId, options);
			if (semanticObject) results.push(<ICatalogItem>semanticObject);
		}
		return results;
	}
}

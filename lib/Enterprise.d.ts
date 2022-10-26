import Agent from "./Agent.js";
import IEnterprise from "./IEnterprise.js";
import ICustomerCategory from "./ICustomerCategory.js";
import SuppliedProduct from "./SuppliedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class Enterprise extends Agent implements IEnterprise {
    private name;
    private description;
    private vatNumber;
    private customerCategories;
    private suppliedProducts;
    private catalogItems;
    constructor(name: string);
    setVatNumber(vatNumber: string): void;
    getVatNumber(): string;
    getDescription(): string;
    setDescription(description: string): void;
    addCatalogItem(catalogItem: (ICatalogItem & Semanticable)): void;
    addSupplyProduct(suppliedProduct: (SuppliedProduct & Semanticable)): void;
    getSuppliedProducts(): IterableIterator<(SuppliedProduct & Semanticable)>;
    getCatalogItems(): IterableIterator<(ICatalogItem & Semanticable)>;
    getName(): string;
    setName(name: string): void;
    addCustomerCategory(customerCategory: (ICustomerCategory & Semanticable)): void;
    getCustomerCategories(): IterableIterator<(ICustomerCategory & Semanticable)>;
}
//# sourceMappingURL=Enterprise.d.ts.map
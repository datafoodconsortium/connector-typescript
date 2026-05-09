import IProductBatch from "./IProductBatch.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IStock from "./IStock.js";
export default interface IRealStock extends IStock {
    getPhysicalProduct(): Promise<IPhysicalProduct | undefined>;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    addProductBatch(productBatch: IProductBatch): void;
    getProductBatches(): Promise<IProductBatch[]>;
    removeProductBatch(ProductBatch: IProductBatch): void;
    setProductBatches(ProductBatches: IProductBatch[]): void;
}
//# sourceMappingURL=IRealStock.d.ts.map
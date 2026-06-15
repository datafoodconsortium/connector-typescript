import IVariantCharacteristic from "./IVariantCharacteristic.js";
import IDefinedProduct from "./IDefinedProduct.js";
export default interface IVariant extends IDefinedProduct {
    addIsVariantOf(product: IDefinedProduct): void;
    isVariantOf(): Promise<IDefinedProduct[]>;
    setIsVariantOf(products: IDefinedProduct[]): void;
    removeIsVariantOf(product: IDefinedProduct): void;
    addVariantCharacteristic(variantCharacteristic: IVariantCharacteristic): void;
    getVariantCharacteristics(): Promise<IVariantCharacteristic[]>;
    setVariantCharacteristics(variantCharacteristics: IVariantCharacteristic[]): void;
    removeVariantCharacteristic(variantCharacteristic: IVariantCharacteristic): void;
}
//# sourceMappingURL=IVariant.d.ts.map
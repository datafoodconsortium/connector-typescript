import IPrice from "./IPrice.js";
export default interface Payable {
    getPrice(): IPrice | undefined;
    setPrice(price: IPrice): void;
}
//# sourceMappingURL=Payable.d.ts.map
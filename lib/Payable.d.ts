import IPrice from "./IPrice.js";
export default interface Payable {
    getPrice(): Promise<IPrice | undefined>;
    setPrice(price: IPrice): void;
}
//# sourceMappingURL=Payable.d.ts.map
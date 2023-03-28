import Orderable from "./Orderable.js";
export default interface Invoiceable {
    getOrders(): Promise<Array<Orderable>>;
}
//# sourceMappingURL=Invoiceable.d.ts.map
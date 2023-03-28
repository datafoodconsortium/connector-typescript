import Invoiceable from "./Invoiceable.js";
export default interface Orderable {
    getCustomer(): Promise<Invoiceable | undefined>;
}
//# sourceMappingURL=Orderable.d.ts.map
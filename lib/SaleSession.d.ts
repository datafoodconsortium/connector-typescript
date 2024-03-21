import ISaleSession from "./ISaleSession.js";
import IOffer from "./IOffer.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class SaleSession extends SemanticObject implements ISaleSession {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        beginDate?: string;
        endDate?: string;
        quantity?: number;
        offers?: IOffer[];
        doNotStore?: boolean;
    });
    getBeginDate(): string | undefined;
    addOffer(offer: IOffer): void;
    setEndDate(endDate: string): void;
    setQuantity(quantity: number): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    getQuantity(): number | undefined;
    getEndDate(): string | undefined;
    setBeginDate(beginDate: string): void;
}
//# sourceMappingURL=SaleSession.d.ts.map
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
    setEndDate(endDate: string): void;
    getQuantity(): number | undefined;
    setBeginDate(beginDate: string): void;
    getBeginDate(): string | undefined;
    getEndDate(): string | undefined;
    setQuantity(quantity: number): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    addOffer(offer: IOffer): void;
}
//# sourceMappingURL=SaleSession.d.ts.map
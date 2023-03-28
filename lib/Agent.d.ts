import IAddress from "./IAddress.js";
import IAgent from "./IAgent.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default abstract class Agent extends SemanticObject implements IAgent {
    protected connector: IConnector;
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        localizations?: IAddress[];
    });
    addLocalization(localization: IAddress): void;
    removeLocalization(localization: IAddress): void;
    getLocalizations(options?: IGetterOptions): Promise<Array<IAddress>>;
}
//# sourceMappingURL=Agent.d.ts.map
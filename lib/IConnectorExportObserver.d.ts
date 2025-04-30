import type { Observer } from './observer';
export default interface IConnectorExportObserver extends Observer<string> {
    next(json: string): void;
}
//# sourceMappingURL=IConnectorExportObserver.d.ts.map
export default class SKOSParserElement {
    readonly id: string;
    readonly type: string;
    readonly broader: Array<string>;
    constructor(element: any);
    private extractId;
    hasBroader(): boolean;
    isConcept(): boolean;
    isCollection(): boolean;
}
//# sourceMappingURL=SKOSParserElement.d.ts.map
import ITechnicalProduct from "./ITechnicalProduct.js";
export default interface TechnicalProductProposer {
    getProposedTechnicalProducts(): Promise<Array<ITechnicalProduct>>;
    proposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
    unproposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
}
//# sourceMappingURL=TechnicalProductProposer.d.ts.map
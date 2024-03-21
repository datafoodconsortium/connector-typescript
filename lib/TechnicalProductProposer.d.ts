import ITechnicalProduct from "./ITechnicalProduct.js";
export default interface TechnicalProductProposer {
    getProposedTechnicalProducts(): Promise<ITechnicalProduct[]>;
    proposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
    unproposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
}
//# sourceMappingURL=TechnicalProductProposer.d.ts.map
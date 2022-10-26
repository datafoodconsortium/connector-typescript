import { SemanticObject } from "@virtual-assembly/semantizer";
export default class DefinedProduct extends SemanticObject {
    constructor(name, description) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#DefinedProduct");
        this.name = name;
        this.description = description;
        this.productType = undefined;
        this.quantity = undefined;
        this.alcoholPercentage = 0.0;
        this.lifetime = "";
        this.claims = [];
        this.usageOrStorageConditions = "";
        this.allergenCharacteristics = [];
        this.nutrientCharacteristics = [];
        this.physicalCharacteristics = [];
        this.geographicalOrigin = undefined;
        this.catalogItems = [];
        this.certifications = [];
        this.natureOrigin = [];
        this.partOrigin = [];
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#name", () => this.getName());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#description", () => this.getDescription());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasType", () => this.getProductType());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasQuantity", () => this.getQuantity());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#alcoholPercentage", () => this.getAlcoholPercentage());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#lifetime", () => this.getLifetime());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasClaim", () => this.getClaims());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#usageOrStorageCondition", () => this.getUsageOrStorageConditions());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasAllergenCharacteristic", () => this.getAllergenCharacteristics());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNutrientCharacteristic", () => this.getNutrientCharacteristics());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPhysicalCharacteristic", () => this.getPhysicalCharacteristics());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasGeographicalOrigin", () => this.getGeographicalOrigin());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#referencedBy", () => this.getCatalogItems());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCertification", () => this.getCertifications());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNatureOrigin", () => this.getNatureOrigin());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPartOrigin", () => this.getPartOrigin());
    }
    addClaim(claim) {
        this.claims.push(claim);
    }
    setProductType(productType) {
        this.productType = productType;
    }
    getProductType() {
        return this.productType;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getClaims() {
        return this.claims.values();
    }
    addNutrientCharacteristic(nutrientCharacteristic) {
        this.nutrientCharacteristics.push(nutrientCharacteristic);
    }
    getNatureOrigin() {
        return this.natureOrigin.values();
    }
    addNatureOrigin(natureOrigin) {
        this.natureOrigin.push(natureOrigin);
    }
    getGeographicalOrigin() {
        return this.geographicalOrigin;
    }
    addAllergenCharacteristic(allergenCharacteristic) {
        this.allergenCharacteristics.push(allergenCharacteristic);
    }
    getPhysicalCharacteristics() {
        return this.physicalCharacteristics.values();
    }
    addPartOrigin(partOrigin) {
        this.partOrigin.push(partOrigin);
    }
    getAlcoholPercentage() {
        return this.alcoholPercentage;
    }
    getPartOrigin() {
        return this.partOrigin.values();
    }
    getUsageOrStorageConditions() {
        return this.usageOrStorageConditions;
    }
    getNutrientCharacteristics() {
        return this.nutrientCharacteristics.values();
    }
    getLifetime() {
        return this.lifetime;
    }
    setGeographicalOrigin(geographicalOrigin) {
        this.geographicalOrigin = geographicalOrigin;
    }
    getAllergenCharacteristics() {
        return this.allergenCharacteristics.values();
    }
    addPhysicalCharacteristic(physicalCharacteristic) {
        this.physicalCharacteristics.push(physicalCharacteristic);
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    addCatalogItem(catalogItem) {
        this.catalogItems.push(catalogItem);
    }
    getCatalogItems() {
        return this.catalogItems.values();
    }
    addCertification(certification) {
        this.certifications.push(certification);
    }
    getCertifications() {
        return this.certifications.values();
    }
}
//# sourceMappingURL=DefinedProduct.js.map
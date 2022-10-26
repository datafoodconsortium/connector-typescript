import SuppliedProduct from '../lib/SuppliedProduct.js';
import QuantitativeValue from '../lib/QuantitativeValue.js';
import AllergenCharacteristic from '../lib/AllergenCharacteristic.js';
import NutrientCharacteristic from '../lib/NutrientCharacteristic.js';
import PhysicalCharacteristic from '../lib/PhysicalCharacteristic.js';

const connector = global.connector;
const expected = `{"@context":{"dfc-b":"http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#"},"@id":"platform.com/test","@type":"dfc-b:SuppliedProduct","dfc-b:description":"Super tomate","dfc-b:hasAllergenCharacteristic":[{"@type":"dfc-b:AllergenCharacteristic","dfc-b:hasAllergenDimension":"dfc-m:Peanuts","dfc-b:hasUnit":"dfc-m:Kilogram","dfc-b:value":1},{"@type":"dfc-b:AllergenCharacteristic","dfc-b:hasAllergenDimension":"dfc-m:Mustard","dfc-b:hasUnit":"dfc-m:Kilogram","dfc-b:value":23}],"dfc-b:hasCertification":["dfc-f:AOC_FR","dfc-f:Organic-AB"],"dfc-b:hasClaim":[],"dfc-b:hasNatureOrigin":[],"dfc-b:hasNutrientCharacteristic":[],"dfc-b:hasPartOrigin":[],"dfc-b:hasPhysicalCharacteristic":[],"dfc-b:hasQuantity":{"@type":"dfc-b:QuantitativeValue","dfc-b:hasUnit":"dfc-m:Kilogram","dfc-b:value":25},"dfc-b:hasType":"http://static.datafoodconsortium.org/data/productTypes.rdf#round-tomato","dfc-b:name":"Tomate","dfc-b:referencedBy":[]}`;

test('serialize basic enterprise', async () => {
    const gram = connector.MEASURES.UNIT.QUANTITYUNIT.GRAM;
    const kilogram = connector.MEASURES.UNIT.QUANTITYUNIT.KILOGRAM;

    let suppliedProduct = new SuppliedProduct("Tomate", "Super tomate");
    suppliedProduct.setSemanticId("suppliedProduct1");
    suppliedProduct.setQuantity(new QuantitativeValue(kilogram, 1));
    suppliedProduct.setProductType(connector.PRODUCT_TYPES.VEGETABLE.TOMATO.ROUND_TOMATO);
    suppliedProduct.addCertification(connector.FACETS.CERTIFICATION.LOCALLABEL.AOC_FR);
    suppliedProduct.addCertification(connector.FACETS.CERTIFICATION.ORGANICLABEL.ORGANIC_AB);
    suppliedProduct.addClaim(connector.FACETS.CLAIM.NUTRITIONALCLAIM.NOADDEDSUGARS);
    suppliedProduct.addClaim(connector.FACETS.CLAIM.NUTRITIONALCLAIM.LOWSODIUMSALT);
    suppliedProduct.addNutrientCharacteristic(new NutrientCharacteristic(gram, 10, connector.MEASURES.DIMENSION.NUTRIENTDIMENSION.CALCIUM));
    suppliedProduct.addAllergenCharacteristic(new AllergenCharacteristic(kilogram, 1, connector.MEASURES.DIMENSION.ALLERGENDIMENSION.PEANUTS));
    suppliedProduct.addAllergenCharacteristic(new AllergenCharacteristic(kilogram, 23, connector.MEASURES.DIMENSION.ALLERGENDIMENSION.MUSTARD));
    suppliedProduct.addPhysicalCharacteristic(new PhysicalCharacteristic(gram, 100, connector.MEASURES.DIMENSION.PHYSICALDIMENSION.WEIGHT));
    suppliedProduct.setGeographicalOrigin(connector.FACETS.TERRITORIALORIGIN.EUROPE.FRANCE.CENTREVALLOIRE);
    suppliedProduct.addNatureOrigin(connector.FACETS.NATUREORIGIN.PLANTORIGIN);
    suppliedProduct.addPartOrigin(connector.FACETS.PARTORIGIN.PLANTPARTORIGIN.FRUIT);

    const serialized = await connector.export(suppliedProduct);
    expect(serialized).toStrictEqual(expected);
});
The Data Food Connector is a tool to help you to integrate the DFC standard within you application. Each concept of the DFC ontology can be manipulated with the help of the corresponding class supplied by the connector.

This connector will also help you to generate the JSON-LD required by the other DFC compliant platforms to exchange data.

The [Data Food Consortium](https://datafoodconsortium.org) project (DFC) aims to provide interoperability between food supply chain platforms. We use the semantizer library inside our connector library to help developers to exchange JSON-LD data expressed with the DFC ontology.

# Get started

You can install the connector with the following command: `npm i @datafoodconsortium/connector`.

Then in you JS file, import the newly installed connector:
```JS
import { connector } from '@datafoodconsortium/connector'
```

The connector is a singleton. To get it, access the instance member of the class:
```JS
const connector = Connector.getInstance();
```

You can then load our different SKOS vocabularies providing the corresponding JSON-LD files:
```JS
connector.loadMeasures(JSON.parse(File.read("/path/to/measures.json")))
connector.loadFacets(JSON.parse(File.read("/path/to/facets.json")))
connector.loadProductTypes(JSON.parse(File.read("/path/to/productTypes.json")))
```

Before to create the following example product, be sure to import the required classes:
```JS
import { 
    Connector, 
    QuantitativeValue, 
    SuppliedProduct, 
    AllergenCharacteristic,
    NutrientCharacteristic,
    PhysicalCharacteristic
} from "@datafoodconsortium/connector";
```

Units are directly accessible from the connector like:
```JS
const gram = connector.MEASURES.UNIT.QUANTITYUNIT.GRAM;
const kilogram = connector.MEASURES.UNIT.QUANTITYUNIT.KILOGRAM;
```

Then you can create product like:
```JS
let suppliedProduct = new SuppliedProduct("Tomato", "Awesome tomato");
```

Don't forget to set its semantic id (URI) so the object will not being considered as a blank node:
```JS
tomato.setSemanticId("https://myplatform.com/tomato");
```

You can set the different properties of the object, like adding a certification. The connector provide helpers to get the certification from the previously loaded vocabularies:
```JS
// Set the quantity
suppliedProduct.setQuantity(new QuantitativeValue(kilogram, 1));

// Set the product type
suppliedProduct.setProductType(connector.PRODUCT_TYPES.VEGETABLE.TOMATO.ROUND_TOMATO);

// Add certifications
suppliedProduct.addCertification(connector.FACETS.CERTIFICATION.LOCALLABEL.AOC_FR);
suppliedProduct.addCertification(connector.FACETS.CERTIFICATION.ORGANICLABEL.ORGANIC_AB);

// Add claims
suppliedProduct.addClaim(connector.FACETS.CLAIM.NUTRITIONALCLAIM.NOADDEDSUGARS);
suppliedProduct.addClaim(connector.FACETS.CLAIM.NUTRITIONALCLAIM.LOWSODIUMSALT);

// Add nutrient characteristics
suppliedProduct.addNutrientCharacteristic(new NutrientCharacteristic(gram, 10, connector.MEASURES.DIMENSION.NUTRIENTDIMENSION.CALCIUM));

// Add allergen characteristics
suppliedProduct.addAllergenCharacteristic(new AllergenCharacteristic(kilogram, 1, connector.MEASURES.DIMENSION.ALLERGENDIMENSION.PEANUTS));
suppliedProduct.addAllergenCharacteristic(new AllergenCharacteristic(kilogram, 23, connector.MEASURES.DIMENSION.ALLERGENDIMENSION.MUSTARD));

// Add physical characteristics
suppliedProduct.addPhysicalCharacteristic(new PhysicalCharacteristic(gram, 100, connector.MEASURES.DIMENSION.PHYSICALDIMENSION.WEIGHT));

// Set the geographical origin
suppliedProduct.setGeographicalOrigin(connector.FACETS.TERRITORIALORIGIN.EUROPE.FRANCE.CENTREVALLOIRE);

// Add nature origin
suppliedProduct.addNatureOrigin(connector.FACETS.NATUREORIGIN.PLANTORIGIN);

// Add part origin
suppliedProduct.addPartOrigin(connector.FACETS.PARTORIGIN.PLANTPARTORIGIN.FRUIT);
```

To finish you can export the DFC object to JSON-LD with:
```JS
console.log(await connector.export(suppliedProduct, 2));
```

This will output DFC compliant valid JSON-LD:
```JS
{
  "@context": {
    "dfc-b": "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#"
  },
  "@id": "https://myplatform.com/tomato",
  "@type": "dfc-b:SuppliedProduct",
  "dfc-b:description": "Awesome tomato",
  "dfc-b:hasAllergenCharacteristic": [
    {
      "@type": "dfc-b:AllergenCharacteristic",
      "dfc-b:hasAllergenDimension": "dfc-m:Peanuts",
      "dfc-b:hasUnit": "dfc-m:Kilogram",
      "dfc-b:value": 1
    },
    {
      "@type": "dfc-b:AllergenCharacteristic",
      "dfc-b:hasAllergenDimension": "dfc-m:Mustard",
      "dfc-b:hasUnit": "dfc-m:Kilogram",
      "dfc-b:value": 23
    }
  ],
  "dfc-b:hasCertification": [
    "dfc-f:AOC_FR",
    "dfc-f:Organic-AB"
  ],
  "dfc-b:hasClaim": [
    "dfc-f:NoAddedSugars",
    "dfc-f:LowSodiumSalt"
  ],
  "dfc-b:hasGeographicalOrigin": "dfc-f:CentreValLoire",
  "dfc-b:hasNatureOrigin": "dfc-f:PlantOrigin",
  "dfc-b:hasNutrientCharacteristic": {
    "@type": "dfc-b:NutrientCharacteristic",
    "dfc-b:hasNutrientDimension": "dfc-m:Calcium",
    "dfc-b:hasUnit": "dfc-m:Gram",
    "dfc-b:value": 10
  },
  "dfc-b:hasPartOrigin": "dfc-f:Fruit",
  "dfc-b:hasPhysicalCharacteristic": {
    "@type": "dfc-b:PhysicalCharacteristic",
    "dfc-b:hasPhysicalDimension": "dfc-m:Weight",
    "dfc-b:hasUnit": "dfc-m:Gram",
    "dfc-b:value": 100
  },
  "dfc-b:hasQuantity": {
    "@type": "dfc-b:QuantitativeValue",
    "dfc-b:hasUnit": "dfc-m:Kilogram",
    "dfc-b:value": 1
  },
  "dfc-b:hasType": "http://static.datafoodconsortium.org/data/productTypes.rdf#round-tomato",
  "dfc-b:name": "Tomate",
  "dfc-b:referencedBy": []
}
```
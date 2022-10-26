import Connector from "./lib/Connector.js";

import facets from './test/thesaurus/facets.json' assert { type: 'json' };
import measures from './test/thesaurus/measures.json' assert { type: 'json' };
import productTypes from './test/thesaurus/productTypes.json' assert { type: 'json' };

const connector = Connector.getInstance();

connector.loadFacets(facets);
connector.loadMeasures(measures);
connector.loadProductTypes(productTypes);

global.connector = connector;

export default {
  transform: {},
  testEnvironment: "node",
};
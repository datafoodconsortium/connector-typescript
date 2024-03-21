import Address from './lib/Address.js';
import Connector from "./lib/Connector.js";

const connector = new Connector();

const address = new Address({
    connector: connector,
    semanticId: "http://myplatform.com/address/address1",
    street: "1, place or Europe",
    postalCode: "00001",
    city: "Brussels",
    country: "Belgium",
});

connector.export([address]).then((e) => console.log(e));

//console.log(address.toRdfDatasetExt());
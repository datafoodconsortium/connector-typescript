import Person from '../lib/Person.js';
import Address from '../lib/Address.js';
import Enterprise from '../lib/Enterprise.js';

const connector = global.connector;

const expected = `{"@context":{"dfc-b":"http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#"},"@id":"person/personId","@type":"dfc-b:Person","dfc-b:affiliates":"enterprise/enterprise1","dfc-b:familyName":"Doe","dfc-b:firstName":"John","dfc-b:hasAddress":"address/address1"}`;

test('serialize basic person', async () => {
    const address = new Address;
    address.setSemanticId("address/address1");
    address.setCountry("France");

    const enterprise = new Enterprise("enterpriseName");
    enterprise.setSemanticId("enterprise/enterprise1");

    const person = new Person;    
    person.setSemanticId("person/personId");
    person.setFirstName("John");
    person.setLastName("Doe");
    person.addLocalization(address);
    person.affiliateTo(enterprise);

    const serialized = await connector.export(person);
    expect(serialized).toStrictEqual(expected);
});
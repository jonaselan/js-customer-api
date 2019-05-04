const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function createIndex(index, { properties }) {
    let index_exist = await client.indices.exists({
        index
    });

    if (!index_exist.body) {
        await client.indices.create({
            index,
            include_type_name: false,
            body: {
                settings: { number_of_shards : 1 },
                mappings: {
                    properties: properties
                }
            }
        });
    }
}

async function deleteIndex(name) {
    await client.indices.delete({
        index: name
    });
}

async function createDocumentsToIndex(index, document) {
    await client.index({
        id: document.id,
        index,
        refresh: true,
        body: document
    });
}

async function elasticRange(index, field, gte, lte) {
    const { body } = await client.search({
        index,
        body: {
            query: {
                range: {
                    [field]: {
                        gte,
                        lte
                    }
                }
            }
        }
    });

    return body.hits.hits;
}

async function elasticSearchByField(index, field = 'id', value) {
    const { body } = await client.search({
        index,
        body: {
            query: {
                term: {
                    [field]: value
                }
            }
        }
    });

    return body.hits.hits;
}

async function elasticSearchByFieldAutocomplete(index, field = 'id', value) {
    const { body } = await client.search({
        index,
        body: {
            suggest: {
              "customer-suggest-fuzzy": {
                prefix: value,
                completion: {
                  field: "name.completion",
                  fuzzy: {
                    fuzziness: 1
                  }
                }
              }
            }
        }
    });

    return body.hits.hits;
}

module.exports = {
    createIndex,
    createDocumentsToIndex,
    deleteIndex,
    elasticSearchByField,
    elasticRange,
    elasticSearchByFieldAutocomplete,
};
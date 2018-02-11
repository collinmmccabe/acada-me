const mongo = require('mongodb');
const monk = require('monk');

const url = 'localhost:27017/acadame1';
const db = monk(url);

const proposals = db.get('proposals')
const newId = monk.id()

var proposalblob = "This is my proposal and it is very long.  It is approximately 5,000 characters.  Luckily, this is still under the maximum length for submitting to Azure text processing.  This is the tenth upload."

proposals.insert({proposal_id: newId, proposal_text: proposalblob})

proposals.find({proposal_id: newId}).then(function(data){console.log(data)})

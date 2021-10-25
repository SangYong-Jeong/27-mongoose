const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mmaduu:tkdals1069!@mmaduu.3sq6b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  console.log("몽고접근성공")
}, (err) => {
  console.log("몽고설정실패")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

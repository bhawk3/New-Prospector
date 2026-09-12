import {MongoClient, ServerApiVersion} from "mongodb"

const uri = process.env.ATLAS_URI;
if (!uri) {
    throw new Error("ATLAS_URI is missing. Make sure config.env is loaded before connecting to MongoDB.");
}

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    ///Connect the client to the server
    await client.connect();
    //Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
}
catch (err) {
    console.error(err);
}

let db = client.db("Leads")

export default db;
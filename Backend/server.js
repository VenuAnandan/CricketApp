const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 4000;

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());



app.get('/login', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const logincollection = db.collection("User-Login");
        const result = await logincollection.find({}).toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})


app.post('/createlogin', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const logincollection = db.collection("User-Login");
        let insertData = req.body;
        const result = await logincollection.insertOne(insertData);
        res.json("Successfully Created");
    } catch (error) {
        res.status(400).json(`Error is : ${error}`)
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})


app.get('/homeinfo', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const homecollection = db.collection("Home-MatchCoverage");
        let result = await homecollection.find({}).toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`)
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})


app.post('/addhomeinfo', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const homecollection = db.collection("Home-MatchCoverage");
        const insertData = req.body;
        const UniqId = `id_${Date.now()}`
        insertData["id"] = UniqId;
        const result = await homecollection.insertOne(insertData);
        res.json("Successfully Added");
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})



app.get('/playersinformation', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const playerscollection = db.collection("Team-Players");
        const result = await playerscollection.find({}).toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
});


app.post('/addplayerinfo', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const playerscollection = db.collection("Team-Players");
        const UniqID = `id_${Date.now()}`;
        let insertData = req.body;
        insertData["id"] = UniqID;
        const result = await playerscollection.insertOne(insertData);
        res.json("Successfully showed data!...");
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
});




app.get('/scoreInformations', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const scorecollection = db.collection("MatchInfo");
        const result = await scorecollection.find({}).toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})



app.post('/addscoreinfo', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const scorecollection = db.collection("MatchInfo");
        const UniqId = `id_${Date.now()}`;
        let insertData = req.body;
        insertData["id"] = UniqId;
        const result = await scorecollection.insertOne(insertData);
        res.json(`Added Successfully`);
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
});



app.get('/cric-rank', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const rankcollection = db.collection("Players-Rank");
        const result = await rankcollection.find({}).toArray();
        res.json(result);
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`)
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})


app.post('/add-cri-rank', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Cric-Score");
        const rankcollection = db.collection("Players-Rank");
        let insertData = req.body;
        const result = await rankcollection.insertOne(insertData);
        res.json("Successfully Created");
        await client.close();
    } catch (error) {
        res.status(400).json(`Error is : ${error}`)
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})

app.post('/subscriptionplan', async (req, res) => {
    try {
        let insertData = req.body;
        // await client.connect();
        // const db = client.db("Cric-Score");
        // const subscriptioncollection = db.collection("SubscriptionPlan");
        // const result = await subscriptioncollection.insertOne(insertData);
        // res.json(result);
        // await client.close();


        if (insertData.method === "getall") {
            await client.connect();
            const db = client.db("Cric-Score");
            const subscriptioncollection = db.collection("SubscriptionPlan");
            const plans = await subscriptioncollection.find({}).toArray();
            res.json(plans);
            await client.close();
        } else if (insertData.type === "month" && insertData.method === "get") {
            await client.connect();
            const db = client.db("Cric-Score");
            const subscriptioncollection = db.collection("SubscriptionPlan");
            const plans = await subscriptioncollection.find({}).toArray();
            const plan = plans.filter((pl) => pl.type === "month");
            res.json(plan);
            await client.close();
        } else if(insertData.type === "year" && insertData.method === "get") {
            await client.connect();
            const db = client.db("Cric-Score");
            const subscriptioncollection = db.collection("SubscriptionPlan");
            const plans = await subscriptioncollection.find({}).toArray();
            const plan = plans.filter((pl) => pl.type === "year");
            res.json(plan);
            await client.close();
        } else if(insertData.type === "group" && insertData.method === "get"){
            await client.connect();
            const db = client.db("Cric-Score");
            const subscriptioncollection = db.collection("SubscriptionPlan");
            const plans = await subscriptioncollection.find({}).toArray();
            const plan = plans.filter((pl) => pl.type === "group");
            res.json(plan);
            await client.close();
        }
    } catch (error) {
        res.status(400).json(`Error is : ${error}`);
    } finally {
        if (!client.close()) {
            await client.close();
        }
    }
})





app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

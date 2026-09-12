import dotenv from "dotenv";
dotenv.config({ path: "./server/config.env" });

import express from "express";
import cors from "cors";
// Import the routes after dotenv is configured to ensure any DB modules
// that read `process.env` see the loaded values.
const recordsModule = await import("./server/routes/record.js");
const records = recordsModule.default;

// Basic runtime validation of required env vars
const requiredEnv = ["ATLAS_URI"];
const missing = requiredEnv.filter((k) => !process.env[k]);
if (missing.length) {
    console.error(`Missing required env vars: ${missing.join(", ")}`);
    process.exit(1);
}

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/records", records);

//Start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
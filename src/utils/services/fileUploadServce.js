import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    try {
        const { data } = req.body;

        // Optional: Save the data in a JSON file
        const filePath = path.join(process.cwd(), "data.json");
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        // ✅ Future: Store in MongoDB or Firebase here
        res.status(200).json({ message: "Data uploaded successfully", data });
    } catch (error) {
        res.status(500).json({ error: "Failed to process file" });
    }
}

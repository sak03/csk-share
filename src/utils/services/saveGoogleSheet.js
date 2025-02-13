import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../google-credentials.json";  // Load service account JSON

const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    try {
        const doc = new GoogleSpreadsheet(SHEET_ID);
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        const { name, email, message } = req.body;
        await sheet.addRow({ Name: name, Email: email, Message: message });

        res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to submit form" });
    }
}

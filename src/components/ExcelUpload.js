import { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

export default function ExcelUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select a file!");

        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = async (e) => {
            const workbook = XLSX.read(e.target.result, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet);

            try {
                await axios.post("/api/upload", { data });  // Send to backend
                alert("File uploaded successfully!");
            } catch (error) {
                console.error("Upload failed", error);
            }
        };
    };

    return (
        <div className="p-4 border rounded-lg w-80">
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={handleUpload}>
                Upload
            </button>
        </div>
    );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function DataDisplay() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/api/data").then((res) => setData(res.data));
    }, []);

    return (
        <table className="border-collapse border border-gray-300 w-full">
            <thead>
                <tr>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Amount</th>
                    <th className="border p-2">Share Type</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td className="border p-2">{row.title}</td>
                        <td className="border p-2">{row.initialAmt}</td>
                        <td className="border p-2">{row.shareType}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

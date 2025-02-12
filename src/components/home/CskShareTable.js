"use client"
import React, { useState } from 'react';
import { fundamentalDatas } from "@/utils/datas/fundamentalsData"
import { shareholdingPatternsDatas } from '@/utils/datas/shareholdingPatternsData'
import { FaLinkedinIn } from "react-icons/fa";
import { incomeStatement, financialRatios, balanceSheetAssetsDatas, balanceSheetLiabilitiesDatas, cashFlowDatas } from '@/utils/datas/financialsData'
const CskShareTable = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='share-table-body'>
            <div className="w-[75%]">
                <h4 className='text-2xl font-bold my-3'>Fundamentals</h4>
                <div className='grid grid-cols-4 gap-4 text-left'>
                    {fundamentalDatas?.map((item) => {
                        return (
                            <div className='contents' key={item.id}>
                                <span className='py-1 font-medium'>{item.title}</span>
                                <span className='py-1 font-medium'>{item.initialAmt}</span>
                                <span className='py-1 font-medium'>{item.shareType}</span>
                                <span className='py-1 font-medium'>{item.finalAmt}</span>
                            </div>
                        )
                    })}
                </div>
                <h4 className='text-2xl my-5'><span className='font-bold'>Financials</span> <span className='text-gray-500'>(In Cr)</span></h4>
                <div className='tabs my-3'>
                    <span className={`tab-item${activeTab === 0 ? "-active" : ""}`} onClick={() => setActiveTab(0)}>Income Statement</span>
                    <span className={`tab-item${activeTab === 1 ? "-active" : ""}`} onClick={() => setActiveTab(1)}>Balance Sheet</span>
                    <span className={`tab-item${activeTab === 2 ? "-active" : ""}`} onClick={() => setActiveTab(2)}>Cash Flow</span>
                </div>
                {activeTab === 0 ? (
                    <>
                        <div className='border border-gray-300 p-3 rounded-xl'>
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="text-gray-400">
                                    <tr>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">P&L Statement</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2021</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2022</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2023</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2024</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {incomeStatement?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="border-y border-gray-300 px-4 py-3">{item.statement}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year1}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year2}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year3}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='border border-gray-300 p-3 rounded-xl mt-3'>
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="text-gray-400">
                                    <tr>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">Financial Ratios</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2021</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2022</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2023</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2024</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {financialRatios?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="border-y border-gray-300 px-4 py-3">{item.statement}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year1}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year2}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year3}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
                    : activeTab === 1 ? (
                        <>
                            <div className='border border-gray-300 p-3 rounded-xl'>
                                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                    <thead className="text-gray-400">
                                        <tr>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">Assets</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2021</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2022</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2023</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2024</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {balanceSheetAssetsDatas?.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="border-y border-gray-300 px-4 py-3">{item.assets}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year1}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year2}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year3}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year4}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='border border-gray-300 p-3 rounded-xl mt-3'>
                                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                    <thead className="text-gray-400">
                                        <tr>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">Liabilities</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2021</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2022</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2023</th>
                                            <th className="border-y border-gray-300 px-4 py-3 text-left">2024</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {balanceSheetLiabilitiesDatas?.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="border-y border-gray-300 px-4 py-3">{item.assets}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year1}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year2}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year3}</td>
                                                <td className="border-y border-gray-300 px-4 py-3">{item.year4}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>) :
                        <div className='border border-gray-300 p-3 rounded-xl'>
                            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="text-gray-400">
                                    <tr>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">Cash-Flow Statement</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2021</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2022</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2023</th>
                                        <th className="border-y border-gray-300 px-4 py-3 text-left">2024</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cashFlowDatas?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="border-y border-gray-300 px-4 py-3">{item.cashFlowStatement}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year1}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year2}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year3}</td>
                                            <td className="border-y border-gray-300 px-4 py-3">{item.year4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                }
                <h4 className='text-2xl font-bold my-5'>Shareholding Pattern</h4>
                <div className='border border-gray-300 p-3 rounded-xl'>
                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="text-gray-400">
                            <tr>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">Shareholding Pattern</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">2021</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">2022</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">2023</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">2024</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shareholdingPatternsDatas?.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border-y border-gray-300 px-4 py-3">{item.holdingPattern}</td>
                                    <td className="border-y border-gray-300 px-4 py-3">{item.year1}</td>
                                    <td className="border-y border-gray-300 px-4 py-3">{item.year2}</td>
                                    <td className="border-y border-gray-300 px-4 py-3">{item.year3}</td>
                                    <td className="border-y border-gray-300 px-4 py-3">{item.year4}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h4 className='text-2xl font-bold my-5'>Promoters or Management</h4>
                <div className='border border-gray-300 p-3 rounded-xl'>
                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="text-gray-400">
                            <tr>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">Name</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">Designation</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">Experience</th>
                                <th className="border-y border-gray-300 px-4 py-3 text-left">Linkedin Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="border-y border-gray-300 px-4 py-3">N. Srinivasan</td>
                                <td className="border-y border-gray-300 px-4 py-3">Chairman</td>
                                <td className="border-y border-gray-300 px-4 py-3">30 yrs</td>
                                <td className="border-y border-gray-300 px-4 py-3">
                                    <a href='https://www.linkedin.com/in/n-srinivasan-8142763a/' target='_blank' className='text-blue-600 ustify-self-center'><FaLinkedinIn /></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CskShareTable
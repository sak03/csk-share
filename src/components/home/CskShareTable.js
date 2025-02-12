"use client"
import React, { useState } from 'react';
import { fundamentalDatas } from "@/utils/datas/fundamentalsData"
import { shareholdingPatternsDatas } from '@/utils/datas/shareholdingPatternsData'
import { FaLinkedinIn } from "react-icons/fa";
import { incomeStatement, financialRatios, balanceSheetAssetsDatas, balanceSheetLiabilitiesDatas, cashFlowDatas } from '@/utils/datas/financialsData'
const CskShareTable = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className='share-table-body'>
            <div className="table-body-with">
                <h4 className='text-2xl font-bold my-3'>Fundamentals</h4>
                <div className='fundamentals'>
                    <div className='fundamentals-section'>
                        {fundamentalDatas?.map((item) => {
                            return (
                                <div className='fundamentals-contents' key={item.id}>
                                    <strong className='py-1 w-1/2 font-medium'>{item.title}</strong>
                                    <span className='py-1 w-1/2 font-medium'>{item.initialAmt}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className='fundamentals-section'>
                        {fundamentalDatas?.map((item) => {
                            return (
                                <div className='fundamentals-contents' key={item.id}>
                                    <strong className='py-1 w-1/2 font-medium'>{item.shareType}</strong>
                                    <span className='py-1 w-1/2 font-medium'>{item.finalAmt}</span>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                <h4 className='text-2xl my-5'><span className='font-bold'>Financials</span> <span className='text-gray-500'>(In Cr)</span></h4>
                <div className='table-tabview'>
                    <span className={`table-tabitem${activeTab === 0 ? "-active" : ""}`} onClick={() => setActiveTab(0)}>Income Statement</span>
                    <span className={`table-tabitem${activeTab === 1 ? "-active" : ""}`} onClick={() => setActiveTab(1)}>Balance Sheet</span>
                    <span className={`table-tabitem${activeTab === 2 ? "-active" : ""}`} onClick={() => setActiveTab(2)}>Cash Flow</span>
                </div>
                {activeTab === 0 ? (
                    <>
                        <div className='financial-table'>
                            <table className="w-full">
                                <thead className="text-gray-400">
                                    <tr>
                                        <th className='text-left'>P&L Statement</th>
                                        <th>2021</th>
                                        <th>2022</th>
                                        <th>2023</th>
                                        <th>2024</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {incomeStatement?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td>{item.statement}</td>
                                            <td>{item.year1}</td>
                                            <td>{item.year2}</td>
                                            <td>{item.year3}</td>
                                            <td>{item.year4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='financial-table'>
                            <table className="w-full">
                                <thead className="text-gray-400">
                                    <tr>
                                        <th className='text-left'>Financial Ratios</th>
                                        <th >2021</th>
                                        <th >2022</th>
                                        <th >2023</th>
                                        <th >2024</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {financialRatios?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td>{item.statement}</td>
                                            <td>{item.year1}</td>
                                            <td>{item.year2}</td>
                                            <td>{item.year3}</td>
                                            <td>{item.year4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
                    : activeTab === 1 ? (
                        <>
                            <div className='financial-table'>
                                <table className="w-full">
                                    <thead className="text-gray-400">
                                        <tr>
                                            <th className="text-left">Assets</th>
                                            <th>2021</th>
                                            <th>2022</th>
                                            <th>2023</th>
                                            <th>2024</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {balanceSheetAssetsDatas?.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td>{item.assets}</td>
                                                <td>{item.year1}</td>
                                                <td>{item.year2}</td>
                                                <td>{item.year3}</td>
                                                <td>{item.year4}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='financial-table'>
                                <table className="w-full">
                                    <thead className="text-gray-400">
                                        <tr>
                                            <th className="text-left">Liabilities</th>
                                            <th>2021</th>
                                            <th>2022</th>
                                            <th>2023</th>
                                            <th>2024</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {balanceSheetLiabilitiesDatas?.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td>{item.assets}</td>
                                                <td>{item.year1}</td>
                                                <td>{item.year2}</td>
                                                <td>{item.year3}</td>
                                                <td>{item.year4}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>) :
                        <div className='financial-table'>
                            <table className="w-full">
                                <thead className="text-gray-400">
                                    <tr>
                                        <th className="text-left">Cash-Flow Statement</th>
                                        <th>2021</th>
                                        <th>2022</th>
                                        <th>2023</th>
                                        <th>2024</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cashFlowDatas?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td>{item.cashFlowStatement}</td>
                                            <td>{item.year1}</td>
                                            <td>{item.year2}</td>
                                            <td>{item.year3}</td>
                                            <td>{item.year4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                }
                <h4 className='text-2xl font-bold my-5'>Shareholding Pattern</h4>
                <div className='financial-table'>
                    <table className="w-full">
                        <thead className="text-gray-400">
                            <tr>
                                <th className="text-left">Shareholding Pattern</th>
                                <th>2021</th>
                                <th>2022</th>
                                <th>2023</th>
                                <th>2024</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shareholdingPatternsDatas?.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td>{item.holdingPattern}</td>
                                    <td>{item.year1}</td>
                                    <td>{item.year2}</td>
                                    <td>{item.year3}</td>
                                    <td>{item.year4}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h4 className='text-2xl font-bold my-5'>Promoters or Management</h4>
                <div className='financial-table'>
                    <table className="w-full">
                        <thead className="text-gray-400">
                            <tr>
                                <th className="text-left">Name</th>
                                <th>Designation</th>
                                <th>Experience</th>
                                <th>Linkedin Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td>N. Srinivasan</td>
                                <td>Chairman</td>
                                <td>30 yrs</td>
                                <td className="text-center">
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
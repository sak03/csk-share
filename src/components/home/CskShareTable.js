"use client"
import React from 'react';
import { fundamentalDatas } from "@/utils/datas/fundamentalsData"
import { shareholdingPatternsDatas } from '@/utils/datas/shareholdingPatternsData'

const CskShareTable = () => {
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

            </div>
        </div>
    )
}

export default CskShareTable
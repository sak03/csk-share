"use client"
import React, { useState } from 'react'

const CskShare = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [selectedCode, setSelectedCode] = useState("+91");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [quantity, setQuantity] = useState();
    const [message, setMessage] = useState('')
    const countries = [
        { code: "+91", name: "🇮🇳" },
        { code: "+1", name: "🇺🇸" },
        { code: "+44", name: "🇬🇧" },
        { code: "+61", name: "🇦🇺" },
    ];
    return (
        <div className='share-section shre-padding'>
            <div className='share-section1'>
                <img src='https://cdn.prod.website-files.com/66dad9c594a45d74898a5fc6/66e9a5d287ad4d164a1788ae_70521baac89be4d4cb2f223bbf67c974%20(1).avif' alt='csk-image' width={100} />
                <h4>Chennai Super Kings (CSK) Share Price</h4>
                <div><span>₹ 188</span> <span>-30</span> <span>-13.8%</span> <span>4M</span></div>
            </div>
            <div className='share-section2 px-3'>
                <div className='border rounded p-5'>
                    <div className='tabs'>
                        <span className={`tab-item${activeTab === 0 ? "-active" : ""}`} onClick={() => setActiveTab(0)}>Buy</span>
                        <span className={`tab-item${activeTab === 1 ? "-active" : ""}`} onClick={() => setActiveTab(1)}>Sell</span>
                    </div>
                    <div className='mt-3'>
                        <h4 className='text-xl'>Chennai Super Kings (CSK) Shares</h4>
                        <p className='my-3'>{activeTab === 0 ? "₹ 188" : "* Best In Industry"}</p>
                    </div>
                    <div className=''>
                        <input
                            id='name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='name'
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                        <input
                            id='email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            className="w-full my-3 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>
                    <div className=" flex w-full max-w-sm border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                        {/* Country Code Dropdown */}
                        <select
                            className="w-24 bg-gray-100 px-3 py-2 border-r outline-none text-gray-700"
                            value={selectedCode}
                            onChange={(e) => setSelectedCode(e.target.value)}
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name} {country.code}
                                </option>
                            ))}
                        </select>

                        {/* Mobile Number Input */}
                        <input
                            type="tel"
                            placeholder="Enter mobile number"
                            className="w-full px-4 py-2 text-gray-700 bg-white outline-none"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        <input
                            id='quantity'
                            type='number'
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder='Quantity'
                            className="my-3 w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Message"
                            rows="4"
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                        />
                    </div>
                    <div className=''>
                        <button type='button' className='w-full px-4 py-2 my-3 rounded-full text-white dark-bg'>{activeTab === 0 ? "Buy" : "Sell"}</button>
                        <button type='button' className='w-full px-4 py-2 rounded-full border border-green-600 hover:bg-green-700 hover:text-white'>Get Connected Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CskShare
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
    const [seeAllText, setSeeAllText] = useState(false)
    const countries = [
        { code: "+91", name: "🇮🇳" },
        { code: "+1", name: "🇺🇸" },
        { code: "+44", name: "🇬🇧" },
        { code: "+61", name: "🇦🇺" },
    ];
    return (
        <div className='share-section shre-padding'>
            <div className='share-section1 p-3'>
                <img src='https://cdn.prod.website-files.com/66dad9c594a45d74898a5fc6/66e9a5d287ad4d164a1788ae_70521baac89be4d4cb2f223bbf67c974%20(1).avif' alt='csk-image' width={100} />
                <h4 className='text-2xl font-bold my-3'>Chennai Super Kings (CSK) Share Price</h4>
                <div><span className='text-2xl'>₹ 188</span> <span className='text-danger text-lg my-2 mx-3'>-30</span> <span className='text-danger text-lg my-2'>-13.8%</span> <span className='text-secondary text-lg my-2 mx-3'>4M</span></div>
                <div className='p-5 border my-5'>
                    Chart UI
                </div>
                <div className=''>
                    <h4 className='text-xl font-semibold my-5'>About Share</h4>
                    <p className='text-lg font-semibold text-secondary'>Chennai Super Kings (CSK) Unlisted Shares – Complete Guide to Buy, Sell & Price Updates</p>
                    <p className='mt-3'>Chennai Super Kings (CSK) is one of the most iconic and successful franchises in the Indian Premier League (IPL). With a loyal fanbase, consistent high performance, and powerful leadership, CSK has established itself as a dominant force in the IPL. Along with its massive fan following, CSK has also become a highly lucrative brand, attracting the interest of investors in the unlisted share market.</p>
                    <p className='mt-3' >In this comprehensive guide, we will provide insights into Chennai Super Kings unlisted shares, including the latest Chennai Super Kings share price, how to buy and sell these unlisted shares, and why investing in CSK unlisted shares can be a great financial opportunity. Additionally, we will explore the performance and growth factors that influence the Chennai Super Kings unlisted share price and what makes it a valuable investment.</p>
                    <button 
                    className='w-full px-4 py-2 rounded-full border border-green-600 my-3 hover:bg-green-400 hover:text-white'
                        onClick={() => setSeeAllText(!seeAllText)}
                    >{seeAllText ? "Read Less" : "Read More"}</button>
                </div>
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
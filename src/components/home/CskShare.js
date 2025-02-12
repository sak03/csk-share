"use client"
import React, { useState } from 'react'
import MoreAboutShare from './MoreAboutShare';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { countryList } from '@/utils/datas/formData'

const CskShare = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [selectedCountry, setSelectedCountry] = useState(countryList[37]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [quantity, setQuantity] = useState();
    const [message, setMessage] = useState('')
    const [seeAllText, setSeeAllText] = useState(false)
    const data = [
        { name: "Oct", value: 218 },
        { name: "Nov", value: 210 },
        { name: "Dec", value: 196 },
        { name: "Jan", value: 187 },
    ];
    const handleChange = (event) => {
        const selectedCode = event.target.value;
        const country = countryList.find((c) => c.code === selectedCode);
        setSelectedCountry(country);
    };

    return (
        <div className='share-section shre-padding'>
            <div className='share-section1 p-3'>
                <img src='https://cdn.prod.website-files.com/66dad9c594a45d74898a5fc6/66e9a5d287ad4d164a1788ae_70521baac89be4d4cb2f223bbf67c974%20(1).avif' alt='csk-image' width={100} className='rounded-lg' />
                <h4 className='text-2xl font-bold my-3'>Chennai Super Kings (CSK) Share Price</h4>
                <div><span className='text-2xl'>₹ 188</span> <span className='text-danger text-lg my-2 mx-3'>-30</span> <span className='text-danger text-lg my-2'>-13.8%</span> <span className='text-secondary text-lg my-2 mx-3'>4M</span></div>
                <div className='my-5'>
                    <div className="w-full h-80 p-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis domain={[185, 220]} tickCount={8} interval={0} />
                                {/* <YAxis /> */}
                                <Tooltip />
                                <Legend />
                                <Line type="linear" dataKey="value" stroke="#35c759" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className=''>
                    <h4 className='text-xl font-semibold my-5'>About Share</h4>
                    <h6 className='text-lg font-semibold text-secondary'>Chennai Super Kings (CSK) Unlisted Shares – Complete Guide to Buy, Sell & Price Updates</h6>
                    <p className='mt-3'>Chennai Super Kings (CSK) is one of the most iconic and successful franchises in the Indian Premier League (IPL). With a loyal fanbase, consistent high performance, and powerful leadership, CSK has established itself as a dominant force in the IPL. Along with its massive fan following, CSK has also become a highly lucrative brand, attracting the interest of investors in the unlisted share market.</p>
                    <p className='mt-3' >In this comprehensive guide, we will provide insights into Chennai Super Kings unlisted shares, including the latest Chennai Super Kings share price, how to buy and sell these unlisted shares, and why investing in CSK unlisted shares can be a great financial opportunity. Additionally, we will explore the performance and growth factors that influence the Chennai Super Kings unlisted share price and what makes it a valuable investment.</p>
                    {seeAllText ? <MoreAboutShare /> : ""}
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
                            value={selectedCountry.code}
                            onChange={handleChange}
                        >
                            {countryList.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.flag} {country.code}
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
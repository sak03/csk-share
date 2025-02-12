"use client"
import React, { useState } from 'react'
import { faqDatas } from '@/utils/datas/faqsdata';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
 
const Faqs = () => {
    const [selectedFaq, setSelectedFaq] = useState(null)
    return (
        <div className='faq-body'>
            <div className='flex justify-center'>
                <h1 className='text-4xl font-bold'>FAQ's</h1>
            </div>
            <div>
                <div className='mt-5'>
                    {faqDatas?.map((item) => {
                        return (
                            <div key={item.id} className='py-2'>
                                <div className='flex justify-between w-full pointer p-3 text-lg'
                                    onClick={() => {
                                        if (selectedFaq?.id === item?.id) {
                                            setSelectedFaq(null)
                                        } else {
                                            setSelectedFaq(item);
                                        }
                                    }}
                                >
                                    <strong className='w-5/6'>{item.question}</strong>
                                    <span className='w-1/5 flex justify-end'>{selectedFaq?.id === item?.id ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                                </div>
                                {selectedFaq?.id === item?.id ?
                                    <div className='p-3 text-lg text=secondary'>
                                        <p>{item.answer}</p>
                                    </div> : ""}
                                {item?.isLast ? "" : <div className='footer-line'></div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faqs
"use client"
import React, { useState } from 'react'
import { faqDatas } from '@/utils/datas/faqsdata';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Faqs = () => {
    const [selectedFaq, setSelectedFaq] = useState(null)
  return (
    <div>
        <div>
        <h1 className='text-3xl'>FAQ's</h1>
          </div>
          <div>
              {faqDatas?.map((item)=>{
                return(
                    <div key={item.id}>
                        <div className='flex justify-between pointer' onClick={() => setSelectedFaq(item)}>
                            <strong>{item.question}</strong>
                            <span>{selectedFaq?.id === item?.id ? <FiMinusCircle /> : <FiPlusCircle/>}</span>
                        </div>
                        {selectedFaq?.id === item?.id ?  <div>
                            <small>{item.answer}</small>
                        </div> : ""}
                        {item?.isLast  ? "" : <div className='footer-line'></div>}
                    </div>
                )
              })}
          </div>
    </div>
  )
}

export default Faqs
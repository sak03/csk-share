"use client"
import React from 'react';
import { fundamentalDatas } from "@/utils/datas/fundamentalsData"

const CskShareTable = () => {
  return (
      <div className='share-table-body'>
          <h4 className='text-2xl font-bold my-3'>Fundamentals</h4>
          <div className="w-[75%]">
          <div className='grid grid-cols-4 gap-4 text-left'>
              {fundamentalDatas?.map((item)=>{
                return(
                    <div className='contents' key={item.id}>
                        <span className='py-1 font-medium'>{item.title}</span>
                        <span className='py-1 font-medium'>{item.initialAmt}</span>
                        <span className='py-1 font-medium'>{item.shareType}</span>
                        <span className='py-1 font-medium'>{item.finalAmt}</span>
                    </div>
                )
              })}
          </div>
          </div>
      </div>
  )
}

export default CskShareTable
import React from 'react'
import { workData } from "@/utils/datas/workExpData";
import { FiChevronsRight } from "react-icons/fi";
import Link from 'next/link';

const HomeWorkExp = () => {
    console.log("workData", workData)
    return (
        <div className='work-body'>
            <div className='flex justify-between'>
                <h5 className='work-title'>WORK EXPERIENCES</h5>
                <Link href={'work-experience'} >
                    <span className='text-black flex pointer'><u>See All</u><FiChevronsRight className='my-0 text-2xl' /></span>
                </Link>
            </div>
            <h3 className='work-subtitle'>Companies I worked for</h3>
            <div className='work-card-body'>
                {workData?.map((item) => (
                    <div className='work-card' key={item.id}>
                        <h1 className='exp-count my-0'>{item.num}</h1>
                        <h3 className='exp-title'>{item.companyName}</h3>
                        <p className='text-black'><small>{item.location}</small>  <small>{`${item.stDate} - ${item.endDate}`}</small></p>
                        <p className='text-black'>{item.shortDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeWorkExp
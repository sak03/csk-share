import React from 'react'
import { blogDatas } from '@/utils/datas/blogsData'
import Image from 'next/image'

const OurHomeBlogs = () => {
    return (
        <div className='home-blog-body'>
            <div className='flex justify-center'>
                <h1 className='text-4xl font-bold'>Our Blogs</h1>
            </div>
            <div className='my-5'>
                <p>Our blog provides insightful information about unlisted shares, offering a deeper understanding of how these assets work, their potential benefits, and the risks involved. Whether you're new to unlisted shares or looking to expand your knowledge, we cover topics such as investment strategies, valuation methods, market trends, and regulatory aspects. Stay updated with expert tips and guides to navigate the unlisted share market effectively.</p>
            </div>
            <div className='flex w-full my-3'>
                {blogDatas?.map((item) => {
                    return (
                        <div key={item.id} className='w-1/3 p-3'>
                            <Image 
                            src={item.imgUrl} 
                            alt='blog' 
                            width={200} 
                            height={200} 
                                className='w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105'
                            />
                            <h6 className='text-lg font-bold my-2'>{item.title}</h6>
                            <p>{item.desp1.length > 250 ? item.desp1.slice(0, 250) : item.desp1 }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurHomeBlogs
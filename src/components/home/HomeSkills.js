import React from 'react'
import { frontEndSkills } from '@/utils/datas/skillData'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi'

const HomeSkills = () => {
    return (
        <div className='home-skill-body'>

            <div className='flex justify-between'>
                <h5 className='home-skill-title'>SKILLS</h5>
                <Link href={'skills'} >
                    <span className='text-black flex pointer'><u>See All</u><FiChevronsRight className='my-0 text-2xl' /></span>
                </Link>
            </div>
            <h3 className='home-skill-subtitle'>I'm Proficient In</h3>
            <div className='home-skill-card-body'>
                {frontEndSkills?.map((item) => (
                    <div className='home-skill-card' key={item.id}>
                        <Image src={item.smallImgUrl} alt={item.name} width={125} height={80} />
                        <h3 className='home-skill-title'>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeSkills
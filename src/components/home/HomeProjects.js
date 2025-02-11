'use client'
import React from 'react'
import { personalProjectsData } from '@/utils/datas/projectsData'
import Image from 'next/image'
import imgVal from '../../assets/projects/personal/tictactoe.png'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi'

const HomeProjects = () => {
  
  return (
    <div className='home-project-body'>

      <div className='flex justify-between'>
        <h5 className='home-project-title'>PROJECTS</h5>
        <Link href={'projects'} >
          <span className='text-black flex pointer'><u>See All</u><FiChevronsRight className='my-0 text-2xl' /></span>
        </Link>
      </div>
      <h3 className='home-project-subtitle'>My Free Time Projects</h3>
      <div className='home-project-card-body'>
        {personalProjectsData?.map((item) => (
          <div className='work-card' key={item.id}>
            <Image src={item.imgUrl} alt={item.name} width={300} height={250}/>
            <h3 className='exp-title'>{item.name}</h3>
            <p className='text-black'><small>{item.location}</small>  <small>{`${item.stDate} - ${item.endDate}`}</small></p>
            <p className='text-black'>{item.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeProjects
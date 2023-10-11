"use client"

import React from 'react'
import { CustomeButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find , book, or rent a car -- quickly and easily!
            </h1>
            <p className='hero__subtitle'>
                Streamline your car reantal experience with our effortless booking process.
            </p>
            <CustomeButton
            title="Explore Cacrs"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero
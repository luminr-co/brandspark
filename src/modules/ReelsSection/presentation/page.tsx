import React from 'react'
import { ReelsList } from './components/ReelsList'
import { ReelEntity } from '@/core/domain/entities/ReelEntity'

export default function ReelsSection() {

    const reels: ReelEntity[] = [
        {
            video: '/assets/video1.mp4'
        },
        {
            video: '/assets/video1.mp4'
        },
        {
            video: '/assets/video1.mp4'
        },
        {
            video: '/assets/video1.mp4'
        },

    ]

  return (
    <div className='mt-36 lg:mt-60 xl:mt-60 2xl:mt-60'>
        <ReelsList reels={reels}/>
    </div>
  )
}

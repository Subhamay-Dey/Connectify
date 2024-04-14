'use client'

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import { error } from 'console';
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {

  const [ isMiccamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if(!call) {
    throw new Error('useCall must be used within StreamCall component')
  }

useEffect(() => {
  
  if(isMiccamToggledOn) {
    call?.camera.disable();
    call?.microphone.disable();
  }
  else{
    call?.camera.enable();
    call?.microphone.enable();
  }

}, [isMiccamToggledOn, call?.camera, call?.microphone])


  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview/>
      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input 
            type='checkbox'
            checked={isMiccamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings/>
      </div>
    </div>
  )
}

export default MeetingSetup
'use client'

import React,{ useState }  from 'react'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';
import { useGetCallById } from '../../../../../hooks/usegetCallById';
import Loader from '@/components/Loader';

const Meeting = ({params: {id}} : {params : {id: string}}) => {

  const { user, isLoaded} = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const {call, isCallLoading} = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup />
        ) : (
          <MeetingRoom />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
'use client'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { SignInButton, SignedOut } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'
import Loader from './Loader'
import ActiveCollaborators from './ActiveCollaborators'



const CollaborativeRoom = ({ roomId, roomMetadata } : CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<Loader/>}>
            <div className='collaborative-room'>
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>Share</p>
                </div>
                <div className='flex w-full flex-1 justify-end gap-2 sm:gap-2'>
                    <ActiveCollaborators/>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </Header>
            <Editor/>
            </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom
'use client'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { SignInButton, SignedOut } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'
import Loader from './Loader'


type Props = {}

const CollaborativeRoom = (props: Props) => {
  return (
    <RoomProvider id='my-room'>
        <ClientSideSuspense fallback={<Loader/>}>
            <div className='collaborative-room'>
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                <p className='document-title'>Share</p>
                </div>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </Header>
            <Editor/>
            </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom
"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "./components/Loader";
import { getClerkUsers } from "./lib/actions/user.actions";
type Props = {
    children: ReactNode;
}

const Provider = ({children}: Props) => {
  return (
    <LiveblocksProvider 
      resolveUsers={async ( {userIds} ) => {
        const users = await getClerkUsers({userIds});
        return users;
      }}

      authEndpoint="/api/liveblocks-auth">
    {/* <RoomProvider id="my-room"> */}
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
    {/* </RoomProvider> */}
  </LiveblocksProvider>
  )
}

export default Provider
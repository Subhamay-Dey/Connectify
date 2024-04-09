"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

const tokenProvider = async () => {
    const user = await currentUser();

    if(!user) throw new Error('User is not logged in');
    if(!apiKey) throw new Error ('No API KEY');
    if(!apiSecret) throw new Error('No API Secret');

    const client = new StreamClient(apiKey, apiSecret) 
}
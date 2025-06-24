import React from 'react'

export default async function ProfilePag({params}){
  const {userId} = await params;

  return (
    <div>Hi! I am User {userId}</div>
  )
}


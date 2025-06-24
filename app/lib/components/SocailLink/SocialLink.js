"use client";

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const SocialLink = () => {

const [count, setCount] = useState(0);
const router = useRouter();

// const socialLinks = {
//     facebook: 'https://www.facebook.com',
//     instagram: 'https://www.instagram.com',
//     twitter: '/users',
//     linkedin: 'https://www.linkedin.com',
//     github: 'https://www.github.com',
//     youtube: 'https://www.youtube.com',
//     whatsapp: 'https://www.whatsapp.com',
// }



useEffect(() => {
  const timer = setInterval(() => {
    setCount((prevCount) => {
      if (prevCount === 5) {
        router.push("/users");
        clearInterval(timer); // stop the timer
        return prevCount;
      }
      return prevCount + 1;
    });
  }, 1000);

  // Clear interval on unmount
  return () => clearInterval(timer);
}, []);


  return (
  <>
  <div className='flex gap-4'>
  {/* {
    Object.keys(socialLinks)?.map((link) => {
        return (
      
//             <div className='gap-4 cursor-pointer' key={link} onClick={() => handleRedirect(socialLinks[link])}>
// {link}
//             </div>
        )
    })
  } */}

            Delay: {count}

</div>
  </>
  )
}

export default SocialLink
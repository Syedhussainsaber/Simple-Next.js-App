import Image from "next/image";
import Link from "next/link";
import SocialLink from "./lib/components/SocailLink/SocialLink";


export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   Home Page

<div className="p-4 flex gap-8 w-full">
<Link href="/"> Home </Link>
<Link  href="/about">About</Link>
</div>
        My First Next App
<Image src={"/next.svg"} alt="Next logo" width={500} height={500} />


<SocialLink/>
    </div>
  );
}

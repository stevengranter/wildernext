import { Metadata } from 'next'
import Image from 'next/image'

import logo from '/images/logo.png'

export const metadata: Metadata = {
    title: 'Home | WilderNest',
}

export default function Home() {
    return (
        <Image
            src={logo}
            className="w-1/2 object-center mt-10 drop-shadow-xl"
            alt="WilderNest Logo"
            priority={false}
        />
    )
}

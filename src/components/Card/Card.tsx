import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import imagePlaceholder from 'images/canada-geese.jpg'

type CardProps = {
    flipped?: boolean
    title?: string
    // children?: React.ReactNode
}

type Props = PropsWithChildren<CardProps>

export function Card({ flipped = false, title = 'Title', children }: Props) {
    const imageClass = clsx('rounded-t-lg aspect-square object-cover', {
        'blur-sm': flipped,
    })
    return (
        <div>
            <div className="max-w-sm rounded-lg shadow-sm dark:bg-gray-800">
                <a href="#">
                    <Image
                        className={imageClass}
                        src={imagePlaceholder}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    {children}
                </div>
            </div>
        </div>
    )
}

import { PropsWithChildren } from 'react'

type CardProps = {
    flipped?: boolean
    title?: string
    // children?: React.ReactNode
}

type Props = PropsWithChildren<CardProps>

export function Card({ flipped = false, title = 'Title', children }: Props) {
    return (
        <div>
            <div className="rounded-md shadow-md p-3 m-3 bg-amber-50">
                <div>{!flipped ? 'Front' : 'Back'}</div>
                {title && <span className="font-bold ">{title}</span>}
                {children}
            </div>
        </div>
    )
}

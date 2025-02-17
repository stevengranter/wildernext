export interface CardProps {
    flipped?: boolean
    label: string
}

export function Card({ flipped = false, label, ...props }: CardProps) {
    return (
        <div {...props}>
            Card
            <div className="bg-amber-50 text-amber-950 dark:bg-amber-700 dark:text-white font-extrabold text-sm leading-tight">
                <div className="text-red-500">Flipped: {flipped}</div>
                <div>Label: {label}</div>
                <h1 className="m-10">Hi There</h1>
            </div>
        </div>
    )
}

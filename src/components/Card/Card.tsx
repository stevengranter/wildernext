export interface CardProps {
    flipped?: boolean
    label: string
}

export function Card({ flipped = false, label, ...props }: CardProps) {
    return (
        <div {...props}>
            Card
            <div>
                Flipped: {flipped}
                <div>Label: {label}</div>
            </div>
        </div>
    )
}

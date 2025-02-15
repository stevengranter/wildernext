


export function Card({flipped,label}:{flipped:boolean,label:string}    ) {
    return(
        <div>
        Card
        <div>Flipped: {flipped}
            <div>Label: {label}</div>
        </div>
    </div>
    )
}
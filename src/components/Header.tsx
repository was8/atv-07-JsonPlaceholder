type Props={
    title?: string //prop nao obrigatoria
}

export const Header = ({title}: Props) =>{
    return(
        <header>
            <h1>{title}</h1>
            <hr />
        </header>
    )
}
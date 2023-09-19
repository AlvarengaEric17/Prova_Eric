function Caregoria(props){
    return(
        <div>
             <p>Fonte: {props.fonte}</p>
             <p>Categoria: {props.categoria}</p>
             <p>Data: {props.data}</p>
        </div>
    )
}

export default Caregoria;
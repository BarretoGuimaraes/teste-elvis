import './Listasuspensa.css'

const listasuspensa = (props) => {
    console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{ props.label}</label>
            <select>
                {props.itens.map( item =>{
                    return <option key={item}>{item} </option>
                })}
            </select>
        </div>
    )
}

 export default listasuspensa
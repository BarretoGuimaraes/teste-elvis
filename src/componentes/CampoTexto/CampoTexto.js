import './CampoTexto.css'

const CampoTexto = (props) => {

    let valor = ""

    const aoDigitar = (evento) => {
        valor = evento.target.value
        console.log(valor)

    }
    
    return (
        <div>
        
            <div className='caixa-resposta'>
                <label>{props.label}</label>
                <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder = {props.placeholder}/>
            </div>
        </div>
    )
}

export default CampoTexto
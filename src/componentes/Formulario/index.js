import CampoTexto from "../CampoTexto/CampoTexto"
import Listasuspensa from "../Listasuspensa/idex"
import Botaoenviar from "../Botaoenviar"
import "./Formulario.css"

const Formulario = () => {
    const times = [
        'vionilistas',
        'voz baixo',
        'voz tenor',
        'violao',
    ]
    const aoSalvar =(evento) =>{
        evento.preventDefault()
        console.log ("Form foi subimetido")
    }
    return (
        <div className="tela-fundo">
            <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h1 className="chamaform">
                    Venha ter a melhor experiencia da sua vida com o Rei.
                </h1>
                <CampoTexto obrigatorio= {true} label="Nome" placeholder="digite seu nome" />
                <CampoTexto obrigatorio= {true} label="Dia e Mes" placeholder="digite o Mes de visita" />
                <CampoTexto label="imagem" placeholder="digite o endereço de imagem" />
                <Listasuspensa label= "Time" itens={times}/>
                <Botaoenviar texto="Criar card"/>
            </form>
        </section>
        </div>
        
    )
}

export default Formulario
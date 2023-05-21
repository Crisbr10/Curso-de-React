import React,{Component} from "react"
import EstadoUsuario from './Estado';

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          conectado: false,
        };
      }
    
      cambiarEstado = () => {
        this.setState((prevState) => ({
          conectado: !prevState.conectado,
        }));
      };
    render(){
        return(
            <section>
             <h1>
                {this.props.nombre +" "+ this.props.apellido} <br/>
                <i>{this.props.email}</i>
             </h1>
             <EstadoUsuario
                estadoU={this.state.conectado}
             />
              <button onClick={this.cambiarEstado}>Cambiar Estado</button>
            </section>
        )
    }
        
    
}

export default Contacto
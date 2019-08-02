import React from 'react';

import Botao from '../Botao/Botao';

import './Contador.css';

class Contador extends React.Component {
    state= {
        contador: 20

    }

    //() => {} //aero function -> usada para substituir function(){ this.state.contador}
    //target -> responsavel por acessar o botão que você esta usando.

    aumentar = () => {
        let novoContador = this.state.contador;
        novoContador++;
        this.setState({ contador: novoContador});
    }
    diminuir = () => {
        let lessContador = this.state.contador;
        lessContador--;
        this.setState({ contador: lessContador});
    }
    zerar = () => {
        this.setState({ contador: 0});
    }

    render(){
        return(
            <div>
           <h1>O valor do contador é: { this.state.contador}</h1>
           {/* <button className="aumentar" onClick={this.aumentar}>Aumentar</button>
           <button className="diminuir" onClick={this.diminuir}>Diminuir</button>
           <button className="zerar" onClick={this.zerar}>Zerar</button> */}
           <Botao 
           classe="aumentar"
           aoClicar={this.aumentar}
           titulo="Aumentar"
           />
           <Botao 
           classe="diminuir"
           aoClicar={this.diminuir}
           titulo="Diminuir"
           />
           <Botao 
           classe="zerar"
           aoClicar={this.zerar}
           titulo="Zerar"
           />
           </div>
        );
    }
}

export default Contador;
import React from 'react';

class Botao extends React.Component{
    render(){
        return (
            <button className={this.props.classe} onClick={this.props.aoClicar}>
            {this.props.titulo}
            </button>
        );
    }
}

export default Botao;
import React, {useState} from "react";
import iconDel from './assets/btnDel.svg';
import iconAdd from './assets/btnAdd.svg';
import './Lista.css';


function Lista(){

    //Estado inicial da lista, um array zerado. 
    const [lista, setLista] = useState([]);

    //Pegará o valor digitado, vai colocar na lista e vai limpar esse campo
    const [novoItem, setNovoItem] = useState([]);


    function adicionaItem(form){
        form.preventDefault();//Para não ser disparado o form, para não atualizar a página
        if(!novoItem){ //Se está vazio, vai ter um return para não acontecer nada    
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();

    }

    return(
        <div id="form">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                    type="text" 
                    value={novoItem}
                    onChange={ (a) => { setNovoItem (a.target.value)}}
                    id="input-entrada"
                />
                <button className="btnAdd"><img src={iconAdd} alt="" /></button>
            </form>

            <div className="ListaTarefas">
                {/* {
                    lista.length > 1 ?
                        <h3>Lista vazia</h3>
                    : 
                    <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                    </div>
                } */}
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir"><img src={iconDel} alt="" /></button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir"><img src={iconDel} alt="" /></button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir"><img src={iconDel} alt="" /></button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir"><img src={iconDel} alt="" /></button>
                </div>
                
                <div className="item">
                    <span className="tarefaFeita">Tarefa de exemplo</span>
                    <button className="btnExcluir"><img src={iconDel} alt="" /></button>
                </div>
                
                <button className="btnDeleteAll">Deletar Todas</button>
            </div>
        </div>
    )
}

export default Lista
import React, {useState, useEffect} from "react";
import iconDel from './assets/btnDel.svg';
import iconAdd from './assets/btnAdd.svg';
import './Lista.css';


function Lista(){

    const listaStorage = localStorage.getItem('Lista');


    //Estado inicial da lista, um array zerado. 
    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);

    //Pegará o valor digitado, vai colocar na lista e vai limpar esse campo
    const [novoItem, setNovoItem] = useState("");

    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista))
    }, [lista])


    function adicionaItem(form){
        form.preventDefault();//Para não ser disparado o form, para não atualizar a página
        if(!novoItem){ //Se está vazio, vai ter um return para não acontecer nada    
            return;
        }
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }
    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }
    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index,1);
        setLista(listaAux);
    }
    function deletaTodas(){
        setLista([]);
    }

    return(
        <div id="form">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                    type="text" 
                    value={novoItem}
                    onChange={ (e) => { setNovoItem (e.target.value)}}
                    id="input-entrada"
                />
                <button className="btnAdd"><img src={iconAdd} alt="" /></button>
            </form>

            <div className="ListaTarefas">
                {
                    lista.length < 1 
                    ?
                        <h1>Lista Vazia</h1>
                    :
                        lista.map((item, index)=>(
                            <div key={index} className="item">
                            <span onClick={()=>{clicou(index)}} className={item.isCompleted ? "tarefaFeita" : "tarefaAtiva"}>{item.text}</span>
                            <button onClick={() => {deleta(index)}} className="btnExcluir">Exluir</button>
                            </div>
                        ))
                }

                {
                    lista.length > 0 &&
                    <button onClick={() => deletaTodas()} className="btnDeleteAll">Deletar Todas</button>
                }
              
                
            </div>
        </div>
    )
}

export default Lista
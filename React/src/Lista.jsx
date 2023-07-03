import React from "react";
import './Lista.css';


function Lista(){
    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <form action="">
                <input type="text" />
                <button>Adicionar</button>
            </form>

            <div className="ListaTarefas">
                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button>Exluir</button>

                </div>
            </div>
        </div>
    )
}

export default Lista
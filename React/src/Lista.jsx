import React from "react";
import './Lista.css';


function Lista(){
    return(
        <div id="form">
            <h1>Lista de Tarefas</h1>
            <form action="">
                <input type="text" />
                <button className="btnAdd">Add</button>
            </form>

            <div className="ListaTarefas">
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaAtiva">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaFeita">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaFeita">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <div className="item">
                    <span className="tarefaFeita">Tarefa de exemplo</span>
                    <button className="btnExcluir">Exluir</button>
                </div>
                <button className="btnDeleteAll">Deletar Todas</button>
            </div>
        </div>
    )
}

export default Lista
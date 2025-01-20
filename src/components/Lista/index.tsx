import React from "react";
import style from './Lista.module.scss'

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00',
            id: 1
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00',
            id: 2
        },
        {
            tarefa: 'Typescript',
            tempo: '03:00:00',
            id: 3
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {
                    tarefas.map((item) => (
                      <li key={item.id} className={style.item}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                      </li>  
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista
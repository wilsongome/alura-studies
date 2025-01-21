import style from "../Lista.module.scss"

export default function Item({id, tarefa, tempo} : {id: number, tarefa: string, tempo: string})
{
    return (
        <li key={id} className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>  
    )
}
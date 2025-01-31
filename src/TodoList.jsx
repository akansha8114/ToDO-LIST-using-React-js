/* eslint-disable react/prop-types */
import TodoListitem from "./TodoListitem";

function Todolist ({listofTodos}){
    return(
        <ul>
            {listofTodos?.map((todo) => {
                return <TodoListitem key={todo.id} todo={todo} />
            })}
        </ul>
    )

}
export default Todolist;
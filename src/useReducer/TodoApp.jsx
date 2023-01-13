import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <div className="col-12">
                <h4>Agregar tarea</h4>
                <TodoAdd 
                    onNewTodo={ handleNewTodo }  
                />
            </div>

            <hr />

            <h1>Tareas: { todosCount }, <small>pendientes: { pendingTodosCount }</small> </h1>

            <div className="row">
                <div className="col-12">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
            </div>


        
        </>
    )
}

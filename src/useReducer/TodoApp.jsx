import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <div className="col-12">
                <h3 className="mb-3 text-info text-uppercase">Agregar tarea</h3>
                <TodoAdd 
                    onNewTodo={ handleNewTodo }  
                />
            </div>

            <hr />

            <div className="d-flex flex-row justify-content-center align-items-center mb-3">
                <span className="texto-pendiente text-uppercase">Tareas: { todosCount } </span>
                <span className="texto-pendiente text-uppercase">Pendientes: { pendingTodosCount } </span>
            </div>

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

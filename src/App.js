import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todosData: todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    getTodoComponents() {
        return todosData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodo = prevState.todosData.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todosData: updatedTodo
            }
        })
    }

    render() {
        const todoComponents = this.getTodoComponents()

        return (
            <div className="todo-list">
                {todoComponents}
            </div>
        )
    }
}

export default App
import React, {Component} from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todosData: todosData
        }
    }

    getTodoComponents() {
        return todosData.map(item => <TodoItem key={item.id} item={item} />)
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
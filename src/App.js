import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

// function App() {
//     const todoComponents = todosData.map(item => <TodoItem key={item.id} item={item} />)

//     return (
//         <div className="todo-list">
//             {todoComponents}
//         </div>
//     )
// }

class App extends React.Component {
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
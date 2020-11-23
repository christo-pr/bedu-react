import { Component } from "react"

import TodoForm from "../components/sesion3/TodoForm"
import TodoList from "../components/sesion3/TodoList"

export class Sesion3 extends Component {
  state = {
    newTodo: "",
    todos: ["uno", "dos", "tres", "cuatro", "cinco"]
  }

  handleTodoInput = e => {
    this.setState({ newTodo: e.target.value })
  }

  handleSubmit = () => {
    this.setState({
      newTodo: "",
      todos: [...this.state.todos, this.state.newTodo]
    })
  }

  handleRemove = todo => {
    const newTodos = this.state.todos.filter(t => t !== todo)
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        <TodoForm
          inputValue={this.state.newTodo}
          onChangeInputValue={this.handleTodoInput}
          onSubmit={this.handleSubmit}
        />
        <TodoList items={this.state.todos} onRemove={this.handleRemove} />
      </div>
    )
  }
}

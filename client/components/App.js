import React, { Component } from 'react'
import AddTodo from '../containers/AddTodoContainer'
import FilteredTodoList from '../containers/FilteredTodoList'

class App extends Component {

  render() {
    return (
      <div>
        <AddTodo />
        <FilteredTodoList />
      </div>
    )
  }

}

export default App
















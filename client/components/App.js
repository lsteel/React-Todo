<<<<<<< HEAD
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
=======
import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

class App extends Component {

  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.state = { todos: [], autoId: 1 };
    this.createTodo = this.createTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
=======
    super(props)
    this.state = { todos: [], autoId: 1 }
    this.createTodo = this.createTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
  }

  createTodo(name) {
    this.setState({
      autoId: this.state.autoId + 1,
      todos: [
        ...this.state.todos,
        {
          id: this.state.autoId,
          name,
          completed: false
        }
      ]
<<<<<<< HEAD
    });
=======
    })
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
  }

  toggleTodo(todo) {
    const id = todo.id
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
<<<<<<< HEAD
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  render() {
=======
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  render() {
    console.log('rendering App')
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
    return (
      <div>
        <AddTodo onSubmit={this.createTodo} />
        <TodoList
          todos={this.state.todos}
          onTodoClick={this.toggleTodo}
        />
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
  }

}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

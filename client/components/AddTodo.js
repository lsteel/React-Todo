<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from 'react'
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

class AddTodo extends React.Component {

  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = this.refs.input;
    this.props.onSubmit(input.value);
    input.value = '';
=======
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const input = this.refs.input
    this.props.onSubmit(input.value)
    input.value = ''
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="input" />
        <button>Add Todo</button>
      </form>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
  }

}

<<<<<<< HEAD
export default AddTodo;
=======
export default AddTodo
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

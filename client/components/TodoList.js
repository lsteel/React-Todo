<<<<<<< HEAD
import React from 'react';
import Todo from './Todo'; // Import our Todo component that we just wrote.
=======
import React from 'react'
import Todo from './Todo' // Import our Todo component that we just wrote.
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

const TodoList = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo
                name={todo.name}
                completed={todo.completed}
                onClick={() => props.onTodoClick(todo)}
              />
            </li>
<<<<<<< HEAD
          );
        })
      }
    </ul>
  );
};
=======
          )
        })
      }
    </ul>
  )
}
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

export default TodoList;

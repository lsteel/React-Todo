<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1
// Even though we don't use React directly, the process to convert JSX into
// `React.createElement()` calls needs `React` available

const Todo = (props) => {
  var styles = {
    textDecoration: props.completed ? 'line-through' : 'none',
    cursor: 'pointer'
<<<<<<< HEAD
  };
  return (
    <span style={styles} onClick={() => props.onClick()}>{props.name}</span>
  );
};

export default Todo;
=======
  }
  return (
    <span style={styles} onClick={() => props.onClick()}>{props.name}</span>
  )
};

export default Todo
>>>>>>> 69050ee123473864ca8238bd146b1f233140dcb1

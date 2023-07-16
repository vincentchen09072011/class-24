import { useState } from 'react'

/*interface Todo {
  text: string
  complete?:boolean
}
const initialTodo: Todo[] = [
  {
    text:'Learn react',
    complete:false
  },
  {
    text:'Meet friend for lunch',
    complete:false
  },
  {
    text:'build todo app',
    complete:false
  },

]
function App() {
  const [todo,setTodo] = useState(initialTodo)
  const [inputvalue,setinputvalue] = useState('')
  const handleAddTodo = () => {
    if (inputvalue === '') return;
    const nextTodo = [...todo]
    nextTodo.push({text: inputvalue})
    setTodo(nextTodo)
    setinputvalue('')
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)
  }
  const handletoggleTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].complete = !nextTodo[index].complete
    setTodo(nextTodo)
  }
  return (
    <div>
      <ul>
        {todo.map((todo,index) => {return <li>
          <input value={todo.complete ? 'on' : 'off'} 
              defaultChecked={todo.complete} 
              type="checkbox"
              onChange={() => handletoggleTodo(index)} /> 
          <span className={todo.complete ? 'line-through' : ''}>{todo.text}{''}</span> <button onClick={() => handleDeleteTodo(index)}>x</button>
        </li> })}
      </ul>
      <input type="text" onChange={(event) => setinputvalue(event.target.value)}  />
      <button onClick={handleAddTodo}>+</button>
    </div>
  )
}*/
/*interface Todo {
  text: string
  complete?:boolean
}
const initialTodo: Todo[] = [
  {
    text:'Learn react',
    complete:false
  },
  {
    text:'Meet friend for lunch',
    complete:false
  },
  {
    text:'build todo app',
    complete:false
  },

]
function App() {
  const [todo,setTodo] = useState(initialTodo)
  const [inputvalue,setinputvalue] = useState('')
  const handleAddTodo = () => {
    if (inputvalue === '') return;
    const nextTodo = [...todo]
    nextTodo.push({text: inputvalue})
    setTodo(nextTodo)
    setinputvalue('')
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)
  }
  const handletoggleTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].complete = !nextTodo[index].complete
    setTodo(nextTodo)
  }
  return (
    <div>
      <ul>
        {todo.map((todo,index) => {return <li>
          <input value={todo.complete ? 'on' : 'off'} 
              defaultChecked={todo.complete} 
              type="checkbox"
              onChange={() => handletoggleTodo(index)} /> 
          <span className={todo.complete ? 'line-through' : ''}>{todo.text}{''}</span> <button onClick={() => handleDeleteTodo(index)}>x</button>
        </li> })}
      </ul>
      <input type="text" onChange={(event) => setinputvalue(event.target.value)}  />
      <button onClick={handleAddTodo}>+</button>
    </div>
  )
}*/

/*interface Todo {
  text:string
  complete?:boolean
}
const initialTodo: Todo[] = [
  {
    text:'learn react',
    complete: false
  },
  {
    text:'meet friend for lunch',
    complete: false
  },
  {
    text:'build a todo app',
    complete: false
  },
]

function App() {
  const [todo,setTodo] = useState(initialTodo)
  const [inputvalue,setinputvalue] = useState('')
  const handleAddTodo = () => {
    if (inputvalue==='') return;
    const nextTodo = [...todo]
    nextTodo.push({text:inputvalue})
    setTodo(nextTodo)
    setinputvalue('')
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)
  }
  const handletoggleTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].complete = !nextTodo[index].complete
    setTodo(nextTodo)
  }
  return (
    <div>
      <ul>
        {todo.map((todo,index) => {
          return <li>
            <input type="checkbox"
              value={todo.complete ? 'on' : 'off'}
              defaultChecked={todo.complete}
              onChange={() => handletoggleTodo(index)}
            />
            <span className={todo.complete ? 'line-through' : 'off'}>
              {todo.text}{' '}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>x</button>
          </li>
        })}
      </ul>
      <input type="text" onChange={(event)=> setinputvalue(event.target.value)}/>
      <button onClick={handleAddTodo}>+</button>
    </div>
  )
}*/
/*interface Todo {
  text:string
  complete?:boolean
}
const initialTodo: Todo[] = [
  {
    text:'learn react',
    complete: false
  },
  {
    text:'meet friend for lunch',
    complete: false
  },
  {
    text:'build a todo app',
    complete: false
  },
]


function App() {
  const [todo,setTodo] = useState(initialTodo)
  const [inputvalue, setinputvalue] = useState('')
  const handleAddTodo = () => {
    if (inputvalue ==='') return;
    const nextTodo = [...todo]
    nextTodo.push({text:inputvalue})
    setTodo(nextTodo)
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)
  }
  const handletoggleTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].complete = !nextTodo[index].complete;
    setTodo(nextTodo)
  }
  return (
  <div>
    <ul>
      {todo.map((todo,index) => {
        return <li>
          <input type="checkbox" value={todo.complete ? 'on' : 'off'} defaultChecked={todo.complete} onChange={() => handletoggleTodo(index)}/>
          <span className={todo.complete ? 'line-through' : ''}>
              {todo.text}{' '}
          </span>
          <button onClick={() => handleDeleteTodo(index)}>x</button>
        </li>
      })}
    </ul>
    <input type="text" onChange={(event) => setinputvalue(event.target.value)}/>
    <button onClick={handleAddTodo}>+</button>
  </div>)
}*/
interface Todo {
  text:string
  complete?:boolean
}
const initialTodo: Todo[] = [
  {
    text:'learn react',
    complete:false
  },
  {
    text:'meet friend for lunch',
    complete:false
  },
  {
    text:'build todo app',
    complete:false
  },
  
]

function App() {
  const [todo,setTodo] = useState(initialTodo)
  const [inputvalue,setinputvalue] = useState('')
  const handleAddTodo = () =>{
    if (inputvalue === '') return
    const nextTodo = [...todo]
    nextTodo.push({text:inputvalue})
    setTodo(nextTodo)
    setinputvalue('')
  }
  const handleDeleteTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo.splice(index,1)
    setTodo(nextTodo)
  }
  const handletoggleTodo = (index:number) => {
    const nextTodo = [...todo]
    nextTodo[index].complete = !nextTodo[index].complete
    setTodo(nextTodo)
  }
  return (
  <div>
    <ul>
      {todo.map((todo,index) => {
        return <li>
          <input type="checkbox" value={todo.complete ? 'on' : 'off'} defaultChecked={todo.complete} onChange={() => handletoggleTodo(index)} />
          <span className={todo.complete ? 'line-through': 'off'}>
            {todo.text}{' '}
          </span>
          <button onClick={() => handleDeleteTodo(index)}>x</button>
        </li>
      })}
    </ul>
    <input type="text" onChange={(event) => setinputvalue(event.target.value)}/>
    <button onClick={handleAddTodo}>+</button>
  </div>
  )
}

export default App

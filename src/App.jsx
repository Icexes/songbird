import React, {useState} from 'react';
import Header from './Header/Header'

// const AddTodo = React.lazy(() => import('./toDo/AddTodo'));


function App() {
  const [score, setScore] = useState(0);
  setTimeout(() => setScore(score + 1), 5455000);
  const [activeCategory] = useState(0);
//  console.log(setActiveCategory);
//   const [todos, setTodos] = React.useState([
//   ]);
//   const [loading,setLoading] = React.useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     .then(response => response.json())
//     .then(todos => {
//       setTimeout(() => {
//         setTodos(todos);
//         setLoading(false);
//       }, 2000)
      
//     })
//   }, [])
//  function toggleTodo(id) {
//   setTodos(todos.map(todo => {
//      if (todo.id === id) {
//        todo.completed = !todo.completed;
//      }
//      return todo
//    }));
//  }
//  function addTodo(title) {
//    setTodos(todos.concat([{
//      title,
//      id: Date.now(),
//      completed: false,
//    }]))
//  }
//  function removeTodo(id) {
//    setTodos(
//      todos.filter(todo => todo.id !== id)
//    )
//  }
//   return (
//     <Context.Provider value = {{removeTodo}}>
//     <div className = 'wrapper'>
//       <h1> React Tutorial</h1>
//       <Modal/>
//       <React.Suspense fallback={<p>Loading...</p>}>
//       <AddTodo onCreate={addTodo}/>
//       </React.Suspense>
//       {loading && <Loader/>}
//       {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo}/> : (loading ? null : <p>No todos</p>)}
//     </div>
//     </Context.Provider>
//   );
  return (
    <div className = 'wrapper'>
    <Header score = {score} activeCategory = {activeCategory}/>
    </div>
  )
}

export default App;

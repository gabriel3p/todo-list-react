import { useState, useEffect } from 'react'
import './App.css'

import { Card } from '../components/Card'

import avatar_img from '../assets/img/team-3.png'

export function App() {

  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('')


  function handleAddTodo () {
      let newTodo = {
          key: todos.length ? todos[todos.length - 1].key + 1 : 0,
          name: name, 
          description: description
      };

      setTodos(prevState => [ ...prevState, newTodo ])
        
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);
  
  return (
    <section className="container">

      <header>
        <h1>ToDo List</h1>

        <div className='user_data'>
            <strong>Gabriel Pereira</strong>
            <img src={ avatar_img } title="Foto do usuário" />
        </div>
      </header>

      <main id="main">
        <aside>
          <div id="form-add" className="form_add" >
              <div className="form_group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" name="name" id="name" required onChange={ event => setName(event.target.value) } />
                  <span className="error">text</span>
              </div>

              <div className="form_group">
                  <label htmlFor="">Descrição</label>
                  <textarea name="description" id="description" cols="30" rows="4" required onChange={ event => setDescription(event.target.value) } ></textarea>
                  <span className="error">text</span>
              </div>

              <button type="submit" onClick={ handleAddTodo }>Adicionar</button>
          </div>
        </aside>

        <article className="cards">
          {
            todos.map((todo, index) => <Card key={ index } name={ todo.name } description={ todo.description } code={ todo.key } />)
          }
          
            
        </article>
      </main>

    </section>
  )
}

 

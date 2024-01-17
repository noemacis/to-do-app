import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from '../Item/Item';
import Form from '../Form/Form';
import ItemsList from '../ItemsList/ItemsList';
import { randomUUID } from 'crypto';





function App() {


  const aggiungi = (ts: string) =>
    setTask(prevTask => [...prevTask, ts]);
  const [tasks, setTask] = useState<string[]>([]);

  return (
    <>
      <div className='title-div'>
        <h1>To do app</h1>
      </div>
      <div>
        <Form onSubmit={aggiungi}></Form>
        <ItemsList items={tasks} />
      </div>

    </>

  );

}

export default App;

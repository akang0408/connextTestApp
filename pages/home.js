/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Task from '../components/Tasks';

export default function Home(props) {

  const [id, setId] = useState('');
  const [taskArr, getTasks] = useState([]);
  const [newTask, setTask] = useState('');

  useEffect(() => {
    const cookie = window.document.cookie.split(';')[0].slice(3);
    console.log('Use Effect Cookie:', cookie);
    setId(cookie);
  });

  useEffect(() => {
    fetch(`/home/${id}`)
      .then((data) => data.json())
      .then((res) => {
        getTasks(res);
      })
      .catch((err) => console.log(err))
  }, [id]);

  const allTasks = taskArr.map((el) => {
    return (<Task
      id={el.id}
      task={el.tasks}
    />)
  })

  const handleSubmit = (event) => {
    const bodyObj = {
      id,
      task: newTask
    }

    fetch(`/home`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj),
    });
  }

  return (
    <div>
      <Header />
      <span>New Task: </span>
      <input
        type="text"
        id="newTask"
        value={newTask}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {allTasks}
      <h3>{props.quote}</h3> 
      <h5>-{props.author}</h5>
    </div>
  );
}

Home.getInitialProps = async function() {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  console.log(`Quote data fetched. content is: ${data.content}`);

  return { 
    quote: data.content,
    author: data.author,
  };
}

// useEffect(() => {
//   fetch(`/home/${id}`)
//     .then((data) => data.json())
//     .then((res) => {
//       const arr = res.map((el) => {
//         return (<Task
//           id={el.id}
//           task={el.tasks}
//         />)
//       })
//       getTasks(arr);
//       return;
//     })
// }, [taskArr]);
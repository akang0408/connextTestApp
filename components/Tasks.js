/*eslint-disable*/
export default function Task(props) {
  const deleteTask = () => {
    console.log(props);
    fetch(`/home/${props.id}`, {
      method: 'DELETE',
    })
  }

  return (
    <div>
      <p>{props.task}</p>
      <button onClick={deleteTask}>delete</button>
    </div>
  );
}

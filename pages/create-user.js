/*eslint-disable*/



export default function CreateUser() {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <span>name: </span>
        <input type="text" id="registerName"></input>
      </div>
      <div>
        <span>email: </span>
        <input type="text" id="registerEmail"></input>
      </div>
      <div>
        <span>username: </span>
        <input type="text" id="registerUsername"></input>
      </div>
      <div>
        <span>password: </span>
        <input type="text" id="registerPassword"></input>
      </div>
      <button>register</button>
    </div>
  );
}

import React, { useState } from 'react';
const App=()=>{

  const [users, setUsers] = useState([]);
  const loadUsers= async()=>{
    console.log('before');
    const response= await fetch ("https://api.github.com/users");
    const jsonresopnse = await response.json();
    setUsers(jsonresopnse);

  };
   
  return  (
  <div className='App'>
     <h1>hello world</h1>
     <button onClick={loadUsers}>Get DATA</button>
  
    <h2>Users</h2>
    <ul>
      <li>
        {users.map(({id, login, avtar_url})=>(
          <li key={id}>Name: {login} </li>
        ))}
      </li>
    </ul>
  </div>
)
}


export default App;     
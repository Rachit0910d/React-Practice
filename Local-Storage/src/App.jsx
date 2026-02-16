import React from 'react'

const App = () => {
  // localStorage.setItem('user', 'sarthak');
  // localStorage.clear();
  // const user = localStorage.getItem('user');
  // console.log(user);

  const user = {
    userName: 'sarthak',
    age: 18,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem('user')));
  return (
    <div>App</div>
  )
}

export default App
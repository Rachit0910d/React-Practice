
const User = ({user}) => {
  console.log(user)
  return (
    <div>
      <hr />
      <h1>name : {user.name}</h1>
      <h1>age : {user.age}</h1>
      <h1>email : {user.email}</h1>
    </div>
  )
}

export default User;

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="My img" />
        <h1>{props.name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>

  )
}

export default Card
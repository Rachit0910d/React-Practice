import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response);
  // }

  // const getData = async () =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json();

  //   console.log(data);
  // }

  //  const getData = async () =>{
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(data);
  //  }

  // const [data, setData] = useState([]);
  // const getData = async () =>{
  //   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');

  //   setData(response.data);
  // }

  // return (
  //   <div>
  //     <button onClick={getData}>Get Data</button>
  //     <div>
  //       {data.map((elem, idx) =>{
  //         return <h3 key={idx}>Hello -- {elem.author} -- {idx}</h3>
  //       })}
  //     </div>
  //   </div>
  // )

  const [num2, setNum2] = useState(100);
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("hello");
  }, [num]);

  return (
    <div>
      <h1>{num2}</h1>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
        onDoubleClick={() => {
          setNum2(num2 + 10);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;

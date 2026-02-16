// import Count from "./cOUNT.JSX"
import { useState } from "react";

const App = () => {
  // const [num, setNum] = useState({user:"Sarthak", age:20})

  // const btnClicked = () =>{
  //   const newNum = {...num};
  //   newNum.user = "Rachit";
  //   newNum.age = 28;
  //   setNum(newNum);
  //   console.log(newNum);
  // }
  // return (
  //   <div>
  //     {/* <Count /> */}

  //     <h1>{num.user}, {num.age}</h1>
  //     <button onClick={btnClicked}>hello</button>

  //   </div>
  // );

  const submitHanlder = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    setTitle('');
  };

  const [title, setTitle] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHanlder(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

import { useState } from "react";
import User from "./User";
import College from "./College";
import Student from "./Student";
import Wrapper from "./Wrapper";
import Skills from "./Skills";
import UserMap from "./UserMap";

function App() {
  // const [count,setCount] = useState(0);

  // return(
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Counter</button>
  //     {
  //       count == 0 ? <h1>condition {count}</h1>
  //       : count == 1 ? <h2>condition {count}</h2>
  //       : count == 2 ? <h2>condition {count}</h2>
  //       : count == 3 ? <h2>condition {count}</h2>
  //       : count == 4 ? <h2>condition {count}</h2>
  //       : null
  //     }
  //   </div>
  // )

  // let userObject1 = {
  //   name: "Anil sidhu",
  //   age: 29,
  //   email: "Anil@test.com"
  // }

  // let userObject2 = {
  //   name: "Rachit",
  //   age: "25",
  //   email: "Rachit@test.com"
  // }

  // // let userName = "Anil sidhu";
  // // let userAge = 27;
  // // let userEmail = "Anil@test.com";

  // let collegeNames =['IET', 'IIIT', 'IIT', 'DU'];

  // const [student, setStudent] = useState()

  // return(
  //   <div>
  //     { student && <Student name = {student} /> }
  //     <button onClick={() => {setStudent("Bhasker")}}>SetName</button>

  //     <User user={userObject1} />
  //     <User user={userObject2} />

  //     <College name={collegeNames[0]} />
  //     <College name={collegeNames[1]} />
  //     <College name={collegeNames[2]} />
  //   </div>
  // )

  // return(
  //   <div>
  //     <h1>Props in react js</h1>
  //     <Wrapper>
  //       <h1 style={{color:"orange"}}>Hello Everyone</h1>
  //     </Wrapper>

  //     <Wrapper color={"blue"}>
  //       <h1>My name is </h1>
  //     </Wrapper>

  //     <Wrapper>
  //       <h1>Rachit</h1>
  //       <h1 style={{color:"red"}}>now log in to your account</h1>
  //     </Wrapper>
  //   </div>
  // )

  // const [val, setVal] = useState()
  // return(
  //   <div>
  //     <h1>Get input field value</h1>

  //     <input type="text" value={val} onChange={(event)=>{setVal(event.target.value)}} placeholder="enter user name" style={{border:"1px solid green", margin:"4px", padding: "10px"}}/>

  //     <h1>{val}</h1>

  //     <button onClick={()=> setVal("")}>clear</button>
  //   </div>
  // )

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  // return(
  //   <div>
  //     <form action="" method="get"></form>
  //     <input type="text" value={name} onChange={(event) =>{setName(event.target.value)}} PlaceHolder="Enter Name"/>
  //     <br /><br />
  //     <input type="text" value={password} onChange={(event) =>{setPassword(event.target.value)}}  PlaceHolder="Enter Password"/>
  //     <br /><br />
  //     <input type="text" value={email} onChange={(event) =>{setEmail(event.target.value)}}  PlaceHolder="Enter Email"/>
  //     <br /><br />
  //     <button>Submit</button>
  //     <br /><br />
  //     <button onClick={() => {setEmail(""), setName(""), setPassword("")}}>Clear</button>
  //     <h3>{name}</h3>
  //     <h3>{password}</h3>
  //     <h3>{email}</h3>
  //   </div>
  // )

  // return(
  //   <div>
  //     <h1>Handle checkbox</h1>
  //      <Skills />
  //   </div>
  // )

  // const [gender, setGender] = useState("female");
  // const [city, setCity] = useState("delhi");
  // return(
  //   <div>
  //     <h1>Handle radio and dropdown</h1>
  //     <input type="radio" checked={gender == "male"} onChange={(event) =>{setGender(event.target.value)}} name="gender" value={"Male"} id="male"/>
  //     <label htmlFor="male">Male</label>

  //     <input type="radio" checked={gender == "female"} onChange={(event) => {setGender(event.target.value)}} name="gender" value={"Female"} id="female"/>
  //     <label htmlFor="female">Female</label>

  //     <h2>Selected gender: {gender}</h2>

  //     <h3>Select city</h3>
  //     <select onChange={(event) => {setCity(event.target.value)}} defaultValue="delhi">
  //       <option value="noida">Noida</option>
  //       <option value="gurgaon">Gurgaon</option>
  //       <option value="delhi">Delhi</option>
  //       <option value="new delhi">New Delhi</option>
  //     </select>
  //     <h2>Selected city: {city}</h2>
  //   </div>
  // )

  const userData = [
    {
      name: "Anil",
      age: "28",
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "rachit",
      age: "20",
      email: "raxh@test.com",
      id: 2,
    },
    {
      name: "Anil",
      age: "34",
      email: "anil@test.com",
      id: 3,
    },
    {
      name: "Anil",
      age: "34",
      email: "anil@test.com",
      id: 3,
    },
  ];

  // return (
  //   <div>
  //     <h1>Loop in jSx with Map function</h1>
  //     <table border="1">
  //       <thead>
  //         <tr>
  //           <td>Id</td>
  //           <td>Name</td>
  //           <td>Email</td>
  //           <td>Age</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           userData.map((item) => (
  //             <tr key={item.id}>
  //               <td>{item.id}</td>
  //               <td>{item.name}</td>
  //               <td>{item.email}</td>
  //               <td>{item.age}</td>
  //             </tr>
  //           ))
  //         }
  //       </tbody>
  //     </table>

  //     <h1>Dummy data</h1>
  //     <table border="1">
  //       <thead>
  //         <tr>
  //           <td>Id</td>
  //           <td>Name</td>
  //           <td>Email</td>
  //           <td>Age</td>
  //         </tr>
  //       </thead>

  //       <tbody>
  //         <tr>
  //           <td>1</td>
  //           <td>Anil</td>
  //           <td>test@gmail.com</td>
  //           <td>20</td>
  //         </tr>

  //         <tr>
  //           <td>2</td>
  //           <td>rachit</td>
  //           <td>test@gmail.com</td>
  //           <td>20</td>
  //         </tr>

  //         <tr>
  //           <td>3</td>
  //           <td>fdbfdbdf</td>
  //           <td>test@gmail.com</td>
  //           <td>20</td>
  //         </tr>

  //         <tr>
  //           <td>3</td>
  //           <td>Anil</td>
  //           <td>test@gmail.com</td>
  //           <td>20</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
  // );

  return (
    <div>
      <h1>Reuse component in Loop in JSX</h1>
      {
        userdata.map((item) => (
          <div key={item.id}>
            <UserMap user={item}/>
          </div>
        ))
      }
    </div>
  );
}
export default App;

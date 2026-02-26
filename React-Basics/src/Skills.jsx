import {useState} from 'react'

function Skills() {

  const [skills, setSkills] = useState([]);
    
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if(event.target.checked){
      setSkills([...skills, event.target.value]);
    } else{
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  }
  return (
    <div>
      <h3>Select your skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="PHP"/>
      <label htmlFor="php">PHP</label>

      <br /><br />
      <input onChange={handleSkills} type="checkbox" id="java" value="Java"/>
      <label htmlFor="java">Java</label>

      <br /><br />
      <input onChange={handleSkills} type="checkbox" id="python" value="Python"/>
      <label htmlFor="python">Python</label>

      <br /><br />
      <input onChange={handleSkills} type="checkbox" id="js" value="JS"/>
      <label htmlFor="js">JS</label>

      <h1>{skills.toString()}</h1>
    </div>
  )
}

export default Skills
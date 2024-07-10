import './App.css'
import { useState } from 'react'

function App() {
  const [firstName,setfirstName]=useState("");
  const [lastName,setlastName]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState("");
  const [gender,setgender]=useState("Male");
  const [subject,setsubject]=useState({
    English:false,
    Maths:false,
    Physics:false
  });
  const [url,seturl]=useState("");
  const [file,setfile]=useState(null);
  const [choice,setchoice]=useState("");
  const [about,setabout]=useState("");

  function abouthandl(event){
    setabout(event.target.value);
  }
  function choicehandl(event){
    setchoice(event.target.value);
  }
  function filehandl(event){
    setfile(event.target.files[0]);
  }
  function phonehandl(event){
    setphone(event.target.value);
  }
  function firstnamehandl(event){
    setfirstName(event.target.value);
  }
  function lastnamehandl(event){
    setlastName(event.target.value);
  }
  function emailhandl(event){
    setemail(event.target.value);
  }
  function urlhandl(event){
    seturl(event.target.value);
  }
  function genderhandl(event){
    setgender(event.target.value);
  }
  return (
    <div id="container">
      <h1>Form in React</h1>
      <form action="submit">
          <label htmlFor="First Name">First Name*</label> <br></br>
                    <input value={firstName} onChange={firstnamehandl} type="text" placeholder='Enter your First Name' />
          <label htmlFor="Last Name">Last Name*</label> <br></br>
                    <input value={lastName} onChange={lastnamehandl} type="text" placeholder='Enter your Last Name' />
          <label htmlFor="Email Name">Email Name*</label> <br></br>
                    <input value={email} onChange={emailhandl} type="email" placeholder='Enter your Email Name' />
          <label htmlFor="phone number Name">phone number Name*</label> <br></br>
                    <input value={phone} onChange={phonehandl} type="text" placeholder='Enter your phone number Name' />
          <label htmlFor="Gender">Gender*</label> <br></br>
          <div className="checkk" onChange={genderhandl}>
                    <input className='chck' type="radio" name='Gender'   value="Male" defaultChecked/> Male
                    <input className='chck' type="radio" name='Gender' value="Female" />Female
          </div>
          <label htmlFor="sub">Your best subject*</label> <br></br>
          <div className="checkk">
                    <input checked={subject.English} onChange={(e)=>{setsubject(previ=>({...previ,English:e.target.checked}))}} className='chck' type="checkbox" name='sub' value="English" /> English
                    <input checked={subject.Maths} onChange={(e)=>{setsubject(previ=>({...previ,Maths:e.target.checked}))}} className='chck' type="checkbox" name='sub' value="Math" /> Maths
                    <input checked={subject.Physics} onChange={(e)=>{setsubject(previ=>({...previ,Physics:e.target.checked}))}} className='chck' type="checkbox" name='sub' value="Physics" /> Physics
          </div>
          <label htmlFor="file">select your resume*</label>
                    <input onChange={filehandl} id='file' type="file" onClick={(e)=>{console.log(e)}} />
          <label htmlFor="url">Enter your url*</label>
                    <input value={url} onChange={urlhandl} type="text" placeholder='Enter url'/>
          <label htmlFor="choice">Select your choice*</label> <br />
          <select onChange={choicehandl} name="ans" id="selector">
                    <option onClick={(e)=>{console.log(e)}} value="">select your ans</option>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="javascripte">javascript</option>
                    <option value="c++">c++</option>
                    <option value="c#">c#</option>
                    <option value="java">java</option>
                    <option value="python">python</option>
                    <option value="ruby">ruby</option>
          </select>
          <label htmlFor="about">About</label> <br />
          <textarea value={about} onChange={abouthandl} name="about" id="txt" placeholder='About your self' cols="30" rows="10"></textarea>
      </form>
      <div id="subb">
      <button type='submite' onClick={()=>{
            setfirstName("");
            setlastName("");
            setemail("");
            setgender("Male");
            setphone("");
            setresume("");
            seturl("");
            setsubject({
              English:false,
              Maths:false,
              Physics:false
            });
            setabout("");
            setgender("Male");
            setfile(null);
            setchoice("");
      }}>Reset</button>
      <button type='submite' onClick={()=>{
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(gender);
        console.log(subject);
        console.log(file);
        console.log(url);
        console.log(choice);
        console.log(about);
      }} >Submite </button>
      </div>
    </div>
  )
}

export default App
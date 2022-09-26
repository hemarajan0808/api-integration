import logo from "./logo.svg";
import "./App.css";
//import Integration from './components/Integration';
//import Integration1 from './components/Integration1';
import Integration3 from './components/Integration3';
import { useRef } from "react";

function App() {
  return(
 <Integration3 />)



  /* const nameInput = useRef();
  const jobInput = useRef();

 
    
    async function postData( apiRequestObject) {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(apiRequestObject),
    });
    const json = response.json();
    console.log("post API response", json)
  }

  function submitHandler(e) {
    e.preventDefault();
    const apiRequestObject =
      {
        "name": nameInput?.current?.value,
        "job": jobInput?.current?.value
    }
    
    postData(apiRequestObject);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label> Name:</label>
          <input type="text" ref={nameInput} required></input>
          <br></br>
          <label>Job :</label>
          <input type="text" ref={jobInput} required={true}></input>
          <br></br>

          <button type="button" onClick={submitHandler}>
            Submit{" "}
          </button>
          <button type="clear"> clear</button>
        </form>
      </header>
    </div>
  ); */
}

export default App;

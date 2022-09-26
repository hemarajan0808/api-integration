import React, { useRef } from "react";

function Integration3() {
  const emailAddress = useRef();
  const password = useRef();

  async function postData(apiRequestValue) {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(apiRequestValue),
    });
    const jsonRes = response.json();
    console.log(jsonRes)
  }

  function postValueHandler() {
    const apiRequestValue = {
      email: emailAddress.current.value,
      password: password.current.value,
    };
    postData(apiRequestValue);
  }

  return (
    <div>
      <form>
        <label> Email ID: </label>
        <input type="email" ref={emailAddress}></input>
        <label>Password: </label>
        <input type="password" ref={password}></input>
        <button type="button" onClick={postValueHandler}>
          {" "}
          submit{" "}
        </button>
        <button type="clear">Clear</button>
      </form>
    </div>
  );
}

export default Integration3;

/* const [data, setData] = useState({});

async function postData() {
  const response = await fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
}

useEffect(() => {
  postData();
}, []); */

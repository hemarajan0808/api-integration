import React, {useState, useEffect} from "react";

function Integration1(){

    const[users, setUsers] = useState({});

     async function getUsers(){
     const response = await fetch('https://reqres.in/api/users?page=2');
     const jsonData = await response.json();
     
     setUsers(jsonData)
        console.log("API Response:", jsonData)

     }
    useEffect(()=>{
        getUsers();
    },[]);
return(
    <div>
        <h2>Integration 2 </h2>
        {users?.data?.map((userInfo) => (
            <div>
                <p> {`First Name: ${userInfo?.first_name}`}</p>
                <p> {`Last Name :${userInfo?.last_name}`}</p>
                <p> {`Email ID: ${userInfo?.email}`}</p>
                <p> {`URL: ${users.support.url}`}</p>
                <p>{`Text: ${users.support.text}`}</p>
                
            </div>
        )) }

    </div>
)
}

export default Integration1;


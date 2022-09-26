import React, { useState, useEffect } from "react";

function Integration2() {
  const [profile, setProfile] = useState({});

  const   getUserProfile = async ()=> {
    const response = await fetch('https://reqres.in/api/users/2');
    const jsonData = await response.json();

    setProfile(jsonData);
  }

  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <h3> Integration 2</h3>
      {
        <div> 
            <p> {`ID: ${profile?.data?.id}`}</p>
            <p> {`Email: ${profile?.data?.email}`}</p>
            <p> {`URL: ${profile?.support?.url}`}</p>
        </div>

      }
      
    </div>
  );
}

export default Integration2;

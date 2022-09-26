import React, { useState, useEffect } from "react";

function Integration() {
  const [data, setData] = useState([]);

  async function getUserData() {
    const response = await fetch("https://api.github.com/users");
    const json = await response.json();

    setData(json);
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h3> This is an API integration </h3>
      {data?.map((val) => (
        <h2>
          {" "}
          {`login: ${val?.login} , ID: ${val?.id}, Type: ${val?.type} ,
           Site Admin: ${val?.site_admin}`}
        </h2>
      )) }
    </div>
  );
}

export default Integration;

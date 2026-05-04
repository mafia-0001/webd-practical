import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Albums</h1>

      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;

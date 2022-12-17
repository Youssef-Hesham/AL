import { useState, useEffect } from "react";

export function Admin() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    const res = await fetch(`http://localhost:3000/api/clients`);
    const json = await res.json();
    setData(json);
    console.log(data);
  }

  return (
    <div>
      <h1>hasMaster</h1>
      <input type="file"></input>
      <h1>{title}</h1>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        no
      </button>
      <button>hello</button>
    </div>
  );
}

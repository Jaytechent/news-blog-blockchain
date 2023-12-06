// Add this at the top of your React component file
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const spinnerStyle = {
  border: "4px solid rgba(0, 0, 0, 0.1)",
  borderLeft: "4px solid #3498db",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
};

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInfo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/3")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (loading) {
    return (
      <section
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ ...spinnerStyle }}> </div>;
      </section>
    );
  }

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      {/* {data.map((item) => ( // this map function is used to render all the objects in the array */}
      <h3>{data.title}</h3>
      <h3>{data.body}</h3>
      <h3>{data.userId}</h3>
      {/* ))} */}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1234/mec ');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:',error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Data from Express Server</h1>
        <p>{data.message}</p>
      </header>
    </div>
    </>
  );
}

export default App;

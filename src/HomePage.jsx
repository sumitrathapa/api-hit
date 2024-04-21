import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setLoading(false);

      setTodos(response.data);
    } catch (error) {
      setLoading(false);
      setIsError(true);
      setError(error.message);
    }
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Click me
      </Button>

      {loading && <CircularProgress />}
      {isError && <p>Cannot hit api at this time.. Some error happens..</p>}

      <div>
        {todos.map((item, index) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div>
    </div>
  );
};

export default HomePage;

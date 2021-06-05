import React from 'react';
import './App.css';
// import Greetings from "./Greetings";
// import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  // Greetings
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    // <Greetings name="Hello" onClick={onClick} />
    // <Counter />
    <MyForm onSubmit={onSubmit} />
  );
}

export default App;

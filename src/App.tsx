import React from "react";
import "./App.css";
import MyForm from "./MyForm";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) =>
      console.log(form.name, form.description);
  return <MyForm onSubmit={onSubmit}/>;
};

export default App;

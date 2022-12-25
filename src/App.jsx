import "./main";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./index.css";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [saludo, setSaludo] = useState("");
  const [error, setError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setError("Debes escribir tu nombre");
      setNombre("");
      return;
    }
    setSaludo("Hola " + nombre + ", Bienvenido" + "! ");
    setError("");
    setNombre("");
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="mt-5">Desafío Estado de los componentes y eventos</h1>
        <div className="bg-info border-dark border-3 p-4 border border-dark rounded my-5">
          <form onSubmit={handleSubmitForm}>
            <Input setNombre={setNombre} setPassword={setPassword} />
            {password === "252525" ? <Button /> : null}
          </form>
        </div>
        {error && <h3>{error}</h3>}
        <h3>{saludo}</h3>
      </div>
    </>
  );
};

export default App;

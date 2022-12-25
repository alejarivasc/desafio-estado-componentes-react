const Input = ({ nombre, password, setNombre, setPassword }) => {
  return (
    <>
      <div>
        <label className="form-label" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="form-control mb-3"
          name="nombre"
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control mb-3"
          name="password"
          type="text"
          placeholder="Ingresa tu password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </>
  );
};

export default Input;

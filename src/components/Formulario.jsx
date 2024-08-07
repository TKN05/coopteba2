import React from "react";

const Formulario = ({ fields, formData, setFormData, onSubmit, toggleForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="modal">
      <form onSubmit={onSubmit} className="proyecto-form">
        {fields.map((field) => (
          <div key={field.name} className="form-field">
            <label>{field.label}:</label>
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button type="submit" className="save-btn" onClick={handleChange}>
          + Enviar
        </button>
        <button type="button" className="close-btn" onClick={toggleForm}>
          - Cancelar
        </button>
      </form>
    </div>
  );
};
export default Formulario;

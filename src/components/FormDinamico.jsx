// src/components/FormDinamico.jsx
import { useState } from "react";

const DynamicForm = ({ columns = [], initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {columns.map((col) => (
        <div className="mb-3" key={col.key}>
          <label className="form-label">{col.label}</label>
          <input
            type="text"
            className="form-control"
            value={formData[col.key] ?? ""}
            onChange={(e) => handleChange(e, col.key)}
          />
        </div>
      ))}

      <button type="submit" className="btn btn-success">
        Guardar
      </button>
    </form>
  );
};

export default DynamicForm;

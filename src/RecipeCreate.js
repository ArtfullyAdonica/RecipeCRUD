import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          className="form-control"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine Type"
          className="form-control"
          onChange={handleChange}
          value={formData.cuisine}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="url"
          name="photo"
          placeholder="Photo URL"
          className="form-control"
          onChange={handleChange}
          value={formData.photo}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          className="form-control"
          onChange={handleChange}
          value={formData.ingredients}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="preparation"
          placeholder="Preparation Steps"
          className="form-control"
          onChange={handleChange}
          value={formData.preparation}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Create
      </button>
    </form>
  );
}

export default RecipeCreate;

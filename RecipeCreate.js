import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required
              />
            </td>
            <td>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


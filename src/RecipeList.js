import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>{recipes.length} recipes listed.</caption>
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length ? (
            recipes.map((recipe, index) => (
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td>
                  <img
                    src={recipe.photo}
                    alt="Recipe"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td>
                  <button
                    name="delete"
                    className="btn btn-danger"
                    onClick={() => deleteRecipe(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No recipes listed. Create one now!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RecipeList;

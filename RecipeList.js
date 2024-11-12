import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <section className="mt-3">
      <table className="table table-striped table-bordered">
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
                <td className="align-middle">{recipe.name}</td>
                <td className="align-middle">{recipe.cuisine}</td>
                <td className="align-middle">
                  <img
                    src={recipe.photo}
                    alt="Recipe"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </td>
                <td className="align-middle small">{recipe.ingredients}</td>
                <td className="align-middle small">{recipe.preparation}</td>
                <td className="align-middle">
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


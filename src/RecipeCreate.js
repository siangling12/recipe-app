import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(newRecipe);
    setNewRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
   
      <input
        type="text"
        name="name"
        value={newRecipe.name}
        placeholder="Recipe Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cuisine"
        value={newRecipe.cuisine}
        placeholder="Cuisine"
        onChange={handleChange}
      />
      <input
        type="url"
        name="photo"
        value={newRecipe.photo}
        placeholder="Photo URL"
        onChange={handleChange}
      />
      <textarea
        name="ingredients"
        value={newRecipe.ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
      ></textarea>
      <textarea
        name="preparation"
        value={newRecipe.preparation}
        placeholder="Preparation"
        onChange={handleChange}
      ></textarea>
      
      
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;

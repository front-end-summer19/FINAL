import React from 'react';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import RecipeMaintenance from './RecipeMaintenance';
import EditRecipe from './EditRecipe';

import { Router, Link } from '@reach/router';

class App extends React.Component {
  state = {
    recipes: [],
    tempRecipe: null,
    isLoading: false
  };

  componentDidMount() {
    fetch(`http://localhost:5000/api/recipes`)
      .then(response => response.json())
      .then(recipes =>
        this.setState({
          recipes
        })
      );
  }

  addRecipe = recipe => {
    this.setState({ isLoading: true });
    fetch(`http://localhost:5000/api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(response => response.json())
      .then(recipe => console.log(recipe));
    const recipes = [...this.state.recipes];
    recipes.unshift(recipe);
    this.setState({ recipes: recipes, isLoading: false });
  };

  handleDelete = id => {
    fetch(`http://localhost:5000/api/recipes/${id}`, {
      method: 'DELETE'
    });
    const recipes = [...this.state.recipes];
    recipes.splice(id, 1);
    this.setState({ recipes: recipes });
  };

  // HERE
  updateRecipe = (recipeId, updatedRecipe) => {
    console.log(recipeId);
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedRecipe)
    };
    fetch(`http://localhost:5000/api/recipes/${recipeId}`, options).then(data =>
      console.log(data)
    );
    const recipes = [...this.state.recipes];
    console.log(recipes);
    // this is the problem line
    const thisRecipeId =
      // pos = myArray.map(function(e) { return e.hello; }).indexOf('stevie');
      recipes
        .map(recipe => {
          return recipe._id;
        })
        .indexOf(recipeId);

    console.log(thisRecipeId);
    // recipes._id = recipeId = updatedRecipe;
    // console.log(recipes[recipeId]);
    // this.setState({ recipes });
    // ================

    // const updatedRecipes = recipes.map(recipe => {
    //   if (recipes._id === recipeId) {
    //     recipe = updatedRecipe;
    //   }
    //   return recipe;
    // });
    // this.setState(prevState => {
    //   return { recipes: updatedRecipes };
    // });
    // console.log(updatedRecipes);
  };

  render() {
    if (this.state.isLoading) {
      return 'Loading...';
    }

    return (
      <div>
        <nav>
          <Link to='/'>Home</Link> <Link to='/maintenance'>Maintenance</Link>
        </nav>
        <Router>
          <Recipes path='/' recipes={this.state.recipes} />
          <RecipeDetails path='/recipe/:recipeId' />
          <RecipeMaintenance
            path='/maintenance'
            addRecipe={this.addRecipe}
            recipes={this.state.recipes}
            handleDelete={this.handleDelete}
          />
          <EditRecipe
            path='/editrecipe/:recipeId'
            updateRecipe={this.updateRecipe}
            recipes={this.state.recipes}
          />
        </Router>
        {JSON.stringify(this.state.recipes, null, 2)}
      </div>
    );
  }
}

export default App;

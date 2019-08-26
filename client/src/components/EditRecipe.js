import React from 'react';
// import Recipe from './Recipe';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      title: '',
      description: '',
      image: '',
      isLoading: false
    };
  }

  componentDidMount(props) {
    const currRecipe = this.props.recipes.filter(
      recipe => recipe._id === this.props.recipeId
    );

    console.log(currRecipe[0]);
    this.setState({ recipe: currRecipe[0] });
  }

  handleSubmit = e => {
    e.preventDefault();
    const updatedRecipe = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    };

    this.props.updateRecipe(this.props.recipeId, updatedRecipe);
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleImageChange = event => {
    this.setState({ image: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>Current Recipe</h3>
        {/* <h4>{this.state.recipe}</h4> */}
        {/* <Recipe key={this.state.recipe._id} recipe={this.state.recipe} /> */}
        <form onSubmit={e => this.handleSubmit(e)}>
          <h3>EDIT CURRENT RECIPE</h3>
          {/* <p>Current title: {this.state.recipe.title}</p> */}
          <input
            type='text'
            placeholder='New recipe title'
            name='title'
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            type='text'
            placeholder='Recipe image'
            name='image'
            value={this.state.image}
            onChange={this.handleImageChange}
          />
          <textarea
            type='text'
            placeholder='description'
            name='description'
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input type='file' accept='.jpg, .png' />
          <input
            type='text'
            placeholder='image'
            name='image'
            value={this.state.image}
            onChange={this.handleImageChange}
          />

          <button>Submit</button>
          <h4>Props:</h4>
          {/* {JSON.stringify(this.props.recipes, null, 2)} */}
        </form>
      </div>
    );
  }
}

export default EditRecipe;

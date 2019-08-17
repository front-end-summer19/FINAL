import React from 'react';

class EditRecipe extends React.Component {
  state = {
    recipe: [],
    title: '',
    description: '',
    image: '',
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`http://localhost:5000/api/recipes/${this.props.recipeId}`)
      .then(response => response.json())
      .then(recipe =>
        this.setState({
          recipe: recipe,
          // indexed: recipe.index,
          title: recipe.title,
          image: recipe.image,
          description: recipe.description,
          isLoading: false
        })
      );
  }

  handleSubmit = e => {
    e.preventDefault();
    // let updatedRecipe = new FormData();
    // updatedRecipe.append('title', this.state.title);
    // updatedRecipe.append('description', this.state.description);
    // updatedRecipe.append('image', this.state.image);
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
      <form onSubmit={e => this.handleSubmit(e)}>
        <h3>EDIT RECIPE</h3>
        <p>Current title: {this.state.recipe.title}</p>
        <input
          type='text'
          placeholder='New recipe title'
          name='title'
          value={this.state.title}
          onChange={this.handleTitleChange}
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
      </form>
    );
  }
}

export default EditRecipe;

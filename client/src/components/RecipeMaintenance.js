import React, { Component, createRef } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import { Link } from '@reach/router';

const RedHeader = styled.h3`
  color: #bada55;
`;

class ListRecipes extends Component {
  render() {
    return (
      <ul>
        {this.props.recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/editrecipe/${recipe._id}`}>{recipe.title}</Link>
            <button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              onClick={() => this.props.handleDelete(recipe._id)}
            >
              <FaTimesCircle color="rgb(194, 57, 42)" size={20} />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

class RecipeMaintenance extends Component {
  titleRef = createRef();
  imageRef = createRef();
  descriptionRef = createRef();

  createRecipe(e) {
    e.preventDefault();
    const recipe = {
      title: this.titleRef.current.value,
      image: this.imageRef.current.value,
      description: this.descriptionRef.current.value,
    };
    this.props.addRecipe(recipe);
  }

  render() {
    return (
      <div>
        <RedHeader>Add Recipe Form</RedHeader>
        <form onSubmit={e => this.createRecipe(e)}>
          <input
            type="text"
            placeholder="Recipe Title"
            name="title"
            ref={this.titleRef}
          />
          <input
            type="text"
            placeholder="Image"
            name="image"
            ref={this.imageRef}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            ref={this.descriptionRef}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Upload an Image</h3>
        <FileUpload />
        <h3>Edit Recipe</h3>
        <ListRecipes
          recipes={this.props.recipes}
          handleDelete={this.props.handleDelete}
        />
      </div>
    );
  }
}

export default RecipeMaintenance;

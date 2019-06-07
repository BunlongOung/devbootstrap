import axios from 'axios'

const recipeRequest = () => ({
  type: 'RECIPE_REQUEST'
})

const recipeSuccess = data => ({
  type: 'RECIPE_SUCCESS',
  data: data
})

const recipeFail = () => ({
  type: 'RECIPE_FAIL'
})

export const fetchRecipe = () => {
  return dispatch => {
    dispatch(recipeRequest())
    const endpoint = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'

    axios.get(endpoint)
    .then(response => {
      dispatch(recipeSuccess(response.data.results))
    })
    .catch(error => {
      alert("Not Found");
      dispatch(recipeFail())
    })
  }
}
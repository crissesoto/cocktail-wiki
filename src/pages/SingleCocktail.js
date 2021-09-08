import React, { useCallback, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchSingleConcktail = useCallback( async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const {drinks} = data;


      if (drinks) {
        const silgleCocktail = drinks.map((cocktail) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strCategory, strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = cocktail;
           return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass, instructions: strInstructions, category: strCategory, ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]}
        })
        setCocktail(silgleCocktail);

      }else{
        setCocktail({})
      }
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    fetchSingleConcktail();
  }, [id, fetchSingleConcktail]);

  if (loading) {
    return <Loading />
  }

  if (cocktail) {
    const {name, image, info, glass,instructions, category, ingredients} = cocktail[0];
    return (
      <section className='section cocktail-section'>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item},</span> : null
              })}
            </p>
            <Link to="/" className="card-more">back home</Link>
          </div>
        </div>
      </section>
    )
    
  }else {
    return (
      <div>
        <h2>No extra details found on this coctail.</h2>
      </div>
    )
  }
}

export default SingleCocktail

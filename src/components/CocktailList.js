import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, cocktails} = useGlobalContext();
  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return <h2 className="no-cocktail-title">No cocktail matched your search criteria.</h2>
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map((cocktail, index) => {
            return <Cocktail key={cocktail.id} number={index} {...cocktail} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList

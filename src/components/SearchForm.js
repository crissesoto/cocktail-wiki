import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) =>handleSubmit(e)}>
        <div className="form-control">
          <input type="text" id="name" ref={searchValue} placeholder="Search your favorite cocktail!" onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({handleSubmit}) => {
  return (
    <div className='mb-4'>
        <form onSubmit={handleSubmit}>
            <div className='columns'>
                <div className='row g-1'>
                    <div className='col-3 col-sm-2 col-lg-1'>
                        <label class="col-form-label" for="searchImg">
                            Search: 
                        </label>
                    </div>
                    <div className='col-6 col-sm-8 col-lg-10'>
                        <input className="form-control" type="text" name="search" id="searchImg" aria-labelledby='search-img-label' />
                    </div>
                    <div className='col-3 col-sm-2 col-lg-1'>
                        <button type="submit" className="btn btn-primary">
                            <span className="material-icons">search</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

Search.propTypes = {
    handleSubmit: PropTypes.func,
}

export default Search
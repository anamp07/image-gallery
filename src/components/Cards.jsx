import Card from './Card'
import Search from './Search'
import Loading from './Loading'
import { useFetchImages } from '../hooks/useFetchImages'

const Cards = () => {

    const [images, loading, handleSubmit] = useFetchImages()

  return (
    <div className='text'center>
        <Search handleSubmit={handleSubmit} />
        <div className="columns">

            {loading && <Loading />}

            <div className='row'>
                {
                    images.map((img) => {
                        return (
                            <div key={img.id} className="col-12 col-sm-6 col-md-4">
                                <Card key={img.id} img={img.urls.regular} alt={img.alt_description}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Cards
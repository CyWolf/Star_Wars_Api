import React, { useEffect, useState } from 'react'
import { getAll } from '../../../services/api'

function Starships() {

    const [starships, setStarships] = useState([])

    const getStarships = async () => {
        const starshipsData = await getAll('starships/')
        setStarships(starshipsData.results)
    }
    useEffect(() => {
        getStarships()
    }, [])

    return (
        <div className='mt-5'>
            <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <h3 className='font-family-sw nav-text-color mb-3'>Starships</h3>
            </a>
            <div className="collapse" id="collapseExample">
                <div className="row row-cols-1 row-cols-md-4">
                    {starships.map((item) => {
                        return (
                            <div className="col mb-4">
                                <div className="card-deck" key={item.name}>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="card-title text-center">{item.name}</h6>
                                            <p className="card-text font-family-sw text-center">@</p>
                                        </div>
                                        <div className=" d-flex card-footer justify-content-center">
                                            <button href="#" className="btn btn-warning font-family-sw dib-size">Detailed info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Starships

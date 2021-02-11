import React from 'react'

function DetailedPlanet() {
    return (
        <div>
            <div className='mt-5'>
                <h3 className='font-family-sw nav-text-color mb-3'>Random planet</h3>
                <div className="card-deck">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className=" d-flex card-footer justify-content-center">
                            <button href="#" className="btn btn-warning font-family-sw dib-size">Main page</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailedPlanet
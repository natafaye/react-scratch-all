import React from 'react'

export default function ChairsPage() {
  return (
    <div className="container">
        <div className="row">
            <div className="col bg-chair mb-5 pt-5 ps-5">
                <h1 className="mb-4">Chairs are the best</h1>
                <button className="btn btn-warning btn-lg">Learn More</button>
            </div>
        </div>
        <div className="row text-center mb-5 g-4">
            <div className="col-md">
                <div className="bg-light border p-4">
                    <p>Chairs can be sat on or stood on</p>
                    <button className="btn btn-primary">Buy One</button>
                </div>
            </div>
            <div className="col-md col-lg-6 ">
                <div className="bg-light border p-4">
                    <p>We love people with large screens</p>
                    <button className="btn btn-primary">Buy One</button>
                </div>
            </div>
            <div className="col-md">
                <div className="bg-light border p-4">
                    <p>You want one, you know it</p>
                    <button className="btn btn-primary">Buy One</button>
                </div>
            </div>
        </div>
    </div>
  )
}

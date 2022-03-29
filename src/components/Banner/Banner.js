import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 z">
                        <h1 className="mb-3">Website <span className="text-warning">development</span> without <span className="text-warning">programming knowledge</span> from scratch</h1>
                        <p className="fw-bold mb-4">We porvides our best educational services for our all students and always try to achieve our students trust and satisfaction</p>
                        <button className="btn bg-warning fw-bold rounded-pill hero-btn shadow">Start a course</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
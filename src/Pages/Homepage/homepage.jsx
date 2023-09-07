import React from 'react';

function Homepage() {
  return (
    <div>
      {/* Your existing content */}
      
      {/* Start of the carousel code */}
      <div className="carousel slide mt-1" data-bs-ride="carousel" id="carouselExampleIndicators">
      
        <div className="carousel-indicators">
          <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 4" data-bs-slide-to="3" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 5" data-bs-slide-to="4" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 6" data-bs-slide-to="5" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 7" data-bs-slide-to="6" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 8" data-bs-slide-to="7" data-bs-target="#carouselExampleIndicators" type="button"></button>
          <button aria-label="Slide 9" data-bs-slide-to="8" data-bs-target="#carouselExampleIndicators" type="button"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="Slide 1" className="d-block w-100" src="/Images/slide-1.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Taj Mehal</h2>
              <h5 className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>The Taj Mahal is approximately 369 years old and was built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.</h5>
              <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Slide 2" className="d-block w-100" src="/Images/slide-2.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Bernardo de Melo</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>“The more you study, the more you know; how less you know.” ― Imran Khan</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Slide 3" className="d-block w-100" src="/Images/slide-3.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Bruno Rocha</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>“Never give up, no matter how hard life gets no matter how much pain you feel. Pain will eventually subside, nothing remains forever, so keep going and don't give up.” ― Imran Khan</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img alt="Slide 4" className="d-block w-100" src="/Images/slide-4.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Slide 4</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Description for Slide 4</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div>
          {/* Add more carousel items here */}
           <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-6.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Slide 5</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Description for Slide 5</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div> 
          <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-7.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Slide 5</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Description for Slide 5</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div> 
          <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-8.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Slide 5</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Description for Slide 5</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div> 
          <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-9.jpg"style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Slide 5</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Description for Slide 5</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></p>
            </div>
          </div> 
        </div>
        <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button">
          <span aria-hidden="true" className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button">
          <span aria-hidden="true" className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End of the carousel code */}
      
      {/* More of your content */}
    </div>
  );
}

export default Homepage;

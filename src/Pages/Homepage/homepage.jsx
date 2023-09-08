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
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Taj Mehal | India |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>The Taj Mehal is approximately 369 years old and was built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://www.tajmahal.gov.in" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div>
          <div className="carousel-item">
            <img alt="Slide 2" className="d-block w-100" src="/Images/slide-2.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Colosseum | Rome |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>The Colosseum in Rome, built by Emperor Vespasian and Titus around 70-80 AD, served as an iconic arena for gladiator battles and other public spectacles in ancient Rome.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://colosseo.it/" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div>
          <div className="carousel-item">
            <img alt="Slide 3" className="d-block w-100" src="/Images/slide-3.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Great Pyramid of Giza | Egypet |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>The Great Pyramid of Giza, built around 2560 BC, is the oldest and largest of the Giza pyramids, serving as a monumental tomb for Pharaoh Khufu.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://egymonuments.gov.eg/archaeological-sites/giza-plateau/" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div>
          <div className="carousel-item">
            <img alt="Slide 4" className="d-block w-100" src="/Images/slide-4.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Christ the Redeemer | Brazil |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Christ the Redeemer, a monumental statue of Jesus Christ, stands atop Mount Corcovado in Rio de Janeiro, Brazil. It was completed in 1931 and has become an iconic symbol of both Rio and Christianity worldwide.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://santuariocristoredentor.com.br/" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div>
          {/* Add more carousel items here */}
           <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-6.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>China's Great Wall | China |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>The Great Wall of China is an ancient defensive structure spanning Northern China, built over centuries by various Chinese dynasties. It is one of the world's most iconic architectural marvels.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://www.mutianyugreatwall.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div> 
          <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-7.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Machu Pichu | Pero |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Machu Picchu is an ancient Inca citadel located in Peru. It was built in the 15th century and is renowned for its stunning mountainous setting and well-preserved archaeological ruins.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://www.machupicchu.gob.pe/" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div> 
          <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-8.jpg" style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Easter Island | Chile |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>Easter Island in Chile is renowned for its colossal Moai statues, carved by the ancient Rapa Nui civilization, and remains a captivating archaeological and cultural site.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://www.britannica.com/place/Easter-Island" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

            </div>
          </div> 
          <div className="carousel-item">
            <img alt="Slide 5" className="d-block w-100" src="/Images/slide-9.jpg"style={{ maxHeight: '80vh' }} />
            <div className="carousel-caption">
              <h2 className="animated bounceInRight" style={{ animationDelay: '1s' }}>Stoneage | England |</h2>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>The Stone Age was a prehistoric epoch characterized by the use of stone tools and marked the early stages of human civilization.</p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
  <a href="https://www.english-heritage.org.uk" target="_blank" rel="noopener noreferrer">Learn More</a>
</p>

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

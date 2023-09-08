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
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img alt="Slide 1" className="d-block w-100 opacity-50" src="/Images/slide-1.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight pb-5 text-black font-bold text-3xl" style={{ animationDelay: '1s' }}>Taj Mahal</h2>
                <h5 className="animated bounceInLeft d-none d-md-block text-black font-bold text-2xl" style={{ animationDelay: '2s' }}>Construction of the Taj Mahal began in 1632 and took approximately 22 years to complete. The monument is renowned for its exquisite beauty and meticulous craftsmanship. It is made of white marble adorned with intricate inlays of semi-precious stones and calligraphic inscriptions from the Quran. The main structure consists of a central domed mausoleum flanked by four minarets, surrounded by lush gardens and a reflecting pool.</h5>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="Slide 2" className="d-block w-100 opacity-50" src="/Images/slide-2.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight pb-5 text-black font-bold text-3xl" style={{ animationDelay: '1s' }}>The Colosseum</h2>
                <p className="animated bounceInLeft d-none d-md-block text-black font-bold text-2xl" style={{ animationDelay: '2s' }}>Over the centuries, the Colosseum has faced earthquakes, fires, and looting, which resulted in significant damage. Nevertheless, it remains a symbol of ancient Rome's grandeur and continues to be a popular tourist attraction today, attracting millions of visitors from around the world who come to marvel at its history and architectural magnificence. The Colosseum stands as a testament to the enduring legacy of the Roman Empire and its contributions to the world of architecture and entertainment.</p>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="Slide 3" className="d-block w-100 opacity-50" src="/Images/slide-6.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight pb-5 text-black font-bold text-3xl" style={{ animationDelay: '1s' }}>The Great Wall of China</h2>
                <p className="animated bounceInLeft d-none d-md-block text-black font-bold text-2xl" style={{ animationDelay: '2s' }}>Today, the Great Wall of China is not just a historical relic but a symbol of China's rich cultural heritage and a major tourist attraction. Visitors from around the world come to hike along its rugged terrain and marvel at the breathtaking landscapes it traverses. It serves as a reminder of the determination and unity of the Chinese people throughout history and stands as a lasting symbol of China's enduring legacy.</p>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="Slide 4" className="d-block w-100 opacity-50" src="/Images/christRedeemer1.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight pb-5 text-black font-bold text-3xl" style={{ animationDelay: '1s' }}>Christ the Redeemer</h2>
                <p className="animated bounceInLeft d-none d-md-block text-black  font-bold text-2xl" style={{ animationDelay: '2s' }}>The idea for Christ the Redeemer was conceived in the early 1920s, and construction began in 1926, with French sculptor Paul Landowski contributing to the statue's design, and Brazilian engineer Heitor da Silva Costa overseeing its construction. The statue was completed in 1931, and it stands at a height of 98 feet (30 meters) with an additional 26 feet (8 meters) pedestal, making it a towering presence on the Rio skyline.</p>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
              </div>
            </div>
            {/* Add more carousel items here */}
            <div className="carousel-item">
              <img alt="Slide 5" className="d-block w-100 opacity-50" src="/Images/slide-7.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight text-black pb-5 font-bold text-3xl" style={{ animationDelay: '1s' }}>Machu Picchu</h2>
                <p className="animated bounceInLeft d-none d-md-block text-black  font-bold text-2xl" style={{ animationDelay: '2s' }}>Built in the 15th century during the height of the Inca Empire, Machu Picchu is a testament to the advanced engineering and architectural skills of its creators. The site is situated at an elevation of approximately 7,970 feet (2,430 meters) above sea level and consists of well-preserved stone structures, terraces, temples, and residential areas. It is surrounded by lush, verdant mountains and offers panoramic views of the Urubamba River valley below.</p>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="Slide 6" className="d-block w-100 opacity-50" src="/Images/chichenItza.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight pb-5 text-black font-bold text-3xl" style={{ animationDelay: '1s' }}>Chichén Itzá</h2>
                <p className="animated bounceInLeft d-none d-md-block text-black font-bold text-2xl" style={{ animationDelay: '2s' }}>One of Chichén Itzá's most iconic structures is the Temple of Kukulcan, also known as El Castillo. This step pyramid serves as a calendar and astronomical observatory, with its design reflecting Mayan cosmology. During the spring and autumn equinoxes, the sunlight creates a serpent-like shadow on the pyramid's staircase, giving the illusion of the feathered serpent god, Kukulcan, descending from the heavens.</p>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
              </div>
            </div>
            <div className="carousel-item">
              <img alt="Slide 7" className="d-block w-100 opacity-50" src="/Images/Petra.jpg" style={{ maxHeight: '80vh' }} />
              <div className="carousel-caption">
                <h2 className="animated bounceInRight pb-5 text-black font-bold text-3xl" style={{ animationDelay: '1s' }}>Petra</h2>
                <p className="animated bounceInLeft d-none d-md-block text-black  font-bold text-2xl" style={{ animationDelay: '2s' }}>The history of Petra dates back to the 4th century BC when it was the capital of the Nabataean Kingdom. The city prospered as a major trading hub, strategically located along important trade routes that connected Arabia, Egypt, and the Mediterranean. Its most iconic structure is the Treasury, or Al-Khazneh, which is a beautifully carved temple facade that served as a tomb for a Nabataean king.</p>
                <h5 className="animated bounceInRight" style={{ animationDelay: '3s' }}><a href="#">Learn More</a></h5>
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
        {/* End of the carousel code */}

        {/* More of your content */}
      </div>
    );
  }

  export default Homepage;
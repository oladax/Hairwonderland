// Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css'; 
import './Homeresponsive.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import human3 from '../Home/Wigfolder/istock2_result-removebg-preview - Copy.png'
import human2 from '../Home/Wigfolder/thumbnails2-removebg-preview.png'

function Home() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [human3, human2, /* Add other image paths here */];



  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [images.length]);


  //for changing the content in the stationary box

  const [changeWord, setChanger] = useState(
    {
      First: "Best",
      Second: "Seller!"
    }
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the state based on the current state
      setChanger(prevState => ({
        First: prevState.First === "Best" ? "Quality" : "Best",
        Second: prevState.Second === "Seller!" ? "Hairs!" : "Seller!"
      }));
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="Home">
      <main>
        <div className="Homesubcontainer">
          {/* Content Section */}
          <div className="Home-sub">
            <section className="content-section">
              <div className="content-container">
                <div>
                  <h3>Premium Wigs and Exceptional Human Hairs</h3>
                </div>
                
                <div className="description-para">
                  <p>
                    Discover luxury lace front wigs and bundles at affordable
                    prices. Elevate your style with our high-quality,
                    budget-friendly options. Redefine sophistication
                    effortlessly. Your journey to flawless beauty begins here.
                  </p>
                </div>
                <div className="talk-to-sale">
                  <button>
                    <a href="">
                      Talk to Sales 
                    </a>
                  </button>
                </div>
              </div>
            </section>

            {/* Image Section  */}
            <div className="container">
              <div className="image-container">
                <img src={images[currentImage]} alt="Human hair" />
                <div className="bestseller-container">
                  <div className="stationary-control">
                    <div className="stationary-bg">
                      <span className="stationary-text">
                        {changeWord.First}
                      </span>
                      <span className="stationary-text">
                        {changeWord.Second}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home
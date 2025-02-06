// Content.jsx
import React from 'react';

const Content = () => {
    const buttons = [
        "Top things to do",
        "Entry tickets",
        "Harry Potter tours",
        "City cards",
        "Cruises & boat tours",
        "Hop-on Hop-off tours",
        "Afternoon tea",
        "Aquariums",
        "Museums & exhibitions",
        "Bus & minivan tours",
        "Walking tours",
        "Zoos",
        "Jack the Ripper tours",
        "Lights tours",
        "Speed & jet boat tours",
    ];

    return (
        <div className="content-container">
            <h1 className="content-heading">London</h1>
            <div className="button-container">
                {buttons.map((buttonText, index) => (
                    <button key={index} className={index === 0 ? "active-button" : "default-button"}>
                        {buttonText}
                    </button>

                    
                ))}
      <div className='delicious'>
      <div className='deli1'>
        <div className='main-pic'>
        <div className='pic'> <img src="img/img76.jpg" alt="picture" /> </div>
        </div>
        <div className='content'>
          <h3 className='para'>From London: Harry Potter Warner Bros Studio Tour</h3>
          <button className='para-btn1'>Likely to sell out</button>
          <div className='main-star'>
          <div className='star'> <img src="img/img80.png" alt="logo" width={"100%"} height={"100%"} /> </div>
          <p className='star-para'>4.7 (5,097)</p>
          </div>
          <div className='main-star2'> From $116.29 per person</div>
        </div>
      </div>
      <div className='deli1'>
        <div className='main-pic'>
        <div className='pic'> <img src="img/img77.jpg" alt="picture" /> </div>
      </div>
        <div className='content'>
        <h3 className='para'>  London: Warner Bros. Studio Tour with Return Transportation </h3>
          <button className='para-btn2'>Likely to sell out</button>
          <div className='main-star'>
          <div className='star'> <img src="img/img80.png" alt="logo" width={"100%"} height={"100%"} /> </div>
          <p className='star-para'>4.7 (5,097)</p>
          </div>
          <div className='main-star2'> From $116.08 per person</div>
        </div>
      </div>
      <div className='deli1'>
        <div className='main-pic'>
        <div className='pic'> <img src="img/img78.jpg" alt="" /> </div>
      </div>
        <div className='content'>
        <h3 className='para'> London: City Sightseeing Hop-On Hop-Off Bus Tour </h3>
          <button className='para-btn3'>Likely to sell out</button>
          <div className='main-star'>
          <div className='star'> <img src="img/img80.png" alt="logo" width={"100%"} height={"100%"} /> </div>
          <p className='star-para'>4.7 (5,097)</p>
          </div>
          <div className='main-star2'> From $47.74 per person</div>
        </div>
      </div>
      <div className='deli1'>
        <div className='main-pic'>
      <div className='pic'> <img src="img/img79.jpg" alt="picture" /> </div>
      </div>
        <div className='content'>
        <h3 className='para'>  Harry Potter: Warner Bros. Studio Tour from King's Cross </h3>
          <button className='para-btn4'>Likely to sell out</button>
          <div className='main-star'>
          <div className='star'> <img src="img/img80.png" alt="logo" width={"100%"} height={"100%"} /> </div>
          <p className='star-para'>4.7 (5,097)</p>
          </div>
          <div className='main-star2'> From $120.08 per person</div>
        </div>
      </div>
    </div>
    <div className="container">
      {/* Main Box */}
      <div className="main-box">
        <div className="video-box">
          <video width="100%" height="100%" controls autoplay muted>
            <source src="img/video1.crdownload" type="video/mp4" />
          </video>
        </div>
        <div className='video-btn'>
        <h1>Get the inside scoop on London</h1>
        <p>Local expert laurencottsie guides you through their top picks for an unforgettable visit.</p>
        </div>
          {/* Button Row */}
          <div className="button-row">
          <button>Tower Bridge</button>
          <button>Warner Bros. Studio London</button>
          <button>The London Eye</button>
          <button>Buckingham Palace</button>
        </div>
          <div className='last-btn'>
          <button>The O2 Arena</button>
          </div>
      </div>
    </div>
    </div>
    </div>
    
    );
};

export default Content;

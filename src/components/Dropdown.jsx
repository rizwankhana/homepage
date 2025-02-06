import React, { useState } from "react";

const Dropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeHeading, setActiveHeading] = useState(null);

  // Updated categoryData with flexible content and images
  const categoryData = {
    2: {
      headings: ["Top Sights", "Attraction Types", "Outside London"],
      content: {
        "Top Sights": [
          { text: "Warner Bros. Studio London", imgSrc: "img/img5.webp" },
          { text: "The London Eye", imgSrc: "img/img6.webp" },
          { text: "Tower Of London", imgSrc: "img/img7.webp" },
          { text: "Wembley Stadium", imgSrc: "img/img8.webp" },
          { text: "British Museum", imgSrc: "img/img9.webp" },
          { text: "Big Ben", imgSrc: "img/img10.webp" },
          { text: "Buckingham Palace", imgSrc: "img/img11.webp" },
          { text: "Madame Tussauds London", imgSrc: "img/img12.webp" },
          { text: "Westminster Abbey", imgSrc: "img/img13.webp" },
          { text: "The Shard", imgSrc: "img/img14.webp" },
          { text: "Changing Of The Guard", imgSrc: "img/img15.jpg" },
          { text: "Sky Garden", imgSrc: "img/img15.jpg" },
        ],
        "Attraction Types": [
          { text: "Landmarks & monuments", imgSrc: "img/img16.jpeg" },
          { text: "Castle & palace tours", imgSrc: "img/img17.jpeg" },
          { text: "Day trips", imgSrc: "img/img18.jpeg" },
          { text: "Viewing points", imgSrc: "img/img19.jpeg" },
          { text: "Wellness & spas", imgSrc: "img/img20.jpeg" },
          { text: "Shore excursions", imgSrc: "img/img21.jpeg" },
          { text: "Garden & park tours", imgSrc: "img/img22.jpeg" },
          { text: "Museums & exhibitions", imgSrc: "img/img23.jpeg" },
          { text: "Archaeology", imgSrc: "img/img24.jpeg" },
          { text: "Theme & amusement parks", imgSrc: "img/img25.jpeg" },
          { text: "National parks", imgSrc: "img/img26.jpeg" },
          { text: "Sporting venues", imgSrc: "img/img27.jpeg" },
        ],
        "Outside London": [
          { text: "Oxford Tours", imgSrc: "img/img28.webp" },
          { text: "Windson Tours", imgSrc: "img/img29.webp" },
          { text: "Cambridge England Tours", imgSrc: "img/img30.webp" },
          { text: "Canterbury Tours", imgSrc: "img/img31.webp" },
          { text: "Brighton Tours", imgSrc: "img/img32.webp" },
          { text: "Eastbourne Tours", imgSrc: "img/img33.webp" },
          { text: "River Thames", imgSrc: "img/img34.webp" },
          { text: "Windsor Castle", imgSrc: "img/img35.jpg" },
          { text: "University of Oxford", imgSrc: "img/img36.jpg" },
          { text: "St George's Chapel", imgSrc: "img/img37.jpg" },
          { text: "Bodleian Library", imgSrc: "img/img38.jpg" },
          { text: "University of Cambridge", imgSrc: "img/img39.jpg" },
        ],
      },
    },
    3: {
      headings: ["Top experiences", "Interests", "Traveler type", "Outside London"],
      content: {
        "Top experiences": [
          { text: "Bus & minivan tours", imgSrc: "img/img40.webp" },
          { text: "Ghost & vampire tours", imgSrc: "img/img41.webp" },
          { text: "The Beatles", imgSrc: "img/img42.webp" },
          { text: "Afternoon tea", imgSrc: "img/img43.webp" },
          { text: "Hop-on Hop-off tours", imgSrc: "img/img44.webp" },
          { text: "City cards", imgSrc: "img/img45.webp" },
          { text: "Harry Potter tours", imgSrc: "img/img46.webp" },
          { text: "Jack the Ripper tours", imgSrc: "img/img47.webp" },
          { text: "Rail tours", imgSrc: "img/img48.webp" },
          { text: "Bike tours", imgSrc: "img/img49.webp" },
          { text: "Concerts & operas", imgSrc: "img/img50.webp" },
          { text: "Soccer tickets & stadium tours", imgSrc: "img/img51.webp" },
        ],
        "Interests": [
          { text: "Rainy-day activities", imgSrc: "img/img52.jpeg" },
          { text: "Hidden gems", imgSrc: "img/img53.jpeg" },
          { text: "Shows & musicals", imgSrc: "img/img54.jpeg" },
          { text: "Fitness & health", imgSrc: "img/img55.jpeg" },
          { text: "Outdoor sports", imgSrc: "img/img56.jpeg" },
          { text: "Water sports", imgSrc: "img/img57.wepb" },
          { text: "Food & drinks", imgSrc: "img/img58.jpeg" },
          { text: "Music activities", imgSrc: "img/img59.jpeg" },
          { text: "Nature & adventure", imgSrc: "img/img60.jpeg" },
          { text: "Nightlife & bars", imgSrc: "img/img61.jpeg" },
          { text: "Safaris & wildlife activities", imgSrc: "img/img62.jpeg" },
          { text: "Driving experiences", imgSrc: "img/img63.wepb" },
        ],
        "Traveler type": [
          { text: "Good for groups", imgSrc: "img/img64.jpeg" },
          { text: "Activities for couples", imgSrc: "img/img65.jpeg" },
          { text: "Small group activities", imgSrc: "img/img66.jpeg" },
          { text: "Solo travelers' tours", imgSrc: "img/img67.png" },
          { text: "For adults", imgSrc: "img/img68.png" },
        ],
        "Outside London": [
          { text: "Things to do in Oxford ", imgSrc: "img/img69.jpg" },
          { text: "Things to do in Windsor ", imgSrc: "img/img70.jpg" },
          { text: "Things to do in Cambridge,England", imgSrc: "img/img71.jpg" },
          { text: "Things to do in Canterbury ", imgSrc: "img/img72.jpg" },
          { text: "Things to do in Brighton", imgSrc: "img/img73.jpg" },
          { text: "Things to do in Eastbourne", imgSrc: "img/img74.jpg" },
        ],
      },
    },
    4: {
      headings: ["Trip inspiration"],
      content: {
        "Trip inspiration": [
          { text: "Instagrammable places London", imgSrc: "img/img75.jpg" },
          { text: "Your ultimate guide to visiting Warner Bros Studio,London", imgSrc: "img/img75.jpg" },
          { text: "9 Non-Touristy things to do in London:A local secrets", imgSrc: "img/img75.jpg" },
          { text: "London's 10 Best cultural Attractions", imgSrc: "img/img75.jpg" },
          { text: "Your ultimate guide to visiting Buckingham Palace,London", imgSrc: "img/img75.jpg" },
          { text: "10 Things to do in London for Harry potter Fans", imgSrc: "img/img75.jpg" },
        ],
      },
    },
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveCategory(null);
    }, 100); // Delay to allow mouse transitions between category and content
  };

  return (
    <div className="dropdown-container">
      {/* Header */}
      <div className="dropdown-header">
        <div className="dropdown-category">Category 1</div>
        {[2, 3, 4].map((cat) => (
          <div
            key={cat}
            className={`dropdown-category ${activeCategory === cat ? "active" : ""}`}
            onMouseEnter={() => setActiveCategory(cat)}
          >
            Category {cat}
          </div>
        ))}
      </div>

      {/* Dropdown Content */}
      {activeCategory && (
        <div
          className="dropdown-page"
          onMouseEnter={() => setActiveCategory(activeCategory)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Section */}
          <div className="dropdown-left">
            {categoryData[activeCategory]?.headings.map((heading, index) => (
              <div
                key={index}
                className={`left-heading ${activeHeading === heading ? "active-heading" : ""}`}
                onMouseEnter={() => setActiveHeading(heading)}
              >
                {heading}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="dropdown-right">
            <div className="content-grid">
              {/* Filtering the content based on active heading */}
              {activeHeading &&
                categoryData[activeCategory]?.content[activeHeading]?.map((content, index) => (
                  <div key={index} className="content-item">
                    <div className="rounded-icon">
                      <img src={content.imgSrc} alt={content.text} width={"100%"} height={"100%"} />
                    </div>
                    <span>{content.text}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

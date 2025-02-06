// import React from 'react'

// const Header = () => {
//   return (
//     <div className='main-header'>
//       <div className='head-pic'>
//         <img src="/img/img1.svg" alt="brand logo" width={"100%"} height={"100%"} />
//       </div>
//       <div className='head-search'>
//       <input className='sea1' type="search" placeholder='Search' />
//       <input className='sea2' type="date" />
//       <button className='btn1'>Search</button>
//       </div>
//       <div className='supp'>
//       <span>Become a supplier</span>
//       </div>
//       <div className='biglogo'>
//       <div className='mainlogo'>
//         <div className='logo1'><img src="/img/img2.webp" alt="logo" width={"100%"} height={"100%"} />
//         </div>
//         <div className='logo1'><img src="/img/img3.png" alt="logo" width={"100%"} height={"100%"} />
//         </div>
//         <div className='logo1'><img src="/img/img4.jpg" alt="logo" width={"100%"} height={"100%"} />
//         </div>
//       </div>
//       <div className='secbig'>
//         <span className='b1'>Wishlist</span>
//         <span className='b2'>Cart</span>
//         <span className='b3'>Profile</span>

//       </div>
//         </div>
//     </div>
//   )
// }

// export default Header

import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Install react-datepicker: npm install react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import calendar styles

const Header = () => {
  const [startDate, setStartDate] = useState(null);

  const handlePredefinedDate = (option) => {
    const today = new Date();
    if (option === "Today") {
      setStartDate(today);
    } else if (option === "Tomorrow") {
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setStartDate(tomorrow);
    }
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }) => (
    <div className="calendar-header">
      <button className="predefined-btn" onClick={() => handlePredefinedDate("Today")}>
        Today
      </button>
      <button className="predefined-btn" onClick={() => handlePredefinedDate("Tomorrow")}>
        Tomorrow
      </button>
      <div>
        <button onClick={decreaseMonth}>{"<"}</button>
        <span>{date.toLocaleString("default", { month: "long", year: "numeric" })}</span>
        <button onClick={increaseMonth}>{">"}</button>
      </div>
    </div>
  );

  return (
    <div className="main-header">
      <div className="head-pic">
        <img src="/img/img1.svg" alt="brand logo" width={"100%"} height={"100%"} />
      </div>
      <div className="head-search">
        <input className="sea1" type="search" placeholder="Search" />

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Anytime"
          dateFormat="MMMM d, yyyy"
          renderCustomHeader={renderCustomHeader}
          className="calendar-input"
        />

        <button className="btn1">Search</button>
      </div>
      <div className="supp">
        <span>Become a supplier</span>
      </div>
      <div className="biglogo">
        <div className="mainlogo">
          <div className="logo1">
            <img src="/img/img2.webp" alt="logo" width={"100%"} height={"100%"} />
          </div>
          <div className="logo1">
            <img src="/img/img3.png" alt="logo" width={"100%"} height={"100%"} />
          </div>
          <div className="logo1">
            <img src="/img/img4.jpg" alt="logo" width={"100%"} height={"100%"} />
          </div>
        </div>
        <div className="secbig">
          <span className="b1">Wishlist</span>
          <span className="b2">Cart</span>
          <span className="b3">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

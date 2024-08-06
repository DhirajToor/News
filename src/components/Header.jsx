import React, { useState, useEffect } from "react";
import Search from "./Search";
import { Link } from 'react-router-dom'
import countries from "./countries";
import downArrow from './../assets/downarrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './Header.css'
import logo from '../assets/toor.png'


function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const [theme, setTheme] = useState("light-theme");
  let category = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  function toggleTheme() {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    }
    else {
      setTheme("light-theme")
    }
  }

  
  return (
    <header className="">
      <nav className="navigation flex flex-row sm:justify-around items-center xs:justify-between xs:px-3">
      
      <img src={logo} alt="" width={50} height={50}/>
        <h3 className="heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50">Toor News </h3>

        <ul className={active ? "  nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
          <li><Link className="gold no-underline font-semibold" to="/" onClick={() => { setActive(!active) }}>All News</Link></li>
          <li className="dropdown-li"><Link className="gold no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false) }}>Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "gold down-arrow-icon down-arrow-icon-active" : "gold down-arrow-icon"} icon={faCircleArrowDown} /></Link>

            <ul className={showCategoryDropdown ? " dropdown p-2 show-dropdown" : "dropdown p-2"}>
              {category.map((element, index) => {
                return (
                  <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown) }}>

                    <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      {element}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="gold dropdown-li"><Link className="gold no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false) }}>Country <FontAwesomeIcon className={showCountryDropdown ? "gold down-arrow-icon down-arrow-icon-active" : "gold down-arrow-icon"} icon={faCircleArrowDown} /></Link>
            <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
              {countries.map((element, index) => {
                return (
                  <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown) }}>
                    <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn"
                      onClick={() => {
                        setActive(!active)
                      }}>
                      <img
                        src={element?.png}
                        srcset={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                   
                        alt={element?.countryName} />
                      <span>{element?.countryName}</span>
                    </Link>
                  </li>
                )
              })}

              <li>
                <Link to={"/uploadNews"}> upload News</Link>
              </li>
            </ul>
          </li>
       
        </ul>
        <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active) }}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
      {/* <Search /> */}
    </header>
  );
}

export default Header;
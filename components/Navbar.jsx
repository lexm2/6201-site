"use client";

import {
  RiMenuLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiFlashlightLine,
  RiBookmarkLine,
  RiFilePaper2Line,
  RiPenNibLine,
  RiApps2Line,
  RiCommunityLine,
  RiShieldLine,
  RiHeart3Line,
  RiCodeLine,
  RiQuestionFill,
} from "react-icons/ri";
import React, { useEffect, useCallback, useRef, useState } from "react";
import "../styles/NavbarStyles.css";

//TODO: Make this code less scuffed (mainly the startDropdown thing)


const Navbar = () => {
  const [startDropdown, setIsStartDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const toggle = useRef();
  const nav = useRef();

  const startDropdowns = useCallback(() => {
    setDropdownItems(Array.from(document.querySelectorAll(".dropdown__item")));
    // 1. Select each dropdown item
    dropdownItems.forEach((item) => {
      const dropdownButton = item.querySelector(".dropdown__button");

      // 2. Select each button click
      dropdownButton.current.addEventListener("click", () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector(".show-dropdown");

        // 5. Call the toggleItem function
        toggleItem(item);

        // 8. Remove the show-dropdown class from other items
        if (showDropdown && showDropdown !== item) {
          toggleItem(showDropdown);
        }
      });
    });
  });

  const showMenu = useCallback(() => {
    nav.current.classList.toggle("show-menu");
    toggle.current.classList.toggle("show-icon");

    if (!startDropdown) {
      startDropdowns();
      setIsStartDropdown(true);
    }
  }, []);

  // 3. Create a function to display the dropdown
  const toggleItem = useCallback((item) => {
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector(".dropdown__container");

    // 6. If the same item contains the show-dropdown class, remove
    if (item.classList.contains("show-dropdown")) {
      dropdownContainer.removeAttribute("style");
      item.classList.remove("show-dropdown");
    } else {
      // 4. Add the maximum height to the dropdown content and add the show-dropdown class
      dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
      item.classList.add("show-dropdown");
    }
  });

  useEffect(() => {
    /*=============== DELETE DROPDOWN STYLES ===============*/
    const mediaQuery = matchMedia("(min-width: 1118px)"),
      dropdownContainer = document.querySelectorAll(".dropdown__container");

    // Function to remove dropdown styles in mobile mode when browser resizes
    const removeStyle = () => {
      // Validate if the media query reaches 1118px
      if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
          e.removeAttribute("style");
        });

        if (!startDropdown) {
          startDropdowns();
          setIsStartDropdown(true);
        }
        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) => {
          e.classList.remove("show-dropdown");
        });
      }
    };

    window.addEventListener("resize", removeStyle);
  });

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <a href="#" className="nav__logo">
            <i>
              <RiQuestionFill />
            </i>{" "}
            Highlanders
          </a>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={showMenu}
            ref={toggle}
          >
            <i className="nav__toggle-menu">
              <RiMenuLine />
            </i>
            <i className="nav__toggle-close">
              <RiCloseLine />
            </i>
          </div>
        </div>

        {/*=============== NAV MENU ===============*/}
        <div className="nav__menu" id="nav-menu" ref={nav}>
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>

            {/*=============== DROPDOWN 1 ===============*/}
            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Discover <RiArrowDownSLine className="dropdown__arrow" />
              </div>

              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiFlashlightLine />
                      </i>
                    </div>

                    <span className="dropdown__title">Lightning</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiHeart3Line />
                      </i>
                    </div>

                    <span className="dropdown__title">Heart</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiBookmarkLine />
                      </i>
                    </div>

                    <span className="dropdown__title">Book</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiFilePaper2Line />
                      </i>
                    </div>

                    <span className="dropdown__title">File-paper</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/*=============== DROPDOWN 2 ===============*/}
            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Resources Discover{" "}
                <RiArrowDownSLine className="dropdown__arrow" />
              </div>

              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiCodeLine />
                      </i>
                    </div>

                    <span className="dropdown__title">Code-line</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiPenNibLine />
                      </i>
                    </div>

                    <span className="dropdown__title">Pen-nib</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiApps2Line />
                      </i>
                    </div>

                    <span className="dropdown__title">Apps-line</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Test
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="nav__link">
                Sponsor
              </a>
            </li>

            {/*=============== DROPDOWN 3 ===============*/}
            <li className="dropdown__item">
              <div className="nav__link dropdown__button">
                Team Discover <RiArrowDownSLine className="dropdown__arrow" />
              </div>

              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiCommunityLine />
                      </i>
                    </div>

                    <span className="dropdown__title">About us</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          About us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <i>
                        <RiShieldLine />
                      </i>
                    </div>

                    <span className="dropdown__title">Safety and quality</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Cookie settings
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

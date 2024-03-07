import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

//////////////////////////////////////////////
import { useDispatch } from "react-redux";
import { setIsHeader } from "../../features/globals/globalSlice";

// site logo image
import mainSiteLogo from "../../assets/images/site-logo/jms-site-logo.jpg";

// icons
import { FiPhone } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";

const AddisHeader = () => {
  // local state
  const [isHome, setIsHome] = useState(true);
  const [isPhone, setIsPhone] = useState(false);
  const [isBlogging, setIsBlogging] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isTutorial, setIsTutorial] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isOurTeam, setIsOurTeam] = useState(false);
  const [isContactUs, setIsContactUs] = useState(false);

  const dispatch = useDispatch();

  return (
    <header className="p1-3">
      {/* top header */}
      <div className=" py-3 border-b border-gray-200 px-[1%] flex items-center justify-between relative">
        {/* left */}
        <div>left</div>
        {/* center */}
        <div className="flex items-center justify-center">
          {/* site logo */}
          <div>
            <NavLink to={"/"}>
              <img
                src={mainSiteLogo}
                alt="site logo"
                className="w-[64px] h-[64px]"
              />
            </NavLink>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end gap-x-3">
          {/* call */}
          <div className="relative">
            <button
              className="flex items-center gap-x-1 border-4 border-gray-900 rounded-full py-1 px-4 transition-all ease-in-out duration-150 hover:bg-gray-600 hover:border-gray-600 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIsPhone(!isPhone);
              }}
            >
              <FiPhone className="text-2xl" />
              {isPhone ? (
                <IoIosArrowUp className="text-lg" />
              ) : (
                <IoIosArrowDown className="text-lg" />
              )}
            </button>
            {/* call detail */}
            {isPhone ? (
              <div className="absolute left-0 top-[160%] z-50 bg-white w-max p-5 shadow-lg">
                <div className="font-semibold">
                  <h3>Talk To Legal Zoom</h3>
                  <h3>(855) 787-1922</h3>
                </div>
                <h3 className="font-semibold my-3">Customer Care hours</h3>
                <div className="flex flex-col">
                  <span>Mon–Fri 5 a.m.–7 p.m. PT</span>
                  <span>Weekends 7 a.m.–4 p.m. PT</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* search */}
          <div
            className="border-4 rounded-full border-gray-900 p-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-gray-600 hover:border-gray-600 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsSearch(true);
              setIsPhone(false);
            }}
          >
            <FiSearch className="text-2xl" />
          </div>
          {/* singup */}
          <div>
            <NavLink
              to={"/dashboard/customer/"}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setIsHeader(false));
              }}
              className={
                "px-5 py-2 text-lg text-white bg-black rounded-full font-semibold transition-all ease-in-out duration-150 hover:bg-gray-600"
              }
            >
              sign in
            </NavLink>
          </div>
        </div>
        {/* search bar container */}
        {isSearch ? (
          <div className="absolute left-0 bottom-0 h-full z-30 bg-white w-full flex items-center justify-end pr-[10%]">
            <div className="flex items-center justify-center">
              {/* search bar */}
              <div className="flex items-center justify-center bg-white rounded-full border-4 py-2 border-gray-900">
                <FiSearch className="text-xl ml-1" />
                <input
                  type="text"
                  placeholder="search"
                  className="focus:outline-none focus:ring-0 bg-transparent border-none h-[20px] w-[450px]"
                />
              </div>
              {/* search bar close */}
              <div>
                <button
                  className="mx-1 text-2xl"
                  onClick={() => {
                    setIsSearch(false);
                    setIsPhone(false);
                  }}
                >
                  <GrClose />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* bottom header */}
      <div className="py-3 border-b border-gray-200 px-[1%] flex items-center justify-center">
        {/* actual nav */}
        <div>
          <ul className="flex items-center justify-center gap-x-5 uppercase">
            <li>
              <NavLink
                className={`${isHome ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServices(false);
                  setIsTutorial(false);
                  setIsPortfolio(false);
                  setIsOurTeam(false);
                  setIsBlogging(false);
                  setIsContactUs(false);
                  setIsHome(true);
                }}
              >
                Home
              </NavLink>
            </li>
            <li
              className={`flex items-center cursor-pointer gap-x-1 relative ${
                isServices ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsTutorial(false);
                setIsPortfolio(false);
                setIsOurTeam(false);
                setIsServices(!isServices);
              }}
            >
              <span>Services</span>
              {isServices ? (
                <IoIosArrowUp className="text-xl ml-1" />
              ) : (
                <IoIosArrowDown className="text-xl ml-1" />
              )}
              {/* pop nav */}
              {isServices ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white absolute left-0 top-[150%] z-[1200] w-max p-3 px-5 shadow-lg font-normal"
                >
                  <li className="my-2">
                    <NavLink>ServiceSubMenu-1</NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink>ServiceSubMenu-2</NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink>ServiceSubMenu-3</NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li>
              <NavLink
                className={`${isBlogging ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServices(false);
                  setIsTutorial(false);
                  setIsPortfolio(false);
                  setIsOurTeam(false);
                  setIsHome(false);
                  setIsContactUs(false);
                  setIsBlogging(true);
                }}
              >
                Blogging
              </NavLink>
            </li>
            <li
              className={`flex items-center cursor-pointer relative ${
                isTutorial ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsServices(false);
                setIsPortfolio(false);
                setIsOurTeam(false);
                setIsTutorial(!isTutorial);
              }}
            >
              <span>Tutorial</span>
              {isTutorial ? (
                <IoIosArrowUp className="ml-1 text-xl" />
              ) : (
                <IoIosArrowDown className="ml-1 text-xl" />
              )}
              {/* pop nav */}
              {isTutorial ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white absolute left-0 top-[150%] z-[1200] w-max p-3 px-5 shadow-lg font-normal"
                >
                  <li className="my-2">
                    <NavLink>TutorialSubMenu-1</NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink>TutorialSubMenu-2</NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink>TutorialSubMenu-3</NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li
              className={`flex items-center cursor-pointer relative ${
                isPortfolio ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsServices(false);
                setIsTutorial(false);
                setIsOurTeam(false);
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsPortfolio(!isPortfolio);
              }}
            >
              <span>Portfolio</span>
              {isPortfolio ? (
                <IoIosArrowUp className="text-xl ml-1" />
              ) : (
                <IoIosArrowDown className="text-xl ml-1" />
              )}
              {/* pop nav */}
              {isPortfolio ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white absolute left-0 top-[150%] z-[1200] w-max p-3 px-5 shadow-lg font-normal"
                >
                  <li className="my-2">
                    <NavLink>PortfolioSubMenu-1</NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink>PortfolioSubMenu-2</NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink>PortfolioSubMenu-3</NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li
              className={`flex items-center cursor-pointer relative ${
                isOurTeam ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsServices(false);
                setIsTutorial(false);
                setIsPortfolio(false);
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsOurTeam(!isOurTeam);
              }}
            >
              <span>Our Team</span>
              {isOurTeam ? (
                <IoIosArrowUp className="text-xl ml-1" />
              ) : (
                <IoIosArrowDown className="text-xl ml-1" />
              )}
              {/* pop nav */}
              {isOurTeam ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white absolute left-0 top-[150%] z-[1200] w-max p-3 px-5 shadow-lg font-normal"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <li className="my-2">
                    <NavLink
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      OurTeamSubMenu-1
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      OurTeamSubMenu-2
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      OurTeamSubMenu-3
                    </NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li>
              <NavLink
                className={`${isContactUs ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsHome(false);
                  setIsBlogging(false);
                  setIsServices(false);
                  setIsTutorial(false);
                  setIsPortfolio(false);
                  setIsOurTeam(false);
                  setIsContactUs(true);
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default AddisHeader;
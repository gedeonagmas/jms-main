import { useState } from "react";
import { NavLink } from "react-router-dom";

// site logo
import siteMainLogo from "../../../../assets/images/site-logo/jms-site-logo.jpg";
import callCenter from "../../../../assets/images/call-center/call-center-1.png";

////////////////////////////////////////////////
import { useDispatch } from "react-redux";
import { setIsHeader } from "../../../../features/globals/globalSlice";

//icons
import {
  IoIosArrowDown,
  IoMdNotifications,
  IoIosArrowUp,
} from "react-icons/io";
import {
  MdClose,
  MdOutlineHomeRepairService,
  MdMessage,
  MdDashboard,
} from "react-icons/md";
import { FaClock, FaRegChartBar } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { GrCompliance } from "react-icons/gr";
import { TiGlobe } from "react-icons/ti";
import { IoExitSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
// main
// CustomerLeftSideNav
const CustomerLeftSideNav = () => {
  // local states
  // nav controller states
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isMyChartOpen, setIsMyChartOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isOtherServiceOpen, setIsOtherServiceOpen] = useState(false);

  // hooks
  const dispatch = useDispatch();

  // customer dashboard left side bar toggler
  const customerDashBoardLeftSideBarToggler = () => {
    let customerDashBoardLeftSideBar = document.getElementById(
      "customer-dashboard-leftside-nav-bar"
    );
    if (customerDashBoardLeftSideBar?.classList.contains("left-[-100vw]")) {
      customerDashBoardLeftSideBar?.classList.remove("left-[-100vw]");
      customerDashBoardLeftSideBar?.classList.add("left-0");
    } else {
      customerDashBoardLeftSideBar?.classList.add("left-[-100vw]");
      customerDashBoardLeftSideBar?.classList.remove("left-0");
    }
  };

  return (
    <div
      className="absolute left-[-100vw] h-full bg-white z-[300] border-r border-gray-300 lg:border-none lg:relative lg:left-0 w-[20%] min-w-[200px] flex flex-col justify-between pl-[2%] text-[1rem]"
      id="customer-dashboard-leftside-nav-bar"
    >
      {/* logo and nav container */}
      <div className="relative">
        {/* close btn container */}
        <div className="absolute top-1 right-1 lg:hidden">
          <button
            className="text-3xl text-gray-500"
            onClick={(e) => {
              e.stopPropagation();
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <MdClose />
          </button>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center pt-[7%]">
          <NavLink
            to={"/"}
            className={"flex items-center justify-center"}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setIsHeader(true));
            }}
          >
            {/* icon */}
            <img src={siteMainLogo} alt="" className="w-[64px] h-[64px]" />
            <span className="text-gray-700 font-bold">MACOTA</span>
          </NavLink>
        </div>
        {/* nav container */}
        <div className="pt-[9%] text-gray-700 text-[1rem]">
          {/* Dashboard */}
          <NavLink
            to={`/dashboard/customer`}
            className={`flex items-center my-5`}
            onClick={(e) => {
              setIsComplianceOpen(false);
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <MdDashboard className="text-lg mr-2" />
            <span>Dashboard</span>
          </NavLink>
          {/* Compliance */}
          <div className="my-5 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsMyChartOpen(false);
                setIsFinanceOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(!isComplianceOpen);
              }}
            >
              <div className="flex items-center">
                <GrCompliance
                  className={`mr-2 text-lg ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>Compliance</span>
              </div>
              {/* icon */}
              {isComplianceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isComplianceOpen ? (
              <div className="font-normal mt-2 bg-white">
                <NavLink
                  to={`/dashboard/customer/new-case`}
                  className="pl-[20%] py-1 bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    customerDashBoardLeftSideBarToggler();
                  }}
                >
                  New Case
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* My Chart */}
          <div className="my-5 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsFinanceOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(false);
                setIsMyChartOpen(!isMyChartOpen);
              }}
            >
              <div className="flex items-center">
                <FaRegChartBar
                  className={`mr-2 text-lg ${
                    isMyChartOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>My Chart</span>
              </div>
              {/* icon */}
              {isMyChartOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isMyChartOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isMyChartOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isMyChartOpen ? (
              <div className="font-normal relative">
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Case Team
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Active Case
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Closed Case
                  </NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* message */}
          <NavLink
            className={`flex items-center my-5`}
            onClick={(e) => {
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              setIsComplianceOpen(false);
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <MdMessage className="text-lg mr-2" />
            <span>Message</span>
          </NavLink>
          {/* appointment */}
          <NavLink
            className={`flex items-center my-5`}
            onClick={(e) => {
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              setIsComplianceOpen(false);
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <FaClock className="text-lg mr-2" />
            <span>Appointment</span>
          </NavLink>
          {/* Finance */}
          <div className="my-5 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsMyChartOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(false);
                setIsFinanceOpen(!isFinanceOpen);
              }}
            >
              <div className="flex items-center">
                <SiCashapp
                  className={`mr-2 text-lg ${
                    isFinanceOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>Finance</span>
              </div>
              {/* icon */}
              {isMyChartOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isFinanceOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isFinanceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isFinanceOpen ? (
              <div className="font-normal relative">
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Add Funds
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Requested Payment
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Refund Funds
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Recent Transactions
                  </NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* other services */}
          <div className="my-5 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsMyChartOpen(false);
                setIsFinanceOpen(false);
                setIsComplianceOpen(false);
                setIsOtherServiceOpen(!isOtherServiceOpen);
              }}
            >
              <div className="flex items-center">
                <MdOutlineHomeRepairService
                  className={`mr-2 text-lg ${
                    isOtherServiceOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>Other Services</span>
              </div>
              {/* icon */}
              {isOtherServiceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isOtherServiceOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isOtherServiceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isOtherServiceOpen ? (
              <div className="font-normal relative">
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Traning
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Consulting
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Researches
                  </NavLink>
                  <NavLink
                    className="pl-[20%] py-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Recent Transactions
                  </NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* button container */}
      <div>
        {/* top */}
        <div className="p-3 rounded-md bg-sky-100 flex flex-col items-center justify-between mb-5">
          <h3 className="font-bold">Upgrade your plan</h3>
          <h3 className="font-bold">To get pro service</h3>
          <div className="my-1">
            <img
              src={callCenter}
              alt=""
              className="w-[150px] h-[130px] rounded-md"
            />
          </div>
          <button className="px-3 py-1 rounded-full text-white bg-green-500 flex items-center justify-center">
            <FaPhoneVolume className="text-xl mr-1" />{" "}
            <span className="font-bold text-lg">#1234</span>
          </button>
        </div>
        {/* bottom */}
        <div>
          <button className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
            <IoExitSharp className="text-xl mr-1" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerLeftSideNav;
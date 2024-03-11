import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { MdAccountBalance } from "react-icons/md";
// data
import { cunsultations } from "../../../../DataFile";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Backup from "@mui/icons-material/Backup";
// main
// NewCase
const NewCase = () => {
  // local states
  const [isAllTypeOpen, setIsAllTypeOpen] = useState(false);
  const [allTypeHeaderText, setAllTypeHeaderText] = useState("All Types");
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [allCityHeaderText, setAllCityHeaderText] = useState("All Cities");
  const [isAge, setIsAge] = useState(false);
  const [ageHeaderText, setAgeHeaderText] = useState("35+");
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [genderHeaderText, setGenderHeaderText] = useState("All");
  const [caseType, setCaseType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [category, setCategory] = useState("");
  const [caseName, setCaseName] = useState("");
  const [lawyer, setLawyer] = useState("");

  // stepper count
  const [stepper, setStepper] = useState(0);

  // stepper count
  // const [stepper, setStepper] = useState(0);

  // handle all type
  const handleAllTypeSelection = (text) => {
    // filtere here
    setAllTypeHeaderText(text);
  };
  // handle all type
  const handleCitySelection = (text) => {
    // filtere here
    setAllCityHeaderText(text);
  };
  // handle all type
  const handleAgeSelection = (text) => {
    // filtere here
    setAgeHeaderText(text);
  };
  // handle all type
  const handleGenderSelection = (text) => {
    // filtere here
    setGenderHeaderText(text);
  };

  console.log(serviceType, "service type");
  return (
    <div className="bg-gray-100 h-auto">
      <header className="h-max bg-sky-100 -ml-10 grid grid-cols-4">
        {/* circle and bar */}
        <div className="flex gap-2 items-center justify-center w-full">
          {/* step-0 */}
          <div>
            <h3 className="text-2xl mr-1 font-black">01</h3>
          </div>
          {/* bar-0 */}
          <div className={`${stepper > 0 ? "text-blue-700" : "text-black"}`}>
            <h3 className="font-bold text-sm">Case Type</h3>
            <span className="text-xs">Select your</span>
            <p className="text-xs">case</p>
          </div>
        </div>
        {/* circle and bar */}
        <div className="flex items-center justify-center gap-2 w-full">
          {/* step-0 */}
          <div>
            <h3 className="text-2xl mr-1 font-black">02</h3>
          </div>
          {/* bar-0 */}
          <div
            className={`${stepper >= 1 ? "text-blue-700" : "text-gray-700"}`}
          >
            <h3 className="font-bold text-sm">Service Type</h3>
            <span className="text-xs">Select your</span>
            <p className="text-xs">service</p>
          </div>
        </div>
        {/* circle and bar */}
        <div className="flex items-center gap-2 justify-center w-full">
          {/* step-0 */}
          <div>
            <h3 className="text-2xl mr-1 font-black">03</h3>
          </div>
          {/* bar-0 */}
          <div
            className={`${stepper >= 2 ? "text-blue-700" : "text-gray-700"}`}
          >
            <h3 className="font-bold text-sm">Case Type</h3>
            <span className="text-xs">Contrat Explore</span>
            <p className="text-xs">name</p>
          </div>
        </div>
        {/* circle and bar */}
        <div className="flex gap-2 items-center justify-center w-full">
          {/* step-0 */}
          <div>
            <h3 className="text-2xl mr-1 font-black">01</h3>
          </div>
          {/* bar-0 */}
          <div
            className={`${stepper >= 3 ? "text-blue-700" : "text-gray-700"}`}
          >
            <h3 className="font-bold text-sm">Case Type</h3>
            <span className="text-xs">Contrat Explore</span>
            <p className="text-xs">name</p>
          </div>
        </div>
      </header>
      <header className="h-[42px] bg-sky-100 flex items-center justify-center">
        {/* circle and bar */}
        <div className="flex items-center justify-center">
          {/* step-0 */}
          <div
            className={`${
              stepper >= 0 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setStepper(0);
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-0 */}
          <div
            className={`${stepper > 0 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 1 */}
          <div
            className={`${
              stepper >= 1 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (stepper > 1) {
                setStepper(1);
              }
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-1 */}
          <div
            className={`${stepper > 1 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 2 */}
          <div
            className={`${
              stepper >= 2 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (stepper > 2) {
                setStepper(2);
              }
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-2 */}
          <div
            className={`${stepper > 2 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 3 */}
          <div
            className={`${
              stepper >= 3 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (stepper > 3) {
                setStepper(3);
              }
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-3 */}
          <div
            className={`${stepper > 3 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 4 */}
          <div
            className={`${
              stepper >= 4 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              console.log(4);
            }}
          >
            <TiTick className="text-xl" />
          </div>
        </div>
      </header>

      {/* content */}
      {/* steps */}
      <div className="h-[75vh] overflow-y-scroll">
        {stepper === 0 ? (
          <div className="flex items-center justify-center">
            <div className="w-full h-auto flex flex-col items-start px-2 justify-start">
              <h5 class="mb-2 text-2xl mt-7 font-bold tracking-tight text-gray-900 dark:text-white">
                Select your case type
              </h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                deserunt laboriosam doloribus exercitationem temporibus sint
                molestias eius quae quam maiores obcaecati quos repellat fugit
                mollitia repellendus dolores vero, cumque necessitatibus!
              </p>
              <div className="flex w-full p-10 gap-10 justify-between items-center">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Civil
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCaseType("civil");
                      setStepper(1);
                    }}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Select
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Criminal
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCaseType("criminal");
                      setStepper(1);
                    }}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Select
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* <button
              className="px-5 py-1 rounded-sm bg-blue-700 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setStepper(1);
              }}
            >
              Next
            </button> */}
            </div>
          </div>
        ) : stepper === 1 ? (
          <div className="flex items-center pb-10 justify-center">
            <div className="w-full h-auto flex flex-col px-3 items-start justify-start">
              <h5 class="mb-2 text-2xl mt-7 font-bold tracking-tight text-gray-900 dark:text-white">
                Select your case category
              </h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                deserunt laboriosam doloribus exercitationem temporibus sint
                molestias eius quae quam maiores obcaecati quos repellat fugit
                mollitia repellendus dolores vero, cumque necessitatibus!
              </p>
              <p className="py-2">Family</p>
              <div class="flex items-center mb-4">
                <input
                  onChange={(e) => {
                    setCaseName("family");
                    setServiceType(e.target.checked ? "divorce" : null);
                  }}
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-3"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Divorce
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  onChange={(e) => {
                    setCaseName("family");
                    setServiceType(e.target.checked ? "adoption" : null);
                  }}
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Adoption
                </label>
              </div>

              <div className="flex my-5 items-center justify-between gap-x-5">
                <button
                  className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setStepper(0);
                  }}
                >
                  back
                </button>
                <button
                  className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setStepper(2);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : stepper === 2 ? (
          <div className="flex items-center pb-10 justify-center">
            <div className="w-full h-auto flex flex-col px-3 items-start justify-start">
              <h5 class="mb-2 text-2xl mt-7 font-bold tracking-tight text-gray-900 dark:text-white">
                Select your servic type
              </h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                deserunt laboriosam doloribus exercitationem temporibus sint
                molestias eius quae quam maiores obcaecati quos repellat fugit
                mollitia repellendus dolores vero, cumque necessitatibus!
              </p>
              <div className="flex relative w-full mt-7 gap-5 justify-between items-start">
                <div className="flex w-[200px] flex-col gap-1 items-start justify-start">
                  <p className="text-lg font-bold py-1">Check your service</p>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Legal information
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      onChange={(e) => setCategory("Due diligence")}
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-3"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Due diligence
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      onChange={(e) => setCategory("Due diligence")}
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Legal draft
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      onChange={(e) => setCategory("Due diligence")}
                      id="default-radio-4"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Legal advisory
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <label
                      for="default-radio-5"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Court representation
                    </label>
                  </div>
                  <div class="flex ml-10 items-center mb-4">
                    <input
                      onChange={(e) => setCategory("Due diligence")}
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Legal advisory
                    </label>
                  </div>
                  <div class="flex ml-10 items-center mb-4">
                    <input
                      onChange={(e) => setCategory("Due diligence")}
                      id="default-radio-6"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Legal advisory
                    </label>
                  </div>
                </div>
                <div className="flex relative ck-editor__editable ck-editor__editable_inline flex-col gap-1 items-start justify-start">
                  <p className="text-lg font-bold py-1">
                    Write your description
                  </p>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={(editor) => {
                      console.log(
                        "CKEditor5 React Component is ready to use!",
                        editor
                      );
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDescription("description text here");
                      console.log({ event, editor, data });
                    }}
                  />
                </div>
              </div>

              <p className="text-lg flex items-center justify-center gap-1 mt-8 font-bold py-1">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 3v4c0 .6-.4 1-1 1H5m4 6 2 2 4-4m4-8v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1Z"
                  />
                </svg>{" "}
                Additional documents
                <span className="text-xs text-gray-400 ml-1">
                  (file must be less than 5 MB)
                </span>
              </p>

              <div className="flex gap-2 mt-4">
                <div className="px-3 w-36 cursor-pointer py-8 flex-col rounded-lg border hover:bg-blue-300 hover:text-white border-blue-200 flex items-center justify-center">
                  <Backup />
                  <p className="text-sm">upload your file</p>
                  <p className="text-sm text-blue-500">here</p>
                </div>
                <div className="px-3 w-36 cursor-pointer py-8 flex-col rounded-lg border hover:bg-blue-300 hover:text-white border-blue-200 flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div className="px-3 w-36 cursor-pointer py-8 flex-col rounded-lg border hover:bg-blue-300 hover:text-white border-blue-200 flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div className="px-3 w-36 cursor-pointer py-8 flex-col rounded-lg border hover:bg-blue-300 hover:text-white border-blue-200 flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <button
                  className="px-5 self-center ml-4 py-2 rounded-md mt-3 bg-yellow-500 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setStepper(3);
                  }}
                >
                  Next
                </button>
              </div>

              {/* <div className="flex items-center justify-between gap-x-5">
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setStepper(0);
                }}
              >
                back
              </button> */}

              {/* </div> */}
            </div>
          </div>
        ) : stepper === 3 ? (
          <div className="bg-white m-2 rounded-sm">
            <header className="flex items-center justify-between gap-3 py-2 px-[5%] border-b border-gray-200 rounded-sm">
              {/* all type */}
              <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
                <span className="text-gray-500">Type of counceling</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{allTypeHeaderText}</h3>
                  <button
                    className="text-lg"
                    onClick={() => {
                      setIsAllTypeOpen(!isAllTypeOpen);
                    }}
                  >
                    {isAllTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                {isAllTypeOpen ? (
                  <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                    <ul>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsAllTypeOpen(false);
                          handleAllTypeSelection("All Types");
                        }}
                      >
                        <NavLink>All Types</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsAllTypeOpen(false);
                          handleAllTypeSelection("Option One");
                        }}
                      >
                        <NavLink>Option One</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsAllTypeOpen(false);
                          handleAllTypeSelection("Option Two");
                        }}
                      >
                        <NavLink>Option Two</NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {/* cities */}
              <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
                <span className="text-gray-500">City</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{allCityHeaderText}</h3>
                  <button
                    className="text-lg"
                    onClick={() => {
                      setIsCityOpen(!isCityOpen);
                    }}
                  >
                    {isCityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                {isCityOpen ? (
                  <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                    <ul>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsCityOpen(false);
                          handleCitySelection("All Cities");
                        }}
                      >
                        <NavLink>All Cities</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsCityOpen(false);
                          handleCitySelection("City One");
                        }}
                      >
                        <NavLink>City One</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsCityOpen(false);
                          handleCitySelection("City Two");
                        }}
                      >
                        <NavLink>City Two</NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {/* age */}
              <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
                <span className="text-gray-500">Age</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{ageHeaderText}</h3>
                  <button
                    className="text-lg"
                    onClick={() => {
                      setIsAge(!isAge);
                    }}
                  >
                    {isAge ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                {isAge ? (
                  <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                    <ul>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsAge(false);
                          handleAgeSelection("35+");
                        }}
                      >
                        <NavLink>35+</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsAge(false);
                          handleAgeSelection("25+");
                        }}
                      >
                        <NavLink>25+</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsAge(false);
                          handleAgeSelection("45+");
                        }}
                      >
                        <NavLink>45+</NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {/* gender */}
              <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
                <span className="text-gray-500">Gender</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{genderHeaderText}</h3>
                  <button
                    className="text-lg"
                    onClick={() => {
                      setIsGenderOpen(!isGenderOpen);
                    }}
                  >
                    {isGenderOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>
                {isGenderOpen ? (
                  <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                    <ul>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsGenderOpen(false);
                          handleGenderSelection("All");
                        }}
                      >
                        <NavLink>All</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsGenderOpen(false);
                          handleGenderSelection("Male");
                        }}
                      >
                        <NavLink>Male</NavLink>
                      </li>
                      <li
                        className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                        onClick={(e) => {
                          setIsGenderOpen(false);
                          handleGenderSelection("Female");
                        }}
                      >
                        <NavLink>Female</NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </header>
            {/* 
        ///////////////////////////////////////////
        content 
        //////////////////////////////////////////
        */}

            <div className="bg-gray-100 h-[68vh] overflow-y-auto p-2 grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* cards */}
              {cunsultations?.length > 0 ? (
                <>
                  {cunsultations.map((con, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-md p-3 h-max"
                    >
                      {/* profile */}
                      <div className="flex items-center justify-center gap-x-3 my-2">
                        {/* image */}
                        <div>
                          <img
                            src={con.profile}
                            alt=""
                            className="w-[32px] h-[32px] object-cover object-center rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">
                            {con.first_name} {con.last_name}
                          </span>
                          <span className="text-gray-500">
                            {con.proffession}
                          </span>
                        </div>
                      </div>
                      {/* rating and address */}
                      <div className="flex items-center justify-center gap-x-3">
                        {/* rating btn */}
                        <button
                          className={`px-3 py-[.13rem] rounded-full text-gray-100 ${
                            con.rating >= 4
                              ? "bg-emerald-500"
                              : con.rating >= 3
                              ? "bg-yellow-300"
                              : "bg-red-500"
                          } flex items-center justify-between`}
                        >
                          <FaStar className="mr-1 text-lg" /> {con.rating}
                        </button>
                        {/* address */}
                        <div className="flex items-center text-gray-500">
                          <MdOutlineShareLocation className="text-xl mr-1" />
                          <span>{con.address}</span>
                        </div>
                      </div>
                      {/* expereience */}
                      <div className="flex flex-col items-center text-gray-500 my-3">
                        <span>{con.experiene} years of experience</span>
                        <span>{con.consult}+ consultaions</span>
                      </div>
                      {/* btn container */}
                      <div className="flex items-center justify-center gap-x-3">
                        <button
                          className="px-[15%] py-2 rounded-full bg-blue-600 text-white"
                          onClick={(e) => {
                            setLawyer("Hana teshome");
                            e.stopPropagation();
                            setStepper(4);
                          }}
                        >
                          select
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>No Cunsultaions</div>
              )}
            </div>
          </div>
        ) : stepper === 4 ? (
          <div className="flex items-center justify-center">
            <div>
              <h3 className="text-gray-500 text-lg font-bold my-3">
                Total result
              </h3>
              <div className="flex flex-col mb-2 gap-5 w-full px-2">
                <p className="font-bold border py-2 px-2 border-gray-300">Case category: {category}</p>
                <p className="font-bold border py-2 px-2 border-gray-300">Case type: {caseType}</p>
                <p className="font-bold border py-2 px-2 border-gray-300">Case type: {caseType}</p>
                <p className="font-bold border py-2 px-2 border-gray-300">Case name: {caseName}</p>
                <p className="font-bold border py-2 px-2 border-gray-300">Lawyer: {lawyer}</p>
                <p className="font-bold border py-2 px-2 border-gray-300">Case type: {caseType}</p>
              </div>
              <div className="flex items-center justify-between gap-x-5">
                <button
                  className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setStepper(3);
                  }}
                >
                  back
                </button>
                <button
                  className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                  onClick={(e) => {
                    setStepper(4);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NewCase;

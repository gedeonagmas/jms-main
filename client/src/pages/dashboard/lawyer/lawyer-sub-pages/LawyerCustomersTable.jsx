import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

// icons
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import {
  MdClose,
  MdOutlineArrowLeft,
  MdOutlineArrowRight,
} from "react-icons/md";
// data files
import { lawyerCustomers } from "../../../../DataFile";

// icons

import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const LawyerCustomersTable = () => {
  // lawyer custimers
  const data = useMemo(() => lawyerCustomers, []);

  // local states
  const [filtering, setFiltering] = useState("");
  const [sorting, setSorting] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null);

  // customers cell
  const customersCell = ({ row }) => {
    const { first_name, last_name, profile } = row.original;
    console.log(profile);
    return (
      <div className="flex items-center gapx-1">
        {/* profile */}
        <div>
          <img
            src={profile}
            alt="lawyer customer profile"
            className="w-[22px] h-[22px] rounded-full object-center object-cover mr-1"
          />
        </div>
        {/* username */}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-800">
            {first_name}
          </span>
          <span className="text-xs">{last_name}</span>
        </div>
      </div>
    );
  };

  // end date cell
  const endDateCell = ({ row }) => {
    const { end_date, status } = row.original;
    return (
      <>
        {end_date ? (
          <div
            className={`p-1 rounded-sm ${
              status === "active"
                ? "bg-emerald-500 text-white"
                : status === "closed"
                ? "bg-red-500 text-white"
                : ""
            }`}
          >
            {end_date}
          </div>
        ) : (
          <div className="h-[1px] w-full bg-gray-400"></div>
        )}
      </>
    );
  };

  // start date cell
  const startDateCell = ({ row }) => {
    const { start_date, status } = row.original;
    console.log(status);
    return (
      <>
        <div
          className={`p-1 rounded-sm ${
            status === "pending" ? "bg-orange-400 text-white" : " bg-gray-200"
          }`}
        >
          <span>{start_date}</span>
        </div>
      </>
    );
  };

  // file no cell
  const fileNoCell = ({ row }) => {
    const { file_no } = row.original;
    return <div className="font-semibold text-gray-700">{file_no}</div>;
  };

  // court place cell
  const courtPlaceCell = ({ row }) => {
    const { court_place, status } = row.original;
    return (
      <div
        className={`font-medium ${
          status === "closed" ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {court_place}
      </div>
    );
  };

  // action cell
  const actionCell = ({ row }) => {
    return (
      <div className="flex items-center justify-center w-full">
        <button
          onClick={() => {
            if (editCustomer) {
              setEditCustomer(null);
            } else {
              setEditCustomer(row.original);
            }
          }}
        >
          <CiEdit className="text-2xl text-gray-400 transition-all ease-in-out duration-300 hover:text-gray-700" />
        </button>
      </div>
    );
  };

  // status cell
  const statusCell = ({ row }) => {
    const { status } = row.original;
    return (
      <div
        className={`flex items-center justify-center rounded-sm px-1 py-[.15rem] text-gray-100 ${
          status === "active"
            ? "bg-emerald-500"
            : status === "pending"
            ? "bg-orange-400"
            : status === "closed"
            ? "bg-red-500"
            : ""
        }`}
      >
        <span>{status}</span>
      </div>
    );
  };

  // table columns
  const columns = [
    {
      header: "Customers",
      accessorKey: "first_name",
      cell: customersCell,
    },
    {
      header: "Start Date",
      accessorKey: "start_date",
      cell: startDateCell,
    },
    {
      header: "Endding Date",
      accessorKey: "end_date",
      cell: endDateCell,
    },
    {
      header: "File No",
      accessorKey: "file_no",
      cell: fileNoCell,
    },
    {
      header: "Court Place",
      accessorKey: "court_place",
      cell: courtPlaceCell,
    },
    // {
    //   header: "Court Bench",
    //   accessorKey: "court_bench",
    // },
    {
      header: "Status",
      accessorKey: "status",
      cell: statusCell,
    },
    {
      header: " ",
      accessorKey: "",
      cell: actionCell,
    },
  ];

  // customers table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
    state: {
      globalFilter: filtering,
      sorting: sorting,
    },
    onGlobalFilterChange: setFiltering,
    onSortingChange: setSorting,
  });

  return (
    <div className="mt-2">
      {/* table header */}
      <header className="py-1 flex items-center justify-between gap-5">
        {/* left */}
        <div className="flex items-center justify-between gap-5">
          <span className="px-3 py-1 rounded-sm bg-yellow-500 text-white">
            total cases(200)
          </span>
          {/* search container */}
          <div>
            <div className="flex items-center justify-center bg-gray-200 rounded-sm py-[.175rem] px-3">
              {/* icon */}
              <FiSearch className="text-xl text-gray-500" />
              <input
                type="text"
                placeholder="search"
                className="focus:outline-none focus:ring-0 border-none bg-transparent h-[28px]"
                onChange={(e) => setFiltering(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center border border-gray-300 px-2 py-1 rounded-full cursor-pointer transition-all ease-in-out duration-150 hover:border-gray-500 text-gray-500">
              <IoCalendarNumberOutline className="text-xl mr-1" />
              <span>schedule</span>
            </div>
          </div>
        </div>
      </header>
      {/* table container */}
      <div className="mt-2 h-[35vh] overflow-y-auto">
        {/* <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-emerald-900 border-opacity-[.15]">
              <td>
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>customers</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>start date</span>
                </div>
              </td>
              <td className="border-r border-emerald-900 border-opacity-[.15]">
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>end date</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>file no</span>
                </div>
              </td>
              <td className="border-r border-emerald-900 border-opacity-[.15]">
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>court place</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>status</span>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                  <span>actions</span>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {lawyerCustomers.map((customer, index) => (
              <tr
                key={index}
                className="border-b border-emerald-900 border-opacity-[.15]"
              >
                <td>
                  <div className="flex items-center text-gray-500 cursor-pointer py-1">
                    <div>
                      <img
                        src={customer.profile}
                        alt=""
                        className="w-[28px] h-[28px] rounded-full object-center object-cover mr-[.3rem]"
                      />
                    </div>
                    <div className="flex flex-col text-xs text-gray-500">
                      <span className="font-semibold">
                        {customer.first_name}
                      </span>
                      <span>{customer.last_name}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className={`flex items-center justify-center text-gray-800 cursor-pointer py-1 rounded-sm ${
                      customer.status === "pending" ? "bg-gray-200" : ""
                    }`}
                  >
                    <span
                      className={`${
                        customer.status === "active"
                          ? "text-green-900"
                          : customer.status === "pending"
                          ? "text-gray-700"
                          : "text-gray-700"
                      }`}
                    >
                      {customer.start_date}
                    </span>
                  </div>
                </td>
                <td className="border-r border-emerald-900 border-opacity-[.15]">
                  <div
                    className={`flex items-center justify-center text-gray-800 cursor-pointer py-1 ${
                      customer.status === "active"
                        ? "bg-blue-500"
                        : customer.status === "closed"
                        ? "bg-gray-200"
                        : ""
                    }`}
                  >
                    <span
                      className={`${
                        customer.status === "active"
                          ? "text-white"
                          : customer.status === "pending"
                          ? "text-wite"
                          : "text-gray-700"
                      }`}
                    >
                      {customer.end_date ? customer.end_date : "_____"}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center text-gray-800 cursor-pointer py-1">
                    <span className="text-gray-500">{customer.file_no}</span>
                  </div>
                </td>
                <td className="border-r border-emerald-900 border-opacity-[.15]">
                  <div
                    className={`flex items-center justify-center text-gray-500 cursor-pointer py-1 rounded-sm ${
                      customer.status === "active" ? "bg-gray-200" : ""
                    } mx-1`}
                  >
                    <span>{customer.court_place}</span>
                  </div>
                </td>

                <td>
                  <div
                    className={`flex items-center border justify-center text-gray-50 cursor-pointer rounded-sm mx-1 px-1 py-[.13rem] ${
                      customer.status === "active"
                        ? "bg-green-400 border-green-400"
                        : customer.status === "pending"
                        ? "bg-orange-400 border-orange-400"
                        : "bg-red-400 border-red-400"
                    }`}
                  >
                    <span>{customer.status}</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-3 text-gray-500 cursor-pointer py-1 relative">
                    <button className="text-2xl">
                      <BiSolidMessageAdd />
                    </button>
                    <button
                      className="text-2xl"
                      onClick={(e) => {
                        if (isUserMore) {
                          setIsUserMore(null);
                        } else {
                          setIsUserMore(customer);
                        }
                      }}
                    >
                      <IoMdMore />
                    </button>
                    {lawyerCustomers[index].file_no === isUserMore?.file_no ? (
                      <div className="absolute right-0 top-[100%] bg-white rounded-sm shadow-md z-50">
                        <ul className="px-1 py-2">
                          <li
                            className="my-1 border-b border-gray-300 flex items-center gap-3 px-3 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsUserMorePopup(customer);
                              setIsUserMore(null);
                            }}
                          >
                            <CiEdit className="text-2xl" />
                            <span>modify</span>
                          </li>
                          <li className="my-1 border-b border-gray-300 flex items-center gap-3 px-3">
                            <MdOutlineMail className="text-2xl" />
                            <span>Message</span>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {/* <table className="w-full">
          <thead className="border-b border-gray-200">
            {lawyerCustomersTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <td
                    key={header.id}
                    className="text-left whitespace-nowrap font-medium cursor-pointer bg-blue-500 text-gray-100 p-1 capitalize"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {lawyerCustomersTable.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 text-gray-700"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}

        {/* final table */}
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-y-2 border-gray-300">
                {headerGroup.headers.map((header) => (
                  <td
                    onClick={header.column.getToggleSortingHandler()}
                    key={header.id}
                    className="p-1 text-left text-gray-500 font-semibold cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-100"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      {
                        asc: (
                          <HiArrowNarrowDown className="inline-block text-lg ml-1" />
                        ),
                        desc: (
                          <HiArrowNarrowUp className="inline-block text-lg ml-1" />
                        ),
                      }[header.column.getIsSorted() ?? null]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-1 text-left text-gray-600">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center gap-x-1 mt-1">
          {/* first page */}
          {/* <button
            onClick={() => table.setPageIndex(0)}
            className="text-3xl text-gray-500 px-1 py-[.05rem] rounded-sm transition-all ease-in-out duration-150 hover:bg-gray-200 hover:text-gray-700"
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button> */}
          {/* previous page */}
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="text-3xl text-gray-500 px-1 py-[.05rem] rounded-sm transition-all ease-in-out duration-150 hover:bg-gray-200 hover:text-gray-700"
          >
            <MdOutlineArrowLeft />
          </button>
          {/* next page */}
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="text-3xl text-gray-500 px-1 py-[.05rem] rounded-sm transition-all ease-in-out duration-150 hover:bg-gray-200 hover:text-gray-700"
          >
            <MdOutlineArrowRight />
          </button>

          {/* last page */}
          {/* <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="text-3xl text-gray-500 px-1 py-[.05rem] rounded-sm transition-all ease-in-out duration-150 hover:bg-gray-200 hover:text-gray-700"
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button> */}
        </div>
      </div>
      {/* user pop up */}
      {editCustomer ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-1 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md bg-white shadow-lg"
        >
          <header className="p-3 flex items-center justify-between gap-x-56 border-b border-gray-200 mb-3">
            <div className="flex items-center justify-start gap-x-1">
              <div>
                <img
                  src={editCustomer?.profile}
                  alt=""
                  className="w-[38px] h-[38px] rounded-full object-center object-cover mr-1"
                />
              </div>
              <div>
                <span className="text-gray-500 font-semibold whitespace-nowrap">
                  {editCustomer?.first_name} {editCustomer?.last_name}
                </span>
                <div className="flex items-center justify-start gap-x-1 text-xs text-gray-400">
                  <span>status</span>
                  <span>{editCustomer?.status}</span>
                </div>
              </div>
            </div>
            <div>
              <button
                className="p-1 rounded-full bg-gray-100 text-gray-500 transition-all ease-in-out duration-300 hover:bg-gray-200 hover:text-gray-700"
                onClick={() => {
                  setEditCustomer(null);
                }}
              >
                <MdClose className="text-3xl" />
              </button>
            </div>
          </header>

          <div className="px-3 py-2 flex items-center justify-between gap-x-3 border-b border-gray-120 mb-2">
            <div className="text-gray-600 font-semibold">
              <span>Start Date</span>
            </div>

            <div className="text-gray-500">
              <div>
                <div className="flex items-center justify-center border rounded-md py-[.175rem] border-gray-200">
                  <input
                    type="text"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[20px]"
                    value={editCustomer?.start_date}
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="px-1 py-1 rounded-sm bg-blue-600 text-white text-xs">
                save changes
              </button>
            </div>
          </div>

          <div className="px-3 py-2 flex items-center justify-between gap-x-3 border-b border-gray-120 mb-2">
            <div className="text-gray-600 font-semibold">
              <span>End Date</span>
            </div>

            <div className="text-gray-500">
              <div>
                <div className="flex items-center justify-center border rounded-md py-[.175rem] border-gray-200">
                  <input
                    type="text"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[20px]"
                    value={editCustomer?.end_date}
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="px-1 py-1 rounded-sm bg-blue-600 text-white text-xs">
                save changes
              </button>
            </div>
          </div>

          <div className="px-3 py-2 flex items-center justify-between gap-x-3 border-b border-gray-120 mb-2">
            <div className="text-gray-600 font-semibold">
              <span>File No.</span>
            </div>

            <div className="text-gray-500">
              <div>
                <div className="flex items-center justify-center border rounded-md py-[.175rem] border-gray-200">
                  <input
                    type="text"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[20px]"
                    value={editCustomer?.file_no}
                  />
                </div>
              </div>
            </div>

            <div>
              <button className="px-1 py-1 rounded-sm bg-blue-600 text-white text-xs">
                save changes
              </button>
            </div>
          </div>

          <div className="px-3 py-2 flex items-center justify-between gap-x-3 border-b border-gray-120 mb-2">
            <div className="text-gray-600 font-semibold">
              <span>Court Place</span>
            </div>

            <div className="text-gray-500">
              <div>
                <div className="flex items-center justify-center border rounded-md py-[.175rem] border-gray-200">
                  <input
                    type="text"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[20px]"
                    value={editCustomer?.court_place}
                  />
                </div>
              </div>
            </div>

            <div>
              <button className="px-1 py-1 rounded-sm bg-blue-600 text-white text-xs">
                save changes
              </button>
            </div>
          </div>

          <div className="px-3 py-1 flex items-center justify-center border-b border-gray-100 ">
            <div>
              <button className="px-7 my-3 py-1 rounded-sm bg-blue-600 text-white">
                save all
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LawyerCustomersTable;

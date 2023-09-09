import React from "react";

function ScoreBoard() {
  return (
    <>
      <div className="p-5 hidden  whitespace-nowrap overflow-auto  md:block">
        <h1 className="text-xl text-white mb-2 p-1 bg-red-800 border-b-2 border-b-slate-300">
          Cricket
        </h1>
        <table className="w-full">
          <thead className=" text-white border-b-2 border-b-slate-500 grid grid-cols-9 gap-4 ">
            <th className="col-span-3"></th>
            <th className="p-1 text-sm font-semibold col-span-1  place-items-center">
              1
            </th>
            <th className="p-1 text-sm font-semibold col-span-3  place-items-center">
              x
            </th>
            <th className="p-1 text-sm font-semibold col-span-1 place-items-center">
              2
            </th>
          </thead>
          <tbody className="grid grid-cols-9 gap-4 p-2">
            <td className="text-sm font-semibold flex col-span-3 whitespace-nowrap">
              <span className="text-slate-400 mr-1">08 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                England v New Zealand
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center whitespace-nowrap
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.23</span>
              <span className=" bg-slate-500 px-6 ">4.23</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center  whitespace-nowrap">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center whitespace-nowrap">
              <span className=" bg-slate-500 px-6 mr-2 ">5.60</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 2  */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">09 Sep 08:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">
                South Africa v Australia
              </span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.20</span>
              <span className=" bg-slate-500 px-6 ">3.40</span>
            </td>
            <td className=" text-sm font-semibold flex h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2">4.50</span>
              <span className=" bg-slate-500 px-6 ">6.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2">5.00</span>
              <span className=" bg-slate-500 px-6 ">2.45</span>
            </td>

            {/* Row 3 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">08 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                St Kitts and Nevis Patriots v St Lucia Kings
              </span>{" "}
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>{" "}
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>

            {/* Row 4 */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">10 Aug 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">
                Sri Lanka v Bangladesh
              </span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>
          </tbody>
        </table>

        {/* Table 2 */}

        <h1 className="text-xl text-white mb-2 p-1 bg-red-800 border-b-2 border-b-slate-300">
          Soccer
        </h1>
        <table className="w-full">
          <thead className=" text-white border-b-2 border-b-slate-500 grid grid-cols-9 gap-4 ">
            <th className="col-span-3"></th>
            <th className="p-1 text-sm font-semibold col-span-1  place-items-center">
              1
            </th>
            <th className="p-1 text-sm font-semibold col-span-3  place-items-center">
              x
            </th>
            <th className="p-1 text-sm font-semibold col-span-1 place-items-center">
              2
            </th>
          </thead>
          <tbody className="grid grid-cols-9 gap-4 p-2">
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">10 Sep 12:30</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                Qatar U23 v Myanmar U23
              </span>{" "}
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.23</span>
              <span className=" bg-slate-500 px-6 ">4.23</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">5.60</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 2  */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">13 Jul 08:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">
                Philippines U23 v Malaysia U23
              </span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.20</span>
              <span className=" bg-slate-500 px-6 ">3.40</span>
            </td>
            <td className=" text-sm font-semibold flex h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">4.50</span>{" "}
              <span className=" bg-slate-500 px-6 ">6.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">5.00</span>
              <span className=" bg-slate-500 px-6 ">2.45</span>
            </td>

            {/* Row 3 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">08 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                China v Malaysia
              </span>{" "}
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>{" "}
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>

            {/* Row 4 */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">10 Aug 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">Malawi v Guinea</span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 5 */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">10 Sep 12:00</span>
              <span className="text-slate-400 mr-1">|</span>

              <span className="ml-1 mr-1 text-white ">
                South Africa v Namibia
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>
            {/* Row 6 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">20 Feb 09:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">
                Mongolia U23 v Cambodia U23
              </span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 7 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">18 Sep 10:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">China v Malaysia</span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>
          </tbody>
        </table>

        {/* Table 3 */}

        <h1 className="text-xl text-white mb-2 p-1 bg-red-800 border-b-2 border-b-slate-300">
          Tennis
        </h1>
        <table className="w-full">
          <thead className=" text-white border-b-2 border-b-slate-500 grid grid-cols-9 gap-4 ">
            <th className="col-span-3"></th>
            <th className="p-1 text-sm font-semibold col-span-1  place-items-center">
              1
            </th>
            <th className="p-1 text-sm font-semibold col-span-3  place-items-center">
              x
            </th>
            <th className="p-1 text-sm font-semibold col-span-1 place-items-center">
              2
            </th>
          </thead>
          <tbody className="grid grid-cols-9 gap-4 p-2">
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">08 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">
                Bolt/Saville v Bu/Te
              </span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.23</span>
              <span className=" bg-slate-500 px-6 ">4.23</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">5.60</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 2  */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">09 Sep 08:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">L Klein v J De Jong</span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.20</span>
              <span className=" bg-slate-500 px-6 ">3.40</span>
            </td>
            <td className=" text-sm font-semibold flex h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">4.50</span>{" "}
              <span className=" bg-slate-500 px-6 ">6.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">5.00</span>
              <span className=" bg-slate-500 px-6 ">2.45</span>
            </td>

            {/* Row 3 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">22 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                Matuszewski/Wehnelt v Kolar/Rola
              </span>{" "}
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>{" "}
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>

            {/* Row 4 */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">10 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">Marterer v Kopriva</span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 5 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">10 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                Ma Bellucci v L Broady
              </span>{" "}
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>{" "}
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>

            {/* Row 6 */}
            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">04 Feb 03:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span className="ml-1 mr-1 text-white ">
                Cristian/Heisen v Kawa/Siskova
              </span>{" "}
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>{" "}
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">xxx</span>
              <span className=" bg-slate-500 px-6 ">xxx</span>
            </td>

            {/* Row 7 */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">12 Sep 08:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">Nagal v Cobolli</span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>

            {/* Row 8 */}

            <td className="text-sm font-semibold flex col-span-3">
              <span className="text-slate-400 mr-1">11 Sep 05:00</span>
              <span className="text-slate-400 mr-1">|</span>
              <span class="relative flex h-3 w-3 mt-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="ml-1 mr-1 text-white ">Fett v Sramkova</span>{" "}
              <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                Live Now
              </span>
            </td>

            <td
              className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center
           "
            >
              <span className=" bg-slate-500 px-6 mr-2 ">2.30</span>
              <span className=" bg-slate-500 px-6 ">6.60</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center ">
              <span className=" bg-slate-500 px-6 mr-2 ">8.90</span>{" "}
              <span className=" bg-slate-500 px-6 ">5.50</span>
            </td>
            <td className=" text-sm font-semibold flex  h-4 w-4 col-span-2 place-items-center">
              <span className=" bg-slate-500 px-6 mr-2 ">6.26</span>
              <span className=" bg-slate-500 px-6 ">5.60</span>
            </td>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
    </>
  );
}

export default ScoreBoard;

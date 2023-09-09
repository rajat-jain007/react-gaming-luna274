import React from "react";

function ScoreBoard() {
  return (
    <>
      <div className="p-5  ">
        <h1 className="text-xl text-white mb-2 p-1 bg-red-800 border-b-2 border-b-slate-300">
          Cricket
        </h1>
        <table className="w-full">
          <thead className=" text-white border-b-2 border-b-slate-500">
            <tr className=" flex gap-52 justify-end  ">
              <th className="p-1 text-sm font-semibold ">1</th>
              <th className="p-1 text-sm font-semibold ">x</th>
              <th className="p-1 text-sm font-semibold text-center">2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex justify-between">
              <td className="text-sm font-semibold flex">
                <span className="text-slate-400 mr-1">08 Sep 05:00</span>
                <span className="text-slate-400 mr-1">|</span>
                <span class="relative flex h-3 w-3 mt-1">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <span className="ml-1 mr-1 text-white ">
                  England v New Zealand
                </span>{" "}
                <span className=" animate-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Live Now
                </span>
              </td>

              <tr className="flex gap-48 justify-self-center  ">
                <td className=" text-sm font-semibold flex items-center h-4 w-4 "><span className=" bg-slate-500 px-6 mr-2 ">560</span> <span className=" bg-slate-500 px-6 ">560</span>
                </td>
                <td className=" text-sm font-semibold flex items-center h-4 w-4 "><span className=" bg-slate-500 px-6 mr-2 ">560</span> <span className=" bg-slate-500 px-6 ">560</span>
                </td>
                <td className=" text-sm font-semibold flex items-center h-4 w-4 "><span className=" bg-slate-500 px-6 mr-2 ">560</span> <span className=" bg-slate-500 px-6 ">560</span>
                </td>
              </tr>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
    </>
  );
}

export default ScoreBoard;

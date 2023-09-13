import React from "react";
import { cricketScore, soccerScore, tennisScore } from "./ScoreLinks.jsx";

function MobileViewScoreboard() {
  return (
    <div className="">
      <div className="grid  md:hidden bg-white overflow-auto ">
        <div className="rounded-lg shadow-md">
          <div className="text-white bg-red-700 text-sm font-semibold p-1">
            Cricket
          </div>
          {/* Table 1 */}
          {cricketScore.map((link) => {
            const { match, placeTime } = link;
            return (
              <>
                <div className="text-black bg-slate-100 flex flex-col text-sm font-semibold w-full">
                  {match}
                  <span className="text-sm font-normal truncate">
                    {placeTime}
                  </span>
                </div>

                {link.score.map((scoreLink) => {
                  const { one, two, three, four, five, six } = scoreLink;
                  return (
                    <div className="flex grid-cols-6 bg-slate-100 gap-1 mb-3 text-xs font-semibold ">
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {one}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {two}
                      </div>
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {three}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {four}
                      </div>
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {five}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {six}
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>

        {/* Table 2 */}
        <div className="rounded-lg shadow-md">
          <div className="text-white bg-red-700 text-sm font-semibold p-1">
            Soccer
          </div>
          {soccerScore.map((link) => {
            const { match, placeTime } = link;
            return (
              <>
                <div className="text-black bg-slate-100 flex flex-col text-sm font-semibold w-full">
                  {match}
                  <span className="text-sm font-normal truncate">
                    {placeTime}
                  </span>
                </div>

                {link.score.map((scoreLink) => {
                  const { one, two, three, four, five, six } = scoreLink;
                  return (
                    <div className="flex grid-cols-6 bg-slate-100 gap-1 mb-3 text-xs font-semibold ">
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {one}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {two}
                      </div>
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {three}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {four}
                      </div>
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {five}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {six}
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>

        {/* Table 3 */}

        <div className="rounded-lg shadow-md">
          <div className="text-white bg-red-700 text-sm font-semibold p-1">
            Tennis
          </div>
          {tennisScore.map((link) => {
            const { match, placeTime } = link;
            return (
              <>
                <div className="text-black bg-slate-100 flex flex-col text-sm font-semibold w-full">
                  {match}
                  <span className="text-sm font-normal truncate">
                    {placeTime}
                  </span>
                </div>

                {link.score.map((scoreLink) => {
                  const { one, two, three, four, five, six } = scoreLink;
                  return (
                    <div className="flex grid-cols-6 bg-slate-100 gap-1 mb-3 text-xs font-semibold ">
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {one}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {two}
                      </div>
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {three}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {four}
                      </div>
                      <div className="grid-cols-1  bg-sky-400 px-4 mt-2 py-1">
                        {five}
                      </div>
                      <div className="grid-cols-1  bg-green-300 px-4 mt-2 py-1">
                        {six}
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
      {326}
    </div>
  );
}

export default MobileViewScoreboard;

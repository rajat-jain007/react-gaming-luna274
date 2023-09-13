import React from "react";
import { cricketScore, soccerScore } from "./Links";

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
          <div className="text-black bg-slate-100 flex flex-col text-base font-semibold ">
            A. Cornet v T Zidansek
            <span className="text-sm font-normal">
              15 Sep 01:00 | WTA Bari 2023
            </span>
          </div>

          <div className="flex grid-cols-6 bg-slate-100 gap-1 w-full mb-3  ">
            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">1.60</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.55</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.75</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.80</div>
          </div>

          <div className="text-black bg-slate-100 flex flex-col text-base font-semibold ">
            K Siniakova v Zarazua
            <span className="text-sm font-normal">
              09 Sep 01:00 | WTA San Diego 2023
            </span>
          </div>

          <div className="flex grid-cols-6 bg-slate-100 gap-1 w-full mb-3  ">
            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">1.60</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.55</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.75</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.80</div>
          </div>

          <div className="text-black bg-slate-100 flex flex-col text-base font-semibold ">
            A Sasnovich v Er Cayetano
            <span className="text-sm font-normal">
              10 Sep 01:00 | WTA San Diego 2023
            </span>
          </div>

          <div className="flex grid-cols-6 bg-slate-100 gap-1 w-full mb-3  ">
            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">1.60</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.55</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.75</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.80</div>
          </div>

          <div className="text-black bg-slate-100 flex flex-col text-base font-semibold ">
            Gauff v A Sabalenka
            <span className="text-sm font-normal">
              10 Sep 01:00 | Women's US Open 2023
            </span>
          </div>

          <div className="flex grid-cols-6 bg-slate-100 gap-1 w-full mb-3  ">
            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">1.60</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.55</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.75</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.80</div>
          </div>

          <div className="text-black bg-slate-100 flex flex-col text-base font-semibold ">
            C Liu v Aly Ahn
            <span className="text-sm font-normal">
              10 Sep 01:00 | WTA San Diego 2023
            </span>
          </div>

          <div className="flex grid-cols-6 bg-slate-100 gap-1 w-full mb-3  ">
            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">1.60</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.55</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.75</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.80</div>
          </div>

          <div className="text-black bg-slate-100 flex flex-col text-base font-semibold ">
            Camila Osorio v Loeb
            <span className="text-sm font-normal">
              10 Sep 01:00 | WTA San Diego 2023
            </span>
          </div>

          <div className="flex grid-cols-6 bg-slate-100 gap-1 w-full mb-3  ">
            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">1.60</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.55</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.75</div>

            <div className="grid-cols-1  bg-sky-400 px-4 mt-2 ">2.60</div>
            <div className="grid-cols-1  bg-green-300 px-4 mt-2 ">2.80</div>
          </div>
        </div>
      </div>
      {326}
    </div>
  );
}

export default MobileViewScoreboard;

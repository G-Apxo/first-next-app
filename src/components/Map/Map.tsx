"use client";
import React, { useEffect, useState } from "react";
import WorldMap from "@/src/assets/WorldMap";
import { GREECE } from "@/src/data/greece";
import Link from "next/link";
const Map = () => {
  const [country, setCountry] = useState("");
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const countryInfo = GREECE.find((item) => item.country === country);
    if (countryInfo) {
      setTimeline([...GREECE]);
    } else {
      setTimeline([]);
    }
  }, [country]);
  return (
    <div className="h-screen w-full relative">
      {country && (
        <div className="bg-white p-4 shadow-md absolute top-0 left-0 ">
          <h1 className="text-2xl font-bold">Country: {country}</h1>
          <h2>Timeline</h2>
          <ul>
            {timeline.map((item, index): any => (
              <Link href="worlddescription" key={index}>
                <h3>{item.period}</h3>
              </Link>
            ))}
          </ul>
          <button onClick={() => setCountry("")}>Clear Country</button>
        </div>
      )}
      <WorldMap setCountry={setCountry} country={country} />
    </div>
  );
};

export default Map;

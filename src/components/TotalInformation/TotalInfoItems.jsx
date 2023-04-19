import React, { useEffect, useState } from "react";
import { getTotalData } from "../../helper/helper";
import { useSearchParams } from "react-router-dom";
import TotalInfoItem from "./TotalInfoItem";
import Loader from "../../UI/Loader";
const totalInfoArray = [];

const TotalInfoItems = () => {
  const [allData, setAllData] = useState({
    status: "pending",
    data: {},
    error: "",
  });

  useEffect(() => {
    const fetchingAllData = async () => {
      setAllData((state) => {
        return { ...state, status: "pending" };
      });
      const { data, error, statusCode } = await getTotalData();
      console.log(data, error, statusCode);
      if (data) {
        setTimeout(() => {
          setAllData((state) => {
            return { data, error, status: "success" };
          });
        }, 1000);
      } else {
        setAllData((state) => {
          return { data, error, status: "failed" };
        });
      }
    };
    // fetching all data
    fetchingAllData();
  }, []);

  return (
    <>
      <div className="w-full">
        {allData.status == "pending" && (
          <div className="w-full flex items-center justify-center">
            <Loader></Loader>
          </div>
        )}
        {allData.status == "success" && (
          <div className="flex w-full flex-wrap gap-[4.5rem]">
            {allData.data.map((element, index) => {
              return (
                <TotalInfoItem
                  key={index}
                  title={element.title}
                  value={element.value}
                  color={element.color}
                  icon={element.icon}
                ></TotalInfoItem>
              );
            })}
          </div>
        )}

        {allData.status == "failed" && <p>{JSON.stringify(allData.error)}</p>}
      </div>
    </>
  );
};

export default TotalInfoItems;

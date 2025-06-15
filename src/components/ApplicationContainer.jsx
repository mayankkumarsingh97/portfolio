import React from "react";
import { data } from "../mock_data/mock_app_card";
import ApplicationCard from "../shared/ApplicationCard";
//
//
const ApplicationContainer = () => {
  return (
    <div>
      {data.map((item) => {
        return <ApplicationCard key={item.id} item={item} className="mt-20" />;
      })}
    </div>
  );
};

export default ApplicationContainer;

import React from "react";
import "./header/index.css";
import Expertize from "./Expertize";
import expertize_data from "../mock_data/mock_expertize";

const ExpertizeContainer = () => {
  return (
    <div className="card-layout">
      {expertize_data.map((item) => {
        return (
          <div className="card-list">
            <Expertize key={item.id} item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ExpertizeContainer;

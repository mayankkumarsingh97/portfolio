import React from "react";
import listCard from "../mock_data/mock_list_card";
import ListCard from "./ListCard";
//
const ListCardContainer = () => {
  return (
    <div>
      {" "}
      {listCard.map((item) => {
        return <ListCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ListCardContainer;

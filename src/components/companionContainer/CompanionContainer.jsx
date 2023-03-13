
import React, { useEffect, useState } from "react";
import CompanionCard from "../companionCard/CompanionCard";
import CompanionList from "../companionList/CompanionList";
import ejercicios from "../../data/ejercicios.js";

const CompanionContainer = () => {

  const [data, setData] = useState([]);

  function sortMinus() {
      setData(
        [].concat(
          data.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        )
      );
    }
    function sortPlus() {
      setData(
        [].concat(
          data.sort(function (a, b) {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        )
      );
    }
  return (
    


   <CompanionList data={ejercicios} sortMinus={sortMinus} sortPlus={sortPlus}/>
  
  

  );
};

export default CompanionContainer;

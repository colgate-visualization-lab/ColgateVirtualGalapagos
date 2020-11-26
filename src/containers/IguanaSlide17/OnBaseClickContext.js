import React from "react";

export const OnBaseClickContext = React.createContext({
  onClick: function (index) {
    console.log(index);
  },
});

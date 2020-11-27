import React from "react";

export const BasePairClickContext = React.createContext({
  onClick: function (index) {
    console.log(index);
  },
  mutationsFound: [],
});

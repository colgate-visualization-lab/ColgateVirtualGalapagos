import { useContext } from "react";

export const makeContextHook = (name, context) => {
  return () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      );
    }
    return ctx;
  };
};

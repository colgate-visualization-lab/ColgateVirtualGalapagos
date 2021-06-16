import React, { createContext, useState } from "react";
import { makeContextHook } from "./utils";

export const TransitionContext = createContext({});
export const useTransitionContext = makeContextHook(
  "useTransitionContext",
  TransitionContext
);

type TransitionProps = {
  isTransitioning: boolean;
  type?: "booby" | "arch";
  to?: string;
};

export default function TransitionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<TransitionProps>({
    isTransitioning: false,
    type: undefined,
    to: undefined,
  });

  const startTransition = (to: string, type?: TransitionProps["type"]) => {
    setState({
      isTransitioning: true,
      type,
      to,
    });
  };

  const stopTransition = () => {
    setState({
      isTransitioning: false,
    });
  };

  return (
    <TransitionContext.Provider
      value={{
        ...state,
        startTransition,
        stopTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

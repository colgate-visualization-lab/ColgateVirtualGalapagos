import React, { createContext, useState } from "react";
import { makeContextHook } from "./utils";

const transitions = ["booby", "galaxy", "boat"] as const;

export const TransitionContext = createContext({});
export const useTransitionContext = makeContextHook(
  "useTransitionContext",
  TransitionContext
);

type TransitionProps = {
  isTransitioning: boolean;
  src?: string;
  to?: string;
};

export default function TransitionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<TransitionProps>({
    isTransitioning: false,
    src: undefined,
    to: undefined,
  });

  const startTransition = (to: string, type?: typeof transitions[number]) => {
    setState({
      isTransitioning: true,
      src: type ? `/transitions/${type}.mp4` : `/transitions/booby.mp4`,
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

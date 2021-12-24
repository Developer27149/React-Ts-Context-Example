import React, { createContext, useContext } from "react";
import { IState, IRootAction } from "./types";

export const initState: IState = {
  count: 0,
  profile: {
    name: "Aaron",
    age: 100,
  },
};

export const RootContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<IRootAction>;
}>({
  state: initState,
  dispatch: () => null,
});

export const RootContextProvider = RootContext.Provider;
export const useRootContext = () => useContext(RootContext);

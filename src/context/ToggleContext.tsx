import React, { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

export type ToggleState = { on: boolean };
export type ToggleAction = { type: "toggle" };

const ToggleContext = createContext<
  | {
      state: ToggleState;
      dispatch: React.Dispatch<ToggleAction>;
    }
  | undefined
>(undefined);

function toggleReducer(state: ToggleState, action: ToggleAction): ToggleState {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    default:
      return state;
  }
}

export function ToggleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toggleReducer, { on: false });
  return (
    <ToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  const ctx = useContext(ToggleContext);
  if (!ctx) throw new Error("useToggle must be used within ToggleProvider");
  return ctx;
}

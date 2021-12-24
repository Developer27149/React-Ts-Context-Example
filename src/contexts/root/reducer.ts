import { IState } from "./context";

export interface IRootAction {
  type: "add_count" | "sub_count" | "update_profile";
  payload:
    | number
    | {
        name: string;
        age: number;
      };
}

export const rootReducer = (state: IState, action: IRootAction): IState => {
  const { type, payload } = action;
  switch (type) {
    case "add_count":
      return {
        ...state,
        count: state.count + (payload as number),
      };
    case "sub_count":
      return {
        ...state,
        count: state.count - (payload as number),
      };
    case "update_profile":
      return {
        ...state,
        profile: payload as typeof state.profile,
      };
    default:
      return state;
  }
};

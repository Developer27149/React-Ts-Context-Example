import { IState, IRootAction } from "./types";

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

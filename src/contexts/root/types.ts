export interface IState {
  count: number;
  profile?: {
    name: string;
    age: number;
  };
}

export interface IRootAction {
  type: "add_count" | "sub_count" | "update_profile";
  payload:
    | number
    | {
        name: string;
        age: number;
      };
}

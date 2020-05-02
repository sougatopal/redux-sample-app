import { TAB_SELECTED } from "../tabsConstants";
import { createReducer } from "../utils/reducerUtils";

const initialState = {
  currentTab: "unitInfo"
};

export function selectTab(state, payload) {
  return {
    currentTab: payload.tabName
  };
}

export default createReducer(initialState, {
  [TAB_SELECTED]: selectTab
});

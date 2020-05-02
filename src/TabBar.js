import React from "react";
import { Menu } from "semantic-ui-react";

import ToggleDisplay from "./ToggleDisplay";

import Tab from "./Tab";
import { connect } from "react-redux";

import { selectCurrentTab } from "./tabsSelectors";
import { selectTab } from "./tabsActions";

const mapState = state => {
  console.log("state", state);
  const currentTab = selectCurrentTab(state);
  return { currentTab };
};
const actions = { onTabClick: selectTab };

export const TabBar = props => {
  const { tabs, currentTab, onTabClick, ...otherProps } = props;
  console.log("props", props);

  const tabItems = tabs.map(tabInfo => {
    const { name, label } = tabInfo;

    return (
      <Tab
        key={name}
        name={name}
        label={label}
        active={currentTab === name}
        onClick={onTabClick}
      />
    );
  });
  const tabPanels = tabs.map(tabInfo => {
    const { name, component: TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  );
};

export default connect(
  mapState,
  actions
)(TabBar);

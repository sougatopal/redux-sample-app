import React from "react";
import "./styles.css";
// import SampleComponent from "./sampleComponent";
import { Header, Container } from "semantic-ui-react";
import TabBarContainer from "./TabBar";
import UnitInfo from "./UnitInfo";
import Pilots from "./Pilots";
import Mechs from "./Mechs";
import UnitOrganization from "./UnitOrganization";

export default function App() {
  const tabs = [
    { name: "unitInfo", label: "Unit Info", component: UnitInfo },
    { name: "pilots", label: "Pilots", component: Pilots },
    { name: "mechs", label: "Mechs", component: Mechs },
    {
      name: "unitOrganization",
      label: "Unit Organization",
      component: UnitOrganization
    }
  ];
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    //   <h4>asdd</h4>
    //   <SampleComponent />
    // </div>
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">
          Project Mini-Mek
        </Header>
      </div>
      <Container>
        <TabBarContainer tabs={tabs} size="massive" />
      </Container>
    </div>
  );
}

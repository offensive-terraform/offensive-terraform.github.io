import React, { lazy, Suspense } from "react";
import { Box, Grommet, Heading, Paragraph } from "grommet";
import { grommet, dark } from "grommet/themes";

import firebase from "./firebase";
import Page from "./components/Page";
import CardPlaceHolder from "./components/CardPlaceHolder";
// import OffensiveTerraformModuleCard from "./components/OffensiveTerraformModuleCard";
const OffensiveTerraformModuleCard = lazy(() =>
  import("./components/OffensiveTerraformModuleCard")
);

const THEMES = {
  grommet,
  dark,
};

function App() {
  const [themeName, setThemeName] = React.useState("grommet");
  const [themeChecked, setThemeChecked] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const response = await db.collection("modules").get();
      setData(response.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const handleThemeChange = (checked) => {
    if (checked) {
      setThemeName("grommet");
    } else {
      setThemeName("dark");
    }
    setThemeChecked(checked);
  };

  return (
    <Grommet theme={THEMES[themeName || "grommet"]}>
      <Page themeChecked={themeChecked} onThemeChange={handleThemeChange}>
        <Box flex align="center" justify="center">
          <Heading level="1" size="large" textAlign="center" margin="none">
            Offensive Terraform Modules
          </Heading>
          <Paragraph size="xxlarge" textAlign="center">
            Automated multi step offensive attack modules with Infrastructure as
            Code(IAC)
          </Paragraph>
        </Box>
        <Box>
          <Box flex direction="row" justify="center" wrap={true}>
            {data.map((offensiveModule, index) => (
              <Suspense fallback={<CardPlaceHolder />}>
                <OffensiveTerraformModuleCard
                  offensiveModule={offensiveModule}
                  key={index}
                />
              </Suspense>
            ))}
          </Box>
        </Box>
        <Box>
          <Heading level="1" size="large" textAlign="center">
            <span role="img" aria-label="happy hacking">
              🤘
            </span>
            Happy Hacking!
            <span role="img" aria-label="happy hacking">
              🤩
            </span>
          </Heading>
        </Box>
      </Page>
    </Grommet>
  );
}

export default App;

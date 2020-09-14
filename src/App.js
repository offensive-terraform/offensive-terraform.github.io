import React from "react";
import {
  Box,
  Grommet,
  Heading,
  Paragraph,
  Card,
  CardBody,
  CardFooter,
  Text,
  Image,
  Button,
} from "grommet";
import { Github, More } from "grommet-icons";
import { grommet, dark } from "grommet/themes";
import Page from "./components/Page";
import data from "./data";

const THEMES = {
  grommet,
  dark,
};

function App() {
  const [themeName, setThemeName] = React.useState("grommet");
  const [themeChecked, setThemeChecked] = React.useState(true);

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
              <Card
                margin="small"
                width="327px"
                background="light-1"
                key={index}
              >
                <CardBody>
                  <Image
                    width="327px"
                    fit="cover"
                    src={offensiveModule.image}
                  />
                  <Box
                    direction="row"
                    gap="small"
                    margin="small"
                    align="center"
                  >
                    <Image
                      width="50px"
                      src={
                        offensiveModule.provider === "AWS" ? "./aws.png" : ""
                      }
                    />
                    <Box>
                      <Text size="small" weight="bold">
                        {offensiveModule.name}
                      </Text>
                    </Box>
                  </Box>
                  <Box margin="small" gap="small" align="center">
                    <Text size="small">{offensiveModule.desc}</Text>
                  </Box>
                </CardBody>
                <CardFooter
                  pad={{ horizontal: "small" }}
                  direction="row"
                  justify="between"
                  align="center"
                  background="light-2"
                >
                  <Button
                    icon={<Github color="plain" />}
                    href={offensiveModule.github}
                    target="_blank"
                    hoverIndicator
                  />
                  <Button
                    icon={<More color="brand" />}
                    href={offensiveModule.terraform}
                    target="_blank"
                    hoverIndicator
                  />
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
        <Box>
          <Heading level="1" size="large" textAlign="center">
            <span role="img" aria-label="happy hacking">
              🤘🤩
            </span>{" "}
            Happy Hacking!
          </Heading>
        </Box>
      </Page>
    </Grommet>
  );
}

export default App;

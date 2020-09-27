import React from "react";
import {
  Box,
  Text,
  ResponsiveContext,
  RoutedAnchor,
  Button,
  CheckBox,
} from "grommet";
import { Cloud, Favorite } from "grommet-icons";

const Nav = (props) => {
  const size = React.useContext(ResponsiveContext);
  const { themeChecked, onThemeChange } = props;

  const handleThemeChange = () => {
    onThemeChange(!themeChecked);
  };

  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      width="xlarge"
      alignSelf="center"
      gap="medium"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      {...props}
    >
      <RoutedAnchor
        path="/"
        icon={<Cloud size="large" />}
        label={
          size !== "small" && <Text size="xlarge">Offensive Terraform</Text>
        }
      />
      <Box direction="row" gap="small">
        <Button
          plain
          href="https://www.patreon.com/offensiveterraform"
          target="_blank"
          rel="noreferrer"
        >
          {({ hover }) => (
            <Box
              pad={{ vertical: "small", horizontal: "medium" }}
              round="xlarge"
              background={hover ? "active" : "control"}
              direction="row"
              gap="small"
            >
              <Favorite />
              <Text icon> Sponsor</Text>
            </Box>
          )}
        </Button>
        <CheckBox toggle checked={themeChecked} onChange={handleThemeChange} />
      </Box>
    </Box>
  );
};

export default Nav;

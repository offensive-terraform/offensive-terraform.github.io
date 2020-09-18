import React from "react";
import { Box, Card, CardBody, CardFooter, Text, Image, Button } from "grommet";
import { Github, More } from "grommet-icons";

const OffensiveTerraformModuleCard = ({ offensiveModule }) => {
  return (
    <Card margin="small" width="327px" background="light-1">
      <CardBody>
        <Image
          width="327px"
          fit="cover"
          src={offensiveModule.image}
          alt={offensiveModule.desc}
        />
        <Box direction="row" gap="small" margin="small" align="center">
          <Image
            width="50px"
            src={offensiveModule.provider === "AWS" ? "./aws.png" : ""}
            alt={
              offensiveModule.provider === "AWS"
                ? "Offensive Terraform Modules for AWS Cloud"
                : ""
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
          rel="noreferrer"
          hoverIndicator
        />
        <Button
          icon={<More color="brand" />}
          href={offensiveModule.terraform}
          target="_blank"
          rel="noreferrer"
          hoverIndicator
        />
      </CardFooter>
    </Card>
  );
};

export default OffensiveTerraformModuleCard;

import React from "react";
import { Card, CardBody } from "grommet";
import Spinner from "./Spinner";

const CardPlaceHolder = () => {
  return (
    <Card width="347px" height="347px" background="light-1" margin="small">
      <CardBody align="center" justify="center">
        <Spinner />
      </CardBody>
    </Card>
  );
};

export default CardPlaceHolder;

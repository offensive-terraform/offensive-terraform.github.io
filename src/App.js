import React from 'react';
import { Grommet, Box } from 'grommet';

const theme = {
  global: {
      
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>Offensive Terraform</AppBar>
    </Grommet>
  );
}

export default App;

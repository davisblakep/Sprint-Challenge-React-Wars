import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function Buttons(props) {
  return (
    <ButtonGroup disableElevation variant="contained">
      <Button onClick={props.pageUp}>Previous Page</Button>
      <Button onClick={props.pageDown}>Next Page</Button>
    </ButtonGroup>
  );
}

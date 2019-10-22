import React from 'react';
import { Card, Grid, GridColumnProps } from 'semantic-ui-react';

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
  leftProps?: GridColumnProps;
  rightProps?: GridColumnProps;
}


const CardContentTwoCol: React.FC<Props> = ({ left, right, leftProps, rightProps }) => {
  return (
    <Card.Content>
      <Grid columns='equal'>
        <Grid.Column {...leftProps}>{ left }</Grid.Column>
        <Grid.Column {...rightProps}>{ right }</Grid.Column>
      </Grid>
    </Card.Content>
  );
}


export default CardContentTwoCol;

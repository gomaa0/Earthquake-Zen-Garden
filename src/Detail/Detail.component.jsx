import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const VIEWABLE_PROPERTIES = [
  {
    key: 'title',
    label: 'title',
  },
  {
    key: 'mag',
    label: 'magnitude',
  },
  {
    key: 'time',
    label: 'time',
  },
  {
    key: 'status',
    label: 'status',
  },
  {
    key: 'tsunami',
    label: 'tsunami',
  },
  {
    key: 'type',
    label: 'type',
  },
];

function LabelText(props) {
  return (
    <Grid
      container
      direction="row"
      className="LabelText"
      style={{fontSize: '0.8em', lineHeight: '1.2em'}}
    >
      <Grid
        item
        xs={2}
        style={{
          textTransform: 'capitalize',
          fontWeight: 'bold',
          marginRight: '5px',
        }}
      >
        {props.label}
      </Grid>
      <Grid item xs={8}>
        {props.value}
      </Grid>
    </Grid>
  );
}

function Detail(props) {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        style={{paddingLeft: '18%'}}
      >
        <h5>{props.title}</h5>
        {Object.values(VIEWABLE_PROPERTIES).map(viewableProperty => (
          <LabelText
            key={viewableProperty.key}
            label={viewableProperty.label}
            value={props[viewableProperty.key]}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Detail;

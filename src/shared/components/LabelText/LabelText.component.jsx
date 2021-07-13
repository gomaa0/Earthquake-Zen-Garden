import React from 'react';
import Grid from '@material-ui/core/Grid';

function LabelText(props) {
  return (
    <Grid
      container
      direction="row"
      className="LabelText"
      style={{
        fontSize: '0.8em',
        lineHeight: '1.2em',
        wordBreak: 'break-word',
        marginBottom: '5px',
      }}
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
      <Grid item xs={props.valueSpan ?? 8}>
        {props.value}
      </Grid>
    </Grid>
  );
}

export default LabelText;

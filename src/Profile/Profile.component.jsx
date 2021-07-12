import React from 'react';
import Container from '@material-ui/core/Container';
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
      <Grid item xs={4}>
        {props.value}
      </Grid>
    </Grid>
  );
}

function Profile(props) {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{paddingLeft: '0'}}
      >
        <h5>Profile</h5>

        <Grid
          container
          direction="row"
          style={{
            fontSize: '0.8em',
            lineHeight: '1.2em',
            flexWrap: 'nowrap',
            transform: 'translateX(100px)',
          }}
        >
          <img
            src={props.avatarImage}
            style={{height: '100px', marginRight: '10px'}}
          />
          <div>
            {Object.entries(props).map(([label, value]) =>
              label !== 'avatarImage' ? (
                <LabelText key={label} label={label} value={value} />
              ) : null,
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;

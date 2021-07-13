import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LabelText from '/shared/components/LabelText/LabelText.component';

function Profile(props) {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{padding: '0 20px'}}
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
                <LabelText
                  key={label}
                  label={label}
                  value={value}
                  valueSpan={4}
                />
              ) : null,
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;

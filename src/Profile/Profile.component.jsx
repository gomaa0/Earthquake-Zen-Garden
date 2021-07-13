import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LabelText from 'Src/shared/components/LabelText/LabelText.component';
import './Profile.styles.scss';

function Profile(props) {
  return (
    <Container maxWidth="sm" className="Profile">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="profile-container"
      >
        <h5>Profile</h5>

        <Grid container direction="row" className="profile-content-container">
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

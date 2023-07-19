import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';

// project import
import AuthCard from './AuthCard';
// import Logo from 'components/Logo';

// assets
// import AuthBackground from 'assets/images/auth/AuthBackground';
import Background from "../../assets/images/auth/background.jpg";

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }) => (
  <Box sx={{ minHeight: '100vh' }} display="flex" direction='row' alignItems="center  ">
    <Grid container>
      <Grid item
        xs={12}
        sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        alignItems="center"
        justifyContent="center">
        <img src={Background} alt="backgroundimg" style={{backgroundRepeat: 'no-repeat', width: 'auto', maxHeight: '80vh' }}></img>
      </Grid>
    </Grid>
    <Grid
      container
    >
      {/* <Grid item xs={12} sx={{ ml: 3 }}>
        <Logo />  
      </Grid> */}
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;

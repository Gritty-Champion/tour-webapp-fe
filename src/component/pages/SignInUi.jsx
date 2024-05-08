import React from 'react'
import { Header } from '../../../src/layout/header'
import InputIcon from '@mui/icons-material/Input';
import { Alert, Box, Button, Grid, TextField, Typography, createTheme, darken, styled } from '@mui/material';
const CenteredContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    marginLeft: "5%", // Reset margin to 0
    padding: 0, // Reset padding to 0
});
const theme = createTheme({
    palette: {
        warning: {
            main: '#ff5722', // Define the color #ff57f2 as the main color for the "warning" palette
        },
    },
});

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const SignInBoxUi = styled(Box)(({ theme }) => ({
    display: "flex",
    maxWidth: "90%",
    borderRadius: theme.shape.borderRadius,
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: "blur(10px)",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    border: `2px solid #ff5722`,
    padding: theme.spacing(4),
    boxShadow: theme.shadows[3],
}));
const StyledHeading = styled(Typography)(({ theme }) => ({
    fontSize: "3rem",
    fontFamily: "cursive",
    color: "#ff5722",
    marginBottom: theme.spacing(4),
}));
 const SignInUI = ({getnamePackages ,  state, setState, onSubmit, loading }) => {
  
  return (
    <>
        <Header getnamePackages={getnamePackages} />   
                 {/* <Box sx={{ ...center, width: "100%", height: "100%" }} > 
                     <SignInBoxUi p={4} component={"form"} width={"100%"} onSubmit={onSubmit}>
                    <Alert severity="warning">Sign In</Alert>
                         <Typography align='center' variant="h5" color={"red"} mb={1}>
                         </Typography>
                         <Box>
                             <TextField
                                 variant="filled"
                                 disabled={loading}
                                 // onChange={(e) => setState({ ...state, email: e.target.value })}
                                 type="email"                                
                                 label={"Email"}
                             />
                              <TextField
                                 variant="filled"
                                 disabled={loading}
                                 // onChange={(e) => setState({ ...state, email: e.target.value })}
                                 type="password"                                
                                 label={"Passwords"}
                             />
                             <TextField
                                 variant="filled"
                                 disabled={loading}
                                 // onChange={(e) => setState({ ...state, email: e.target.value })}
                                 type="password"                                
                                 label={"Confirm Password"}
                             />
                             <Box mt={4}>
                                 <Button variant="contained" loading={loading} disabled={loading} type='submit' title='Sign In' />
                             </Box>
                         </Box>
                     </SignInBoxUi>
                 </Box> */}
                       <CenteredContainer>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <SignInBoxUi component={"form"} onSubmit={onSubmit}>
                    <StyledHeading variant="h1" align="center">
                            Sign Up
                        </StyledHeading>
                        <TextField
                            variant="filled"
                            disabled={loading}
                            type="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            color='warning'
                        />
                        <TextField
                            variant="filled"
                            disabled={loading}
                            type="password"
                            label="Password"
                            fullWidth
                            margin="normal"
                            color='warning'
                        />
                       
                        <Box marginTop={"20px"} textAlign="right">
                            <Button variant="contained" loading={loading} disabled={loading} type='submit' sx={{ backgroundColor: theme.palette.warning.main,'&:hover': {
            backgroundColor: darken(theme.palette.warning.main, 0.2), // Darken the color on hover
        }, }}>
                                Sign In
                            </Button>
                        </Box>
                        {/* <Grid container justifyContent="flex-end" marginTop={2}>
                        <Button variant="contained" loading={loading} disabled={loading} type='submit' sx={{ backgroundColor: theme.palette.warning.main }}>
                            Sign In
                        </Button>
                    </Grid> */}
                    
                    </SignInBoxUi>
                </Grid>
            </Grid>
        </CenteredContainer>

     </>
  )
}

export default SignInUI;


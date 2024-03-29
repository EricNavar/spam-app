import React from 'react';
import { Typography, Box, Paper, Fade, NoSsr } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import HandshakePhoto from './../assets/other/handshake.jpg';
import { PrivacyNotice } from '../components/worstWebsite/PrivacyNotice';
import { Footer } from '../components/worstWebsite/Footer';
import { MyAppBar } from '../components/worstWebsite/AppBar';
import { SimpleSnackBar } from '../components/worstWebsite/SnackBar';
import { GangnamStyle } from '../components/worstWebsite/GangnamStyle';
import '../styling/worstWebsite.css';
import { styled } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Comic Sans MS',
      '"Segoe UI"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Oxyegn',
      'Ubuntu',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      margin: '0 1.5rem',
      maxWidth: '100vw',
      fontWeight: 'bold',
      letterSpacing: 1,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '2.5rem',
      marginBottom: '.25em',
      marginTop: '.5em',
      fontWeight: 600,
    },
  },
});

const Root = styled('div')`
  borderImage: 'url(' + EricEmoji + ') 30 fill / 30px / 30px space',
  padding: 50
`;

const NyanCat = styled('div')`
  backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/cat.gif")',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: 200,
  height: 400
`;

const StyledBox = styled(Box)({
  background: '#f00',
  fontSize: 30,
  letterSpacing: 12,
  width: 75,
  display: 'flex',
});

const GangnamStyleWrapper = styled('div')({
  position: 'fixed',
  top: '50%',
  right: 0,
});

const Plead = styled(Typography)({
  width: 'max-content',
  padding: 40,
  boxShadow:
    'rgba(66,179,245, 0.4) 5px 5px, rgba(66,179,245, 0.3) 10px 10px, rgba(66,179,245, 0.2) 15px 15px, rgba(66,179,245, 0.1) 20px 20px, rgba(66,179,245, 0.05) 25px 25px',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderWidth: 4,
  borderRadius: 8,
  borderColor: 'rgba(66,179,245, 0.6)',
  borderStyle: 'solid',
  fontFamily: 'Poppins',
  fontWeight: 'bold',
});

function WorstWebsite(): JSX.Element {
  function JavaScriptIsPoison() {
    return (
      <Typography
        component="h1"
        variant="h1"
        style={{
          backgroundImage:
            'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
        }}
      >
        JavaScript is poison.
        <br />
        <br />
        Node JS is bloatware.
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={myTheme}>
      <NoSsr>
        <Fade in={true}>
          <Root>
            <Paper elevation={24}>
              <MyAppBar />
            </Paper>
            <div style={{ background: 'white' }}>
              <h1>&lt;div/&gt;Hello World!&lt;div/&gt;</h1>
            </div>
            <StyledBox my={4}>
              <Typography
                component="h1"
                variant="h1"
                style={{ color: 'white', zIndex: 10 }}
              >
                Hello welcome to Eric&apos;s cool and awesome websit
              </Typography>
              <PrivacyNotice />
            </StyledBox>
            <a href='https://knighthack.com'>How to win first place at a hackathon</a><br/>
            <a href='https://ericnavar.github.io/bella-website/'>My first website (Fan page for Bella the dog)</a><br/>
            <a href='/inspire'>Be inspired1</a><br/>
            <a href='https://ericnavar.com'>My real website</a><br/>
            <JavaScriptIsPoison />
            <JavaScriptIsPoison />
            <JavaScriptIsPoison />
            <img
              alt="handshake"
              style={{ width: '100vw' }}
              src={HandshakePhoto}
            />
            <SimpleSnackBar />
            <NyanCat />
            <GangnamStyleWrapper>
              <GangnamStyle />
            </GangnamStyleWrapper>
            <Footer />

            <div className="wrapper">
              <Plead color="textPrimary" variant="h3" align="center">
                Hire me{' '}
                <span role="img" aria-label="pleading face">
                  😈🥵😳
                </span>
              </Plead>
            </div>
          </Root>
        </Fade>
      </NoSsr>
    </ThemeProvider>
  );
}

export { WorstWebsite };

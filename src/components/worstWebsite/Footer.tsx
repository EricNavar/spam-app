import React from 'react';
import { ButtonBase, Grid, GridProps, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactMain = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    justifyContent: 'right',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    marginTop: 18,
  },
  display: 'flex',
  '& div:not(:first-child)': {
    marginTop: 8,
  },
}));

const Buffer = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}));

const StyledGrid = styled(Grid)({
  backgroundColor: '#19202D',
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: '8%',
  paddingRight: '8%',
});

const StyledButtonBase = styled(ButtonBase)({
  height: 48,
  textAlign: 'left',
  color: 'white',
  //svg logo
  '& use': {
    fill: 'white',
  },
  '&:hover': {
    opacity: 0.8,
  },
  '&:active': {
    opacity: 0.8,
  },
});

const ContactItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& a': {
    color: 'white',
  },
});

const ContactLink = styled('a')({
  height: 'min-content',
  marginLeft: 8,
  textDecoration: 'none',
});

function Footer(): JSX.Element {
  const LogoButton = () => {
    return (
      <Grid item xs={4} sm={6} md={4}>
        <StyledButtonBase
          TouchRippleProps={{
            style: { color: 'white' },
          }}
        >
          help
        </StyledButtonBase>
      </Grid>
    );
  };

  const Contact = () => {
    return (
      <ContactMain item xs={12} sm={6} md={4}>
        <div style={{ width: 'min-content' }}>
          <ContactItem>
            <IconButton href="https://www.google.com" size="small"></IconButton>
            <ContactLink href="https://www.google.com">
              google.com
            </ContactLink>
          </ContactItem>
        </div>
      </ContactMain>
    );
  };

  return (
    <StyledGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <LogoButton />
      <Buffer item sm={6}></Buffer>
      <Contact />
    </StyledGrid>
  );
}

export { Footer };

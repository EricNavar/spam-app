import React from 'react';
import { styled, Typography } from '@mui/material';
import MinecraftCursor from '../assets/icons/diamond-sword.png';
//local files

const Root = styled('div')({
  cursor: `url(${MinecraftCursor}), auto`,
  height: 'calc(100vh - 64px)',
});

const Content = styled('div')({
  marginRight: '10%',
  marginLeft: '10%',
});

const ServerLink = styled(Typography)({
  fontSize: '1.4rem',
});

function MinecraftPage(): JSX.Element {
  return (
    <Root>
      <Content>
        <Typography
          color="textPrimary"
          component="h2"
          variant="h4"
          gutterBottom
        >
          Please join my Minecraft server
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          SSDungeons is the official Minecraft server for UF Society of Software
          Developers
        </Typography>
        <ServerLink
          variant="body1"
          gutterBottom
          color="primary"
        >
          51.79.111.26:25602
        </ServerLink>
      </Content>
    </Root>
  );
}

export { MinecraftPage };

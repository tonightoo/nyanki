import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const Main: React.VFC<Props> = ({ children }) => (
  <Box
    as="main"
    minH="100vh"
    padding="4rem 0"
    flex="1"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    bg="gray.500"
  >
    {children}
  </Box>
);

export default Main;

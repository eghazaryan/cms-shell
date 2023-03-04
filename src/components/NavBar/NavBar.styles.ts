import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    paddingTop: 10,
    minWidth: 300,
  },

  navLinks: {},

  navLink: {
    position: 'relative',
    padding: 12,
    width: 300,
    fontWeight: 450,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.blue[0],
    },
  },

  iconRight: {
    position: 'absolute',
    right: 20,
  },
}));

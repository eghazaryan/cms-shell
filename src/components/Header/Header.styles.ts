import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 80,
    paddingLeft: 30,
    paddingRight: 30,
  },

  notifications: {
    position: 'relative',
  },

  number: {
    position: 'absolute',
    border: '1px solid red',
  },
}));

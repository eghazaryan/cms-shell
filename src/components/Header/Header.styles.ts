import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 70,
    paddingLeft: 14,
    paddingRight: 30,
  },

  number: {
    position: 'absolute',
  },
}));

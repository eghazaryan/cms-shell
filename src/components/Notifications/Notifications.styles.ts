import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: {
    paddingTop: 10,
    paddingRight: 10,
    position: 'relative',
  },

  label: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  count: {
    background: theme.colors.blue[4],
    position: 'absolute',
    right: 13,
    top: 11,
    borderRadius: '50px',
    textAlign: 'center',
    width: 10,
    height: 10,
    fontSize: 12,
  },

  status: {
    position: 'absolute',
    right: 0,
    top: 3,
    background: theme.colors.blue[4],
    borderRadius: '50px',
    textAlign: 'center',
    width: 8,
    height: 8,
    fontSize: 12,
  },

  item: {
    '& > div': {
      position: 'relative',
      display: 'flex',
    },
  },

  comment: {
    padding: 4,
    borderRadius: 6,
    border: `1px solid ${theme.colors.gray[4]}`,
  },

  buttonWrapper: {
    textAlign: 'end',
    marginTop: 15,
    marginBottom: 10,
  },

  button: {
    color: theme.colors.blue[5],
  },
}));

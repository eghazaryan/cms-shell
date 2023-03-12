import { createStyles } from '@mantine/core';
import {
  LIGHT_MAIN_FONT_COLOR,
  DARK_MAIN_FONT_COLOR,
  LIGHT_SMALL_FONT_COLOR,
  DARK_SMALL_FONT_COLOR,
} from '../NavBar/NavBar.styles';

export default createStyles((theme) => ({
  root: {
    paddingTop: 10,
    paddingRight: 30,
    position: 'relative',
  },

  bell: {
    position: 'relative',
    color: theme.colorScheme === 'light' ? LIGHT_SMALL_FONT_COLOR : DARK_SMALL_FONT_COLOR,

    '&:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,
    },
  },

  label: {
    fontSize: 18,
    height: 50,
    color: 'black',
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  count: {
    background: theme.colors.blue[4],
    position: 'absolute',
    right: 34,
    top: 11,
    borderRadius: '50px',
    textAlign: 'center',
    width: 8,
    height: 8,
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

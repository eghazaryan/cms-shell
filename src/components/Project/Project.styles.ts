import { createStyles } from '@mantine/core';
import {
  DARK_MAIN_FONT_COLOR,
  LIGHT_SMALL_FONT_COLOR,
  LIGHT_MAIN_FONT_COLOR,
  DARK_SMALL_FONT_COLOR,
} from '../NavBar/NavBar.styles';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  inner: {
    color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,

    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_SMALL_FONT_COLOR : DARK_SMALL_FONT_COLOR,
    },
  },

  icon: {
    marginLeft: 10,
  },

  search: {
    width: 400,
    marginLeft: 60,
  },
}));

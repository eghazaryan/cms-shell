import { createStyles } from '@mantine/core';
import {
  DARK_MAIN_FONT_COLOR,
  LIGHT_MAIN_FONT_COLOR,
  LIGHT_SMALL_FONT_COLOR,
  DARK_SMALL_FONT_COLOR,
} from '../NavBar/NavBar.styles';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,

    fontWeight: 500,

    '&:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_SMALL_FONT_COLOR : DARK_SMALL_FONT_COLOR,
      boxShadowBottom: theme.shadows.md,
    },
  },

  bookmarks: {
    color: theme.colorScheme === 'light' ? LIGHT_SMALL_FONT_COLOR : DARK_SMALL_FONT_COLOR,

    '&:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,
    },
  },

  item: {
    color: theme.colorScheme === 'light' ? '#6e6d7a' : '#C1C2C5',

    '&:hover': {
      color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.gray[3],
    },
  },
}));

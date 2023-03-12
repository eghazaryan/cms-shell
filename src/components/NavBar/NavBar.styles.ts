import { createStyles } from '@mantine/core';

export const LIGHT_MAIN_FONT_COLOR = '#0e0b21';
export const DARK_MAIN_FONT_COLOR = ' #adadad';
export const LIGHT_SMALL_FONT_COLOR = '#6e6d7a';
export const DARK_SMALL_FONT_COLOR = '#C1C2C5';

export default createStyles((theme, params, getRef) => ({
  root: {
    width: 300,
  },

  inner: {
    marginLeft: 12,
  },

  nestedLinks: {
    position: 'relative',
    padding: 12,
    paddingLeft: 40,
    marginLeft: 2,
    width: 300,
    fontWeight: 450,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,

    '&:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,
      background: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[7],

      [`& .${getRef('navIcon')}`]: {
        background: theme.colors.gray[1],
      },
    },
  },

  navLink: {
    position: 'relative',
    padding: 12,
    paddingLeft: 14,
    marginLeft: 2,
    width: 300,
    fontWeight: 450,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,

    '&:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,
      background: theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.gray[7],

      [`& .${getRef('iconRight')}`]: {
        opacity: 1,
        transition:
          'transform 200ms ease-in, opacity 100ms ease-in, -webkit-transform 200ms ease-in',
      },

      [`& .${getRef('navIcon')}`]: {
        background: theme.colors.gray[1],
      },
    },
  },

  linkActive: {
    '&, &:hover': {
      color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,
      borderLeft: '3px solid',
    },
  },

  subTitle: {
    color: theme.colorScheme === 'light' ? LIGHT_MAIN_FONT_COLOR : DARK_MAIN_FONT_COLOR,
  },

  description: {
    color: theme.colorScheme === 'light' ? LIGHT_SMALL_FONT_COLOR : DARK_SMALL_FONT_COLOR,
  },

  icon: {
    width: 26,
    height: 26,
    padding: 3,
    borderRadius: 5,
  },

  iconRight: {
    position: 'absolute',
    right: 20,
    ref: getRef('iconRight'),
    top: '40%',
    transition: 'transform 200ms ease',
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

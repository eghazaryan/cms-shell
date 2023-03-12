import { useMantineTheme } from '@mantine/core';

const colorIndex = [
  'violet',
  'teal',
  'lime',
  'blue',
  'yellow',
  'orange',
  'pink',
  'indigo',
  'grape',
  'red',
  'violet',
  'cyan',
  'yellow',
];

export function getColor(index: number, isBackgroundColor?: boolean) {
  const theme = useMantineTheme();

  return (
    theme.colors[colorIndex[index]]?.[isBackgroundColor ? 1 : theme.fn.primaryShade()] ||
    theme.fn.primaryColor()
  );
}

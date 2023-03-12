import { useMantineColorScheme, ActionIcon, Affix } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Affix position={{ bottom: 15, right: 15 }}>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        radius="xl"
        title="Change color scheme"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3]
          }`,
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
          transition: 'box-shadow 150ms ease',

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
            boxShadow: theme.shadows.md,
          },
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun width={18} height={18} />
        ) : (
          <IconMoonStars width={18} height={18} />
        )}
      </ActionIcon>
    </Affix>
  );
}

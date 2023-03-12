import { AppShell } from '@mantine/core';

interface ShellProps {
  header?: JSX.Element;
  navbar?: JSX.Element;
  children: React.ReactNode;
}

export function Shell({ header, navbar, children }: ShellProps) {
  return (
    <AppShell
      padding="md"
      navbar={navbar}
      header={header}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}

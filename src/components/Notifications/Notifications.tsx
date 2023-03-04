import { Avatar, Button, Menu, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';
import { Notification } from '../../types';
import { messages } from './message';
import useStyles from './Notifications.styles';

interface NotificationsProps {
  data: Notification[];
}

export function Notifications({ data }: NotificationsProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const items = data.map((item) => (
    <>
      <Menu.Item
        className={classes.item}
        key={item.id}
        sx={{ background: item.isActive ? theme.colors.gray[2] : 'unset' }}
      >
        <Avatar src={item.user_data.avatar} mr={10} radius="xl" />
        <div>
          <Text>
            <b>{item.user_data.name} </b> {messages[item.action]}
          </Text>

          {item.action_data.comment && (
            <Text className={classes.comment}>{item.action_data.comment}</Text>
          )}
        </div>
        {item.isActive && <Text className={classes.status} />}
      </Menu.Item>
      <Menu.Divider />
    </>
  ));

  return (
    <div className={classes.root}>
      {data.length && <Text className={classes.count} />}

      <Menu shadow="md" width={500}>
        <Menu.Target>
          <UnstyledButton>
            <IconBell size={27} stroke={1.4} />
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label className={classes.label}>
            Notifications {data.length}
            <UnstyledButton className={classes.button}>Mark all as read</UnstyledButton>
          </Menu.Label>

          {items}

          <div className={classes.buttonWrapper}>
            <Button>View all notifications</Button>
          </div>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

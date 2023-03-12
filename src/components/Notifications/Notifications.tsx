import { Avatar, Badge, Button, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';
import { Fragment } from 'react';
import { Notification } from '../../types';
import { messages } from './message';
import useStyles from './Notifications.styles';

interface NotificationsProps {
  data: Notification[];
}

export function Notifications({ data }: NotificationsProps) {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <Fragment key={item.id}>
      <Menu.Item className={classes.item} key={item.id}>
        <Avatar src={item.user_data.avatar} mr={10} radius="xl" />
        <div>
          <Text>
            <b>{item.user_data.name} </b> {messages[item.action]}
          </Text>

          {item.action_data.comment && (
            <Text className={classes.comment}>{item.action_data.comment}</Text>
          )}
        </div>
      </Menu.Item>
      <Menu.Divider />
    </Fragment>
  ));

  return (
    <div className={classes.root}>
      {data.length && <Text className={classes.count} />}

      <Menu shadow="md" width={500}>
        <Menu.Target>
          <UnstyledButton className={classes.bell}>
            <IconBell size={27} stroke={1.4} />
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label className={classes.label}>
            <Group>
              Notifications <Badge size="lg">{data.length}</Badge>
            </Group>
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

import { Avatar, Menu, Text, UnstyledButton } from '@mantine/core';
import {
  IconChevronDown,
  IconSettings,
  IconLogout,
  IconLicense,
  IconHistory,
  IconWallet,
  IconBookmarks,
} from '@tabler/icons-react';
import { Notification, UserData } from '../../types';
import { Notifications } from '../Notifications';
import useStyles from './User.styles';

interface UserProps {
  data: UserData;
  notifications: Notification[];
}

export function User({ data, notifications }: UserProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Notifications data={notifications} />

      <UnstyledButton mr={15} pt={5}>
        <IconBookmarks size={27} stroke={1.4} />
      </UnstyledButton>

      <Menu shadow="md" width={228}>
        <Menu.Target>
          <UnstyledButton className={classes.inner}>
            <Avatar src={data.avatar} radius="xl" mr={15} />
            <div>
              <Text size="md" mr={15}>
                {data.name}
              </Text>
              <Text size={12}>{data.email}</Text>
            </div>
            <IconChevronDown size={18} stroke={1.4} />
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item icon={<IconHistory size={14} />}>History</Menu.Item>
          <Menu.Item icon={<IconWallet size={14} />}>Billing</Menu.Item>
          <Menu.Item icon={<IconLicense size={14} />}>User permissions</Menu.Item>
          <Menu.Item icon={<IconSettings size={14} />}>Account settings</Menu.Item>

          <Menu.Divider />

          <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

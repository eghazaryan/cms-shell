import { Avatar, Badge, Menu, Text, UnstyledButton } from '@mantine/core';
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
import { getColor } from '../NavBar/getColor';
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

      <UnstyledButton mr={30} pt={5} className={classes.bookmarks}>
        <IconBookmarks size={27} stroke={1.4} />
      </UnstyledButton>

      <Menu shadow="md" width={280} data-testid="test">
        <Menu.Target>
          <UnstyledButton className={classes.inner} p={0}>
            <Avatar src={data.avatar} radius="xl" mr={15} />

            <div style={{ marginRight: 30 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text size="md" mr={17}>
                  {data.name}
                </Text>
                <Badge size="xs"> {data.role}</Badge>
              </div>

              <Text size={13}>{data.email}</Text>
            </div>

            <IconChevronDown size={18} stroke={1.4} />
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item className={classes.item} icon={<IconHistory size={16} color={getColor(9)} />}>
            History
          </Menu.Item>
          <Menu.Item className={classes.item} icon={<IconWallet size={16} color={getColor(4)} />}>
            Billing
          </Menu.Item>
          <Menu.Item className={classes.item} icon={<IconLicense size={16} color={getColor(0)} />}>
            User permissions
          </Menu.Item>
          <Menu.Item className={classes.item} icon={<IconSettings size={17} color={getColor(3)} />}>
            Account settings
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

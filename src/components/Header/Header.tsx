import { Group } from '@mantine/core';
import { Notification, ProjectData, UserData } from '../../types';
import { Project } from '../Project';
import { User } from '../User';
import useStyles from './Header.styles';

interface HeaderProps {
  user: UserData;
  project: ProjectData;
  notifications: Notification[];
}

export function Header({ user, project, notifications }: HeaderProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Project data={project} />

      <Group>
        <User data={user} notifications={notifications} />
      </Group>
    </div>
  );
}

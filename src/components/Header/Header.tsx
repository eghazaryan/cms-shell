import { Group } from '@mantine/core';
import { BranchData, Notification, ProjectData, UserData } from '../../types';
// import { NavBar } from '../NavBar';
import { Project } from '../Project';
import { User } from '../User';
import useStyles from './Header.styles';

interface HeaderProps {
  user: UserData;
  project: ProjectData;
  notifications: Notification[];
  branch: BranchData;
  // navbar: Navigation[];
}

export function Header({ user, project, notifications, branch }: HeaderProps) {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}>
        {/* <NavBar data={navbar} /> */}
        <Project project={project} branch={branch} />

        <Group>
          <User data={user} notifications={notifications} />
        </Group>
      </div>
    </>
  );
}

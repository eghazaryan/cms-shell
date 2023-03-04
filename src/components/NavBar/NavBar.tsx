import { Text, UnstyledButton, Tooltip } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import { Navigation } from '../../types';
import useStyles from './NavBar.styles';

interface NavBarProps {
  data: Navigation[];
}

export function NavBar({ data }: NavBarProps) {
  const { classes } = useStyles();

  const navLink = data.map((link, index) => (
    <UnstyledButton key={index} className={classes.navLink}>
      {link.icon}
      <Tooltip label={link.purpose} multiline>
        <Text ml={12}> {link.label}</Text>
      </Tooltip>

      <IconChevronRight stroke={1.4} size={18} className={classes.iconRight} />
    </UnstyledButton>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.navLinks}> {navLink} </div>
    </div>
  );
}

/*

  <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>

*/

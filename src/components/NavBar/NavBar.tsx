import { useState } from 'react';
import { Navigation } from '../../types';
import { NestedLinks } from './NestedLinks';
import useStyles from './NavBar.styles';

interface NavBarProps {
  data: Navigation[];
}

export function NavBar({ data }: NavBarProps) {
  const { classes } = useStyles();
  const [active, setActive] = useState('');

  const links = data.map((item, index) => (
    <NestedLinks data={item} key={item.label} index={index} setActive={setActive} active={active} />
  ));

  return <div className={classes.root}>{links}</div>;
}

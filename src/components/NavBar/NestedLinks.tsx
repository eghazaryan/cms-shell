import React, { cloneElement } from 'react';
import { UnstyledButton, Text, Collapse, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Navigation } from '../../types';
import { getColor } from './getColor';
import useStyles from './NavBar.styles';

interface NestedLinksProps {
  data: Navigation;
  index: number;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

export function NestedLinks({ data, index, active, setActive }: NestedLinksProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const [opened, { toggle }] = useDisclosure(false);

  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const linkColor = getColor(index);
  const items = data.links?.map((link) => (
    <UnstyledButton className={classes.nestedLinks}>
      {cloneElement(link.icon, {
        color: linkColor,
        className: classes.icon,
      })}

      <div className={classes.inner}>
        <Text weight={600} size={15} className={classes.subTitle}>
          {link.label}
        </Text>

        <Text size={12} className={classes.description}>
          {link.purpose}
        </Text>
      </div>
    </UnstyledButton>
  ));

  return (
    <>
      <UnstyledButton
        key={index}
        className={cx(classes.navLink, { [classes.linkActive]: data.label === active })}
        onClick={() => {
          setActive(data.label);
          toggle();
        }}
        style={{ color: linkColor }}
      >
        {cloneElement(data.icon, {
          color: linkColor,
          className: classes.icon,
        })}

        <div className={classes.inner}>
          <Text weight={600} size={15} className={classes.subTitle}>
            {data.label}
          </Text>

          <Text size={12} className={classes.description}>
            {data.purpose}
          </Text>

          {data.links && (
            <ChevronIcon
              className={classes.iconRight}
              stroke={1.8}
              size={18}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </div>
      </UnstyledButton>
      {data.links ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

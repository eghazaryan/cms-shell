import { Avatar, Input, Text, Tooltip, UnstyledButton } from '@mantine/core';
import { IconChevronRight, IconGitBranch, IconKey, IconSearch } from '@tabler/icons-react';
import React, { useState } from 'react';
import { ProjectData, BranchData } from '../../types';
import useStyles from './Project.styles';

interface ProjectProps {
  project: ProjectData;
  branch: BranchData;
}

export function Project({ project, branch }: ProjectProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <div className={classes.root}>
      <Avatar src={project.icon} radius="lg" color={project.color} mr={15} />

      <div>
        <UnstyledButton>
          <Text size={17} weight={500} className={classes.inner}>
            {project.name}

            <IconChevronRight stroke={1.4} size={18} className={classes.icon} />
          </Text>
        </UnstyledButton>

        <UnstyledButton className={classes.inner} sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip label="4 unpublished changes">
            <Text size={13} weight={400} mr={5}>
              {branch.name}
            </Text>
          </Tooltip>

          <IconGitBranch size={16} color="lightBlue" />

          <Tooltip label={project.key} opened={opened}>
            <IconKey
              size={15}
              stroke={1.4}
              onClick={() => setOpened((e) => !e)}
              className={classes.icon}
            />
          </Tooltip>
        </UnstyledButton>
      </div>

      <Input icon={<IconSearch />} className={classes.search} placeholder="Search here..." />
    </div>
  );
}

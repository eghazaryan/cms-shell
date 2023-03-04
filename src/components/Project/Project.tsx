import React from 'react';
import { ProjectData } from '../../types';
import useStyles from './Project.styles';

interface ProjectProps {
  data: ProjectData;
}

export function Project({ data }: ProjectProps) {
  const { classes } = useStyles();

  return <div className={classes.root}>Project {data.name}</div>;
}

import React from 'react';
import { Header } from '../components/Header';
import { Shell } from '../components/Shell/Shell';
import { notifications, user, project, branch } from './home';

export function About() {
  return (
    <Shell
      header={
        <Header notifications={notifications} user={user} project={project} branch={branch} />
      }
    >
      <div>About page</div>
    </Shell>
  );
}

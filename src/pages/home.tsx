import { AppShell } from '@mantine/core';
import {
  IconCalendarMinus,
  IconDeviceAnalytics,
  IconHelp,
  IconHome,
  IconKey,
  IconPhoto,
  IconPuzzle,
  IconSettingsAutomation,
  IconStack,
  IconTags,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Navigation, Notification, ProjectData, UserData } from '../types';

const notifications: Notification[] = [
  {
    id: '4715394',
    type: 'team',
    action: 'join',
    action_data: {},
    user_data: {
      name: 'Jane Rockleaf',
      email: 'jane@rockleaf.com',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
    isActive: true,
  },
  {
    id: '6341932',
    type: 'comment',
    action: 'new-comment',
    action_data: {
      comment: "This resource name is invalid, it should be 'Home page | Carousel'",
      entity_id: '34124597',
    },
    user_data: {
      name: 'Bill Uturner',
      email: 'buterner@gmail.com',
      avatar:
        'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
    isActive: false,
  },
  {
    id: '4715393',
    type: 'team',
    action: 'join',
    action_data: {},
    user_data: {
      name: 'Jane Geller',
      email: 'jane@rockleaf.com',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
    isActive: false,
  },
];

const user: UserData = {
  name: 'Jane Rockleaf',
  email: 'jane@rockleaf.com',
  avatar:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  role: 'admin',
};

const project: ProjectData = {
  name: 'Dyson Sphere Blog',
  key: 'dyson-sphere-blog',
  color: 'cyan',
  icon: 'satellite',
  description: 'Blog about our process of building dyson sphere',
};

const navigation: Navigation[] = [
  {
    label: 'Dashboard',
    icon: <IconHome stroke={1.4} size={18} />,
    purpose: 'Displays most frequently used actions',
  },
  {
    label: 'Locales',
    icon: <IconWorld stroke={1.4} size={18} />,
    purpose: 'Allows to pick locales',
  },
  {
    label: 'Content schema editor',
    icon: <IconStack stroke={1.4} size={18} />,
    purpose: 'Allows to create content schemas',
  },
  {
    label: 'Content editor',
    icon: <IconStack stroke={1.4} size={18} />,
    purpose: 'Allows to perform CRUD operations with content',
  },
  {
    label: 'Scheduler',
    icon: <IconCalendarMinus stroke={1.4} size={18} />,
    purpose: 'Allows to schedule content releases',
  },
  {
    label: 'Content tags',
    icon: <IconTags stroke={1.4} size={18} />,
    purpose: 'Allowed to target content for different groups of users',
  },
  {
    label: 'Media',
    icon: <IconPhoto stroke={1.4} size={18} />,
    purpose: 'Allows to upload images, videos and other files',
  },
  {
    label: 'Extensions',
    icon: <IconPuzzle stroke={1.4} size={18} />,
    purpose: 'Allows to add additional functions/apps',
  },
  {
    label: 'Team',
    icon: <IconUsers stroke={1.4} size={18} />,
    purpose: 'Allows to manage access to the project',
  },
  {
    label: 'API keys',
    icon: <IconKey stroke={1.4} size={18} />,
    purpose: 'Allows to generate API keys to access content from the API',
  },
  {
    label: 'Analytics',
    icon: <IconDeviceAnalytics stroke={1.4} size={18} />,
    purpose: 'Allows to see stats on how content is requested from the API',
  },

  {
    label: 'Actions',
    icon: <IconSettingsAutomation stroke={1.4} size={18} />,
    purpose: 'Allows to create an actions that will automate editing process',
  },
  {
    label: 'Help center',
    icon: <IconHelp stroke={1.4} size={18} />,
    purpose: 'Allows to find information about CMS functions',
  },
];

export function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<NavBar data={navigation} />}
      header={
        <Header notifications={notifications} user={user} project={project} />
        // <Header height={60} p="xs">
        //   header
        // </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}

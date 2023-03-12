import {
  IconCalendarMinus,
  IconDeviceAnalytics,
  IconHelp,
  IconHome,
  IconKey,
  IconPhoto,
  IconPuzzle,
  IconSettings,
  IconSettingsAutomation,
  IconStack,
  IconTags,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Navigation, Notification, ProjectData, UserData, BranchData } from '../types';
import { Shell } from '../components/Shell/Shell';

export const notifications: Notification[] = [
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
  },
];

export const user: UserData = {
  name: 'Jane Rockleaf',
  email: 'jane@rockleaf.com',
  avatar:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  role: 'admin',
};

export const project: ProjectData = {
  name: 'Dyson Sphere Blog',
  key: 'dyson-sphere-blog',
  color: 'cyan',
  icon: 'satellite',
  description: 'Blog about our process of building dyson sphere',
};

export const branch: BranchData = {
  name: 'development',
  id: '123443',
};

// export const navigation: Navigation[] = [
//   {
//     label: 'Dashboard',
//     icon: <IconHome stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Displays most frequently used actions',
//   },
//   {
//     label: 'Locales',
//     icon: <IconWorld stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to pick locales',
//   },
//   {
//     label: 'Content schema editor',
//     icon: <IconStack stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to create content schemas',
//   },
//   {
//     label: 'Content editor',
//     icon: <IconStack stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to perform CRUD operations with content',
//   },
//   {
//     label: 'Scheduler',
//     icon: <IconCalendarMinus stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to schedule content releases',
//   },
//   {
//     label: 'Content tags',
//     icon: <IconTags stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allowed to target content for different groups of users',
//   },
//   {
//     label: 'Media',
//     icon: <IconPhoto stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to upload images, videos and other files',
//   },
//   {
//     label: 'Extensions',
//     icon: <IconPuzzle stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to add additional functions/apps',
//   },
//   {
//     label: 'Team',
//     icon: <IconUsers stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to manage access to the project',
//   },
//   {
//     label: 'API keys',
//     icon: <IconKey stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to generate API keys to access content from the API',
//   },
//   {
//     label: 'Analytics',
//     icon: <IconDeviceAnalytics stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to see stats on how content is requested from the API',
//   },

//   {
//     label: 'Actions',
//     icon: <IconSettingsAutomation stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to create an actions that will automate editing process',
//   },
//   {
//     label: 'Help center',
//     icon: <IconHelp stroke={1.4} size={18} data-testid="navlinkIcon" />,
//     purpose: 'Allows to find information about CMS functions',
//   },
// ];
export const navigation: Navigation[] = [
  {
    label: 'Dashboard',
    icon: <IconHome stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Frequently used actions',
  },
  {
    label: 'Content',
    icon: <IconStack stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Content schemas',
    links: [
      {
        label: 'Schemas',
        icon: <IconStack stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'List of content schemas',
      },
      {
        label: 'Content schema editor',
        icon: <IconStack stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'Create content schema',
      },
      {
        label: 'Content editor',
        icon: <IconStack stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'Edit content schemas',
      },
    ],
  },
  {
    label: 'Media',
    icon: <IconPhoto stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Upload images, videos and files',
  },
  {
    label: 'Scheduler',
    icon: <IconCalendarMinus stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Schedule content releases',
  },
  {
    label: 'Content tags',
    icon: <IconTags stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Target content for groups',
  },

  {
    label: 'Locales',
    icon: <IconWorld stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Pick locales',
  },
  {
    label: 'Analytics',
    icon: <IconDeviceAnalytics stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Stats for content requests',
  },
  {
    label: 'Settings',
    icon: <IconSettings stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Project settings',
    links: [
      {
        label: 'Team',
        icon: <IconUsers stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'Manage access to the project',
      },
      {
        label: 'API keys',
        icon: <IconKey stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'Generate API keys',
      },
      {
        label: 'Actions',
        icon: <IconSettingsAutomation stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'Create actions for automate editing process',
      },
      {
        label: 'Extensions',
        icon: <IconPuzzle stroke={1.4} size={20} data-testid="navlinkIcon" />,
        purpose: 'Add additional functions/apps',
      },
    ],
  },
  {
    label: 'Help center',
    icon: <IconHelp stroke={1.4} size={20} data-testid="navlinkIcon" />,
    purpose: 'Information about CMS',
  },
];
export function Home() {
  return (
    <Shell
      navbar={<NavBar data={navigation} />}
      header={
        <Header notifications={notifications} user={user} project={project} branch={branch} />
      }
    >
      <div>Home page</div>
    </Shell>
  );
}

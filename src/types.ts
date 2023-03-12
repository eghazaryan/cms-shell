interface ActionData {
  comment?: string;
  entity_id?: string;
}

export interface UserData {
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'author' | 'guest';
}

export interface Notification {
  id: string;
  type: 'team' | 'comment';
  action: 'join' | 'new-comment';
  action_data: ActionData;
  user_data: Omit<UserData, 'role'>;
}

export interface BranchData {
  name: string;
  id: string;
}

export interface ProjectData {
  name: string;
  key: string;
  color: 'cyan';
  icon: string;
  description: string;
}

export interface ContentSchema {
  name: string;
  key: string;
  updated_at: string;
  description: string;
  status: 'active' | 'inactive';
}

export interface Navigation {
  label:
    | 'Dashboard'
    | 'Schemas'
    | 'Content'
    | 'Content schema editor'
    | 'Content editor'
    | 'Media'
    | 'Content tags'
    | 'Locales'
    | 'Extensions'
    | 'Team'
    | 'API keys'
    | 'Analytics'
    | 'Help center'
    | 'Actions'
    | 'Scheduler'
    | 'Settings';
  purpose: string;
  // icon: string;
  icon: JSX.Element;
  links?: Navigation[];
}

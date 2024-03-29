export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  message: string;
  image: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
};

export type ChatMessage = {
  text: string,
  isSent: boolean,
  timestamp: Date,
}

export type AuthStackParamList = {
  SplashScreen: undefined;
  SignupScreen: undefined;
  LoginScreen: undefined;
  EmailEntryScreen: undefined;
  NumberEntryScreen: undefined;
  VerificationCodeScreen: { userId: string; email?: string; mobile?: string };
  PasswordEntryScreen: { userId: string; email?: string; mobile?: string };
  ProfileDetailScreen: {
    userId: string;
    password: string;
    email?: string;
    mobile?: string;
  };
  GenderEntryScreen: {
    userId: string;
    password: string;
    email?: string;
    mobile?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: string;
    companyName: string;
    companyWebsite: string;
    linkedInProfile: string;
    avatar: string;
  };
  AreasOfInterestScreen: {
    userId: string;
    password: string;
    email?: string;
    mobile?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: string;
    companyName: string;
    companyWebsite: string;
    linkedInProfile: string;
    avatar: string;
    gender: string;
  };
};
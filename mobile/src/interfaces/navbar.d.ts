import { CommunityResponse } from './community';
import { TopicResponse } from './topic';
import { TopicUserResponse } from './topicUser';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  ChooseTopic: undefined;
  Learning: undefined;
  Community: undefined;
  Activity: { topicUser: TopicUserResponse };
  RegisterTopic: { topic: TopicResponse };
  CommunityChat: { community: CommunityResponse }
  Profile: undefined;
  Streak: undefined;


JournalTopics: undefined;

  JournalNotes: {
    topic: {
      id: number;
      name: string;
    };
  };

  JournalViewNote: {
    note: {
      id: number;
      text: string;
      date: string;
    };
  };

  JournalCreateNote: {
    topic: {
      id: number;
      name: string;
    };
  };
};

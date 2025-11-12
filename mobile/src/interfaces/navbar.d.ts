import { CommunityResponse } from './community';
import { JournalResponse } from './journal';
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
  MyTopics: undefined;


JournalTopics: undefined;

  JournalNotes: {
    topic: TopicResponse
  };

  JournalViewNote: {
    note: JournalResponse;
  };

  JournalCreateNote: {
    topic: TopicResponse,
    message?: string
  };
};

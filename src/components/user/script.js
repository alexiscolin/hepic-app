import config from './config.json';
import userProfile from './profile';
import userContent from './content';
import userNotification from './notification';

export default {
  name: 'user',
  components: {
    userProfile,
    userContent,
    userNotification,
  },
  data() {
    return {
      user: config.user,
    };
  },
}

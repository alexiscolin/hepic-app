import layerPopin from '@/components/layout/layer-popin';
import config from './config.json';
import userProfile from './profile';
import userContent from './content';
import userSettings from './settings';
import userNotification from './notification';

export default {
  name: 'user',
  components: {
    userProfile,
    userContent,
    userNotification,
    layerPopin,
    userSettings,
  },
  data() {
    return {
      user: config.user,
      displayPopin: false,
    };
  },
};

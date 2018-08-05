import shellApp from '@/components/AppLayout/TheShell';
import layerPopin from '@/components/AppLayout/layer-popin';
import config from './config.json';
import userProfile from './UserProfile';
import userContent from './UserContent';
import userSettings from './settings-routes';
import userNotification from './UserNotification';

export default {
  name: 'user',
  components: {
    shellApp,
    userProfile,
    userContent,
    userNotification,
    layerPopin,
    userSettings,
  },
  data() {
    return {
      user: config.user,
    };
  },
  computed: {
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },
  },
};

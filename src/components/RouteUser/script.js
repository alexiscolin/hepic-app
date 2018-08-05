import shellApp from '@/components/AppLayout/TheShell';
import layerPopin from '@/components/AppLayout/layer-popin';
// import config from './config.json';
import UserProfile from './UserProfile';
import UserContent from './UserContent';
import UserSettings from './settings-routes';
import UserNotification from './UserNotification';

export default {
  name: 'user',
  components: {
    shellApp,
    UserProfile,
    UserContent,
    UserNotification,
    layerPopin,
    UserSettings,
  },
  computed: {
    displayedPopin: function $displayedPopin() {
      return this.$store.state.popin.displayed;
    },
  },
};

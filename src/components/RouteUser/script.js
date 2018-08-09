import shellApp from '@/components/AppLayout/TheShell';
import layerPopin from '@/components/AppLayout/LayerPopin';
import UserProfile from './UserProfile';
import UserContent from './UserContent';
import UserSettings from './UserSettingsRoutes';
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
  beforeRouteUpdate: function $beforeRouteUpdate(from, to, next) {
    // si on repart sur notre page, on charge notre contenu
    to.name === 'User' && this.$store.commit('setUserProfile', JSON.parse(localStorage.getItem('user-data')));
    next();
  },
};

// import { mapActions } from 'vuex';

export default {
  name: 'socialBtn',
  methods: {
    auth(network) {
      const hello = this.hello;
      hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse();
        console.log(network);
        console.log(authRes);

        this.$store.dispatch('getToken', {
          platform: network,
          token: authRes.access_token,
        });

        /*
          performs operations using the token from authRes
        */
        hello(network).api('me').then((json) => {
          const profile = json;
          console.log(profile);

          // this.$router.push('/flux');
          /*

            performs operations using the user info from profile
          */
        });
      });
    },
  },
};

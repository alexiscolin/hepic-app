export default {
  name: 'facebookBtn',
  methods: {
    auth(network) {
      const hello = this.hello;
      hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse();
        console.log(authRes);
        /*
          performs operations using the token from authRes
        */
        hello(network).api('me').then((json) => {
          const profile = json;
          console.log(profile);
          /*

            performs operations using the user info from profile
          */
        });
      });
    },
  },
};

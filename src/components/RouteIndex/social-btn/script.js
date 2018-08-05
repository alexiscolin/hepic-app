export default {
  name: 'socialBtn',
  methods: {
    auth(network) {
      const hello = this.hello;
      hello(network).login().then(() => { // helloJS connexion
        const authRes = hello(network).getAuthResponse();

        this.$store.dispatch('getToken', { // demande au store de récupérer infos sur API Hepic
          platform: network,
          token: authRes.access_token,
        }).then(() => {
          this.$router.push('/flux'); // redirection
        });
      });
    },
  },
};

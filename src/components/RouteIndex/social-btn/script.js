import createFormData from '@/utils/form-data';

export default {
  name: 'socialBtn',
  methods: {
    auth(network) {
      const hello = this.hello;
      hello(network).login().then(() => { // helloJS connexion
        const authRes = hello(network).getAuthResponse();

        const dataNetwork = createFormData({
          platform: network,
          token: authRes.access_token,
        });

        this.$store.dispatch('getToken', dataNetwork).then(() => {
          this.$router.push('/flux'); // redirection
        });
      });
    },
  },
};

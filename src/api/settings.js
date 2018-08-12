// POST - Message to contact admin
const POST_CONTACT_MESSAGE = function $POST_CONTACT_MESSAGE(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: endpoints.get('postContactMessage'),
  };
  return axios(opt);
};

export default {
  POST_CONTACT_MESSAGE,
}

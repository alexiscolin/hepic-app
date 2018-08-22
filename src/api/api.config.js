const HEPIC_URL = 'https://api.hepic.fr';

const endpoints = {
  getToken: `${HEPIC_URL}/auth/login`,
  getContests: `${HEPIC_URL}/contests/`,
  getContest: `${HEPIC_URL}/contest/`,
  getContestRules: `${HEPIC_URL}/rules/`,
  getContestPhotos: `${HEPIC_URL}/photos/by_contest/`,
  postContestPhoto: `${HEPIC_URL}/photos/`,
  // postPhotoVote: `${HEPIC_URL}/photo/vote/`,
  getPhoto: `${HEPIC_URL}/photo/`,
  postReport: `${HEPIC_URL}/reports/`,
  deletePhoto: `${HEPIC_URL}/photo/`,
  getUserPhotos: `${HEPIC_URL}/photos/by_profile/`,
  getUserProfile: `${HEPIC_URL}/profile/`,
  getConfigCGU: `${HEPIC_URL}/cgu/`,
  postContactMessage: `${HEPIC_URL}/contacts/`,
  getNotification: `${HEPIC_URL}/notifications/not_read`,
  putNotification: `${HEPIC_URL}/notifications/mark_as_read`,
};

const endpointsMap = new Map(Object.entries(endpoints));
export default endpointsMap;

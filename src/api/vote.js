import axios from 'axios';
import endpoints from './api.config';

// POST - vote pour photo
const POST_PHOTO_VOTE = function $POST_PHOTO_VOTE(data) {
  const opt = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    url: endpoints.get('postPhotoVote'),
  };
  return axios(opt);
};

// POST - picture report (JSON -> change pour FORM_DATA)
const POST_PHOTO_REPORT = function $POST_PHOTO_REPORT(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: endpoints.get('postReport'),
  };
  return axios(opt);
};

export default {
  POST_PHOTO_VOTE,
  POST_PHOTO_REPORT,
};

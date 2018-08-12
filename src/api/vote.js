import axios from 'axios';
import endpoints from './api.config';

// POST - contest picture
const POST_PHOTO_VOTE = function $POST_PHOTO_VOTE(data) {
  const opt = {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data,
    url: endpoints.get('postPhotoVote'),
  };
  return axios(opt);
};

// POST - contest picture
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

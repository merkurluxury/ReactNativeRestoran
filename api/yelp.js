import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
    'Bearer ahH61q08ExTy3MVAssA5TlqcvwXHPHRl3qAwwHST7UkeVRlpnn3t59dwCobPR75-DeaAOwGTibNIh1DvL-Fv4a-RD4fR5d-WVUgVxZZ6xLDxoIZY6NVU-EJMccf0ZHYx',
  },
});

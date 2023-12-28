import { Client } from '@elastic/elasticsearch';
import {
  ELASTICSEARCH_AUTH_PASSWORD,
  ELASTICSEARCH_AUTH_USERNAME,
  ELASTICSEARCH_CLOUD_ID,
  ELASTICSEARCH_CLUSTER_ENDPOINT,
} from '../constants';

export const client = new Client({
  cloud: {
    id: ELASTICSEARCH_CLOUD_ID,
  },
  auth: {
    username: ELASTICSEARCH_AUTH_USERNAME,
    password: ELASTICSEARCH_AUTH_PASSWORD,
  },
  // log: 'error', // Set the log level as needed
  // maxRetries: 3, // Adjust the number of retries
  // requestTimeout: 30000, // Adjust the request timeout in milliseconds
});

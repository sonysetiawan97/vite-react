import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { authMock } from './authMock';

export const enableMocks = () => {
  const mock = new MockAdapter(axios, { delayResponse: 1000 });

  authMock(mock);

  console.info('Mock services enabled.');
};

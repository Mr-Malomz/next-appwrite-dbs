import { Storage, Client } from 'appwrite';

const appwriteSDK = () => {
  const client = new Client();
  const storage = new Storage(client);

  client.setEndpoint('http://localhost/v1').setProject('62bcbd79bba694ad0695');

  return storage;
};

export default appwriteSDK;

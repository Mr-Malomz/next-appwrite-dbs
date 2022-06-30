import { Storage, Client, Account } from 'appwrite';

const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('62bcbd79bba694ad0695');

export const appwriteSDK = () => {
  const storage = new Storage(client);

  return storage;
};

export const accountSDK = () => {
  const account = new Account(client);

  return account;
};

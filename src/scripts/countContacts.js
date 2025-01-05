import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts.length;
  } catch (error) {
    console.log('Ошибка при подсчете контактов:', error.message);
  }
};

console.log(await countContacts());

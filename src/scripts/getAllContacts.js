import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const currentContacts = await readContacts();
    return currentContacts || [];
  } catch (error) {
    console.log('Ошибка при получении контактов:', error.message);
  }
};

console.log(await getAllContacts());

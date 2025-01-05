import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const updatedContacts = currentContacts || [];
    updatedContacts.push(createFakeContact());
    await writeContacts(updatedContacts);
    console.log('Контакт успешно добавлен!');
  } catch (error) {
    console.log('Ошибка при добавлении контакта:', error.message);
  }
};

addOneContact();

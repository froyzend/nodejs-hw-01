import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();
    const updatedContacts = currentContacts || [];
    updatedContacts.pop();
    await writeContacts(updatedContacts);
    console.log('Контакт успешно удален!');
  } catch (error) {
    console.log('Ошибка при удалении контакта:', error.message);
  }
};

removeLastContact();

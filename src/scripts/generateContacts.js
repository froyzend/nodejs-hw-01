// src/scripts/generateContacts.js
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();

    const updatedContacts = currentContacts || [];

    for (let i = 0; i < number; i++) {
      updatedContacts.push(createFakeContact());
    }

    await writeContacts(updatedContacts);

    console.log(`${number} новых контактов успешно добавлены.`);
  } catch (error) {
    console.log('Ошибка при генерации контактов:', error.message);
  }
};

generateContacts(5);

import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
    /*
    console.log('Контакты успешно сохранены!');*/
  } catch (error) {
    console.log('Ошибка при записи данных в файл:', error.message);
  }
};

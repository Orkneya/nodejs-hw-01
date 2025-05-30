import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти видалено!');
  } catch (err) {
    console.error('Помилка видалення контактів:', err);
  }
};

removeAllContacts();

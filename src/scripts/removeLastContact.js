import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
    }
    await writeContacts(contacts);
    console.log('Останній елемент видален!');
  } catch (err) {
    console.error('Помилка видалення останнього контакту:', err);
  }
};

removeLastContact();

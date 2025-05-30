import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (err) {
    console.error('Помилка рахування контактів:', err);
  }
};

console.log(await countContacts());

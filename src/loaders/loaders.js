import { getContacts } from "../mockServer/contacts";

export async function contactsLoader() {
    const contacts = await getContacts();
    return { contacts }
}
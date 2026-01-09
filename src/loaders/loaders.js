import { getContact, getContacts } from "../mockServer/contacts";

export async function contactsLoader() {
    const contacts = await getContacts();
    return { contacts }
}

export async function contactLoader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact }
}
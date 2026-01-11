import { redirect } from 'react-router-dom';
import { createContact, deleteContact, updateContact } from "../mockServer/contacts";

export async function createContactAction() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
    // return { contact };
}

export async function updateContactAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export async function deleteContactAction({ params }) {
    const contactId = params.contactId;
    await deleteContact(contactId);
    return redirect(`/`);
}
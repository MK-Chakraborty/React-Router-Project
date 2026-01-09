import { createContact } from "../mockServer/contacts";

export async function createContactaction() {
    const contact = await createContact();
    return { contact };
}
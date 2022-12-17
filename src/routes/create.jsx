import { createContact } from '../contacts'
import CreateFrom from "./customForms/createForm";

export async function action({ request, params }) {
    const formData = await request.formData();
    let response = await createContact(formData)
}

export default function NewContact() {
    return <CreateFrom />
}
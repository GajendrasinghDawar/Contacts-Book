import { useLoaderData, redirect, } from "react-router-dom";

import { updateContact } from "../contacts";
import UpateForm from "./customForms/updateForm";

export async function action({ request, params }) {
    const formData = await request.formData();
    let response = await updateContact(params.contactId, formData);
    let data = await response.json()
    return redirect(`/contacts/${params.contactId}`);
}


export default function EditContact() {
    const contact = useLoaderData();
    return <UpateForm contact={contact} />
}
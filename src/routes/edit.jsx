import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";

import { updateContact } from "../contacts";
import UpateForm from "./customForms/updateForm";
export async function action({ request, params }) {
    const formData = await request.formData();
    let response = await updateContact(params.contactId, formData);
    let data = await response.json()
    console.log('data returned by update route')
    console.log(data)
    return redirect(`/contacts/${params.contactId}`);
}


export default function EditContact() {
    const contact = useLoaderData();
    const navigate = useNavigate();
    return (
        <UpateForm
            contact={contact}
        />
    );
}
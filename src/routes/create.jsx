import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";

import { createContact } from '../contacts'
import CreateFrom from "./customForms/createForm";
export async function action({ request, params }) {
    const formData = await request.formData();
    // const updates = Object.fromEntries(formData);
    // console.log(formData instanceof FormData)
    let response = await createContact(formData)
    // let data = await response.json()
    // console.log('data returned by create route')
    // console.log(data)
    // return  redirect(`/contacts/${data.id}/edit`);
}

export default function NewContact() {
    // const contact = useLoaderData();
    // const navigate = useNavigate();
    return (
        <><CreateFrom /></>
    );
}
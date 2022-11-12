import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";

import { createContact } from '../contacts'

export async function action({ request, params }) {
    const formData = await request.formData();
    // const updates = Object.fromEntries(formData);
    console.log(formData instanceof FormData)
    let response = await createContact(formData)
    let data = await response.json()
    console.log('data returned by create route')
    console.log(data)
    // return  redirect(`/contacts/${data.id}/edit`);
   
}

export default function NewContact() {
    // const contact = useLoaderData();
    // const navigate = useNavigate();
    return (
        <Form method="post" id="contact-form" encType="multipart/form-data"  >
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first_name"
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last_name"
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter_handle"
                    placeholder="@jack"
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar_url"
                />
            </label>
            <label>
                <span>Avatar Image</span>
                <input
                    aria-label="Avatar URL"
                    type="file"
                    name="avatar_image"
                // defaultValue={contact.avatar_image}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="note"
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button"
                    onClick={() => {
                        // navigate(-1);
                    }}>Cancel</button>
            </p>
        </Form>
    );
}
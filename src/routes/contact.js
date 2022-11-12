import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getContact, updateFavorite } from "../contacts";

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateFavorite(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export async function loader({ params }) {
  let contact =getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return contact
}

export default function Contact() {
  const contact = useLoaderData();
  // console.log(contact)
  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar_image || null}
        />
      </div>

      <div>
        <h1>
          {contact.first_name || contact.last_name ? (
            <>
              {contact.first_name} {contact.last_name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter_handle}`}
            >
              {contact.twitter_handle}
            </a>
          </p>
        )}

        {contact.note && <p>{contact.note}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  if(fetcher.formData){
    favorite=fetcher.formData.get('favorite') ==='true'
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
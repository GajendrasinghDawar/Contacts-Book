import { useEffect } from "react";
import { Outlet, NavLink, useLoaderData, useNavigation, useNavigate, useSubmit, Form } from "react-router-dom";

import { getContacts, createContact } from "../contacts";


export async function loader({ request }) {
  const url = new URL(request.url)
  const search = url.searchParams.get("search")
  const response = await getContacts(search);
  let contacts = await response.json();
  return { contacts, search }
}

export async function action(request) {
  await createContact();
}

export default function Root() {

  const { contacts, search } = useLoaderData()
  const navigate = useNavigate()
  const navigation = useNavigation();
  const submit = useSubmit()


  function handleCreateContact() {
    navigate('/contacts/create')
  }

  useEffect(() => {
    document.getElementById('q').value = search

  }, [search])

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "search"
    );
  return (
    <>
      <div id="sidebar">
        <h1> Contact Book</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="search"
              defaultValue={search}
              onChange={(event) => {
                const isFirstSearch = search == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>

          <button type="submit" onClick={handleCreateContact}>New</button>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink to={`contacts/${contact.id}`}
                    className={
                      ({ isActive, isPending }) => {
                        return isActive ? "active" : isPending ? 'pending' : ''
                      }
                    }
                  >
                    {contact.first_name || contact.first_name ? (
                      <>
                        {contact.first_name} {contact.last_name}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail"
        className={
          navigation.state === 'loading' ? 'loading' : ''
        }>
        <Outlet />
      </div>
    </>
  );
}
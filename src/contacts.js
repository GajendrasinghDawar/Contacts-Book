export async function getContacts(search) {
  if (search !== null) {
    return fetch(`http://127.0.0.1:8000/contacts_book_api/?search=${search}`);;
  }
  return fetch("http://127.0.0.1:8000/contacts_book_api/");
}
export async function getContact(id) {
  let response = await fetch(`http://127.0.0.1:8000/contacts_book_api/${id}`);
  let data = await response.json();
  // console.log(data);
  return data;
}

export async function createContact(formData) {
  return fetch("http://127.0.0.1:8000/contacts_book_api/", {
    method: "POST", // or 'PUT'
    body: formData,
  });
}

export async function updateContact(id, formData) {
  console.log(`${id} form data ${formData}`)
  return fetch(`http://127.0.0.1:8000/contacts_book_api/${id}/`, {
    method: "PUT",
    body: formData,
  })

}
export function updateFavorite(id, formData) {
  return fetch(`http://127.0.0.1:8000/contacts_book_api/togglefave/${id}/`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
    })
    .catch((error) => {

    });
}


export async function deleteContact(id) {
  fetch(`http://127.0.0.1:8000/contacts_book_api/${id}`, {
    method: "DELETE",
  })
    .then((data) => {

    })
    .catch((error) => {

    });
}

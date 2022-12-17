export async function getContacts(search) {
  if (search !== null) {
    return fetch(`https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/?search=${search}`);;
  }
  return fetch("https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/");
}
export async function getContact(id) {
  let response = await fetch(`https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/${id}`);
  let data = await response.json();
  // console.log(data);
  return data;
}

export async function createContact(formData) {
  return fetch("https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/", {
    method: "POST", // or 'PUT'
    body: formData,
  });
}

export async function updateContact(id, formData) {

  return fetch(`https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/${id}/`, {
    method: "PUT",
    body: formData,
  })

}
export function updateFavorite(id, formData) {
  return fetch(`https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/togglefave/${id}/`, {
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
  fetch(`https://gajendrasinghdawar.pythonanywhere.com/contacts_book_api/${id}`, {
    method: "DELETE",
  })
    .then((data) => {

    })
    .catch((error) => {

    });
}

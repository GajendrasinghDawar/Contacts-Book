import { json } from "react-router-dom";

export async function getContacts(search) {
  let data;
  let response;
  console.log(search)
  if (search !== null) {
    // response = await fetch(`http://127.0.0.1:8000/contacts/?search=${search}`);
    // data = await response.json();
    return fetch(`http://127.0.0.1:8000/contacts/?search=${search}`);;
  }
  // response = await fetch("http://127.0.0.1:8000/contacts/");
  // data = await response.json();
  return fetch("http://127.0.0.1:8000/contacts/");
}
export async function getContact(id) {
  let response = await fetch(`http://127.0.0.1:8000/contacts/${id}`);
  let data = await response.json();
  // console.log(data);
  return data;
}

export async function createContact(formData) {
  return fetch("http://127.0.0.1:8000/contacts/", {
    method: "POST", // or 'PUT'
    body: formData,
  });
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log('Success:', data);
  //   return data.id
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
}

export async function updateContact(id, formData) {
 return  fetch(`http://127.0.0.1:8000/contacts/${id}`, {
    method: "PUT",
    body: formData,
  })
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log("Success:", data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
}
export function updateFavorite(id,formData) {
  fetch(`http://127.0.0.1:8000/contacts/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


export async function deleteContact(id) {
  fetch(`http://127.0.0.1:8000/contacts/${id}`, {
    method: "DELETE",
  })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// function set(contacts) {
//   return localforage.setItem("contacts", contacts);
// }

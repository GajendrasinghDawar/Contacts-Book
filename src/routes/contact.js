import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { Card, Image, Stack, CardBody, Heading, Text, Button, CardFooter, Link, HStack, } from "@chakra-ui/react";

import { getContact, updateFavorite } from "../contacts";

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateFavorite(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}
export async function loader({ params }) {
  let contact = getContact(params.contactId);
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

  return (
    <Stack
      width='full'
    >
      <Card
        direction={{ base: 'row', sm: 'column', lg: 'row' }}
        overflow='auto'
        variant='outline'
        borderColor={'purple.400'}
      >
        <Image
          mx={2}
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          key={contact.avatar}
          src={contact.avatar_image || null}
        />
        <Stack>

          <CardBody>
            <HStack>
              <Heading size='md'>  {contact.first_name || contact.last_name ? (
                <>
                  {contact.first_name} {contact.last_name}
                </>
              ) : (
                <i>No Name</i>
              )}{" "}</Heading>
              <Favorite contact={contact} />
            </HStack>

            {contact.twitter_handle && (
                  <Link
                    target="_blank"
                href={`https://twitter.com/${contact.twitter_handle}`} rel="noreferrer"
                isExternal
                color='teal.500'
                  >
                {contact.twitter_handle}
              </Link>
              )}

            {contact.note && <Text>{contact.note}</Text>}

          </CardBody>

          <CardFooter>
            <Form action="edit">
              <Button type="submit" mx={2}>Edit</Button>
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
              <Button colorScheme='green' type="submit" >Delete</Button>
            </Form>
          </CardFooter>
        </Stack>
      </Card>
    </Stack>

  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  if (fetcher.formData) {
    console.log(`in fetcher fave`)
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
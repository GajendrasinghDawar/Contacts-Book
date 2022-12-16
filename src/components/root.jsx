// import { useEffect } from "react";
// import { Outlet, NavLink, useLoaderData, useNavigation, useNavigate, useSubmit, Form } from "react-router-dom";
import {
  HStack, Flex, Text, IconButton
} from '@chakra-ui/react'
import { getContacts, createContact } from "../contacts";

// layout
import SideBar from "./sideBar";
import Main from "./main";

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

  // const { contacts, search } = useLoaderData()
  // const navigate = useNavigate()
  // const navigation = useNavigation();
  // const submit = useSubmit()


  // function handleCreateContact() {
  //   navigate('/contacts/create')
  // }

  // useEffect(() => {
  //   document.getElementById('q').value = search

  // }, [search])

  // const searching =
  //   navigation.location &&
  //   new URLSearchParams(navigation.location.search).has(
  //     "search"
  //   );



  return (
    <>


      <HStack
        w="full"
        h="100vh"
        padding={10}
        bg={'blackAlpha.900'}
      >
        <Flex as='aside'
          w="full"
          h="full"
          maxW={[300, 180, 300]}
          bg={'green.100'}
          padding={3}
          flexDirection='column'
          borderRadius='3xl'
          transition={'ease-in-out .2s'}
        >
          {/* sidebar */}
          <SideBar />
        </Flex>
        <Flex
          as={'main'}
          w="full"
          h="full"
          bg={'pink.100'}
          alignItems={'center'}
          flexDirection='column'
          justifyContent={'center'}
          borderRadius='3xl'
          position={'relative'}
          p={4}
        >
          <Main />
        </Flex>
      </HStack>
    </>
  );
}
import React from 'react'
import { Heading, HStack, VStack, ListItem, List, Link, Text, Button, Spacer } from '@chakra-ui/react';
import { NavLink, useLoaderData, useNavigation, useNavigate, useSubmit, } from "react-router-dom";

import SearchFrom from './customForms/searchFrom';

export default function SideBar() {

    const { contacts, search } = useLoaderData()
    const navigate = useNavigate()
    const navigation = useNavigation();
    const submit = useSubmit()

    React.useEffect(() => {
        document.getElementById('q').value = search
    }, [search])

    function handleCreateContact() {
        navigate('/contacts/create')
    }

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "search"
        );

    function onSearch(event) {
        const isFirstSearch = search == null;
        submit(event.currentTarget.form, {
            replace: !isFirstSearch,
        });
    }
    return (
        <VStack
            borderColor={'gray.100'}
            p={2}
            alignItems='center'
            justifyContent={'space-between'}
            gap={2}
            w={'full'}
        >
            <VStack w={'full'}>
                <HStack>
                    <SearchFrom searching={searching} search={search} onSearch={onSearch} />
                    <Button
                        type="submit"
                        onClick={handleCreateContact}
                        colorScheme='green'
                    >New</Button>
                </HStack>

                <VStack
                    w={'full'}
                    overflowY={'auto'}
                    height='60vh'
                >
                    {contacts.length ? (
                        <List spacing={3}>
                            {contacts.map((contact) => (
                                <ListItem key={contact.id}>
                                    <Link
                                        as={NavLink}
                                        to={`contacts/${contact.id}`}
                                        color={'purple.500'}
                                        fontSize={'1.2rem'}
                                    >
                                        {contact.first_name || contact.first_name ? (
                                            <>
                                                {contact.first_name} {contact.last_name}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Text>
                            <i>No contacts</i>
                        </Text>
                    )}
                </VStack>
            </VStack>
            <Spacer />
            <HStack
                w={'full'}
                alignItems='center'
                justifyContent={'center'}
                textAlign={'center'}
            >
                <Heading
                    fontSize={[10, 25]}
                    color='green.500'
                > Contact Book
                </Heading>
            </HStack>
        </VStack>

    )
}

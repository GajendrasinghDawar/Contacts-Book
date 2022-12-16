import React from 'react'
import { Outlet, NavLink, useLoaderData, useNavigation, useNavigate, useSubmit, Form } from "react-router-dom";
import { useColorMode, Button, VStack, Heading } from '@chakra-ui/react'
export default function Main() {
    const navigation = useNavigation();
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <VStack
            w="full"
            h="full"
            flex={1}
        >
            <Heading>ContactBook</Heading>
            <Outlet />
        </VStack>
    )
}

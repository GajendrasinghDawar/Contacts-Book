import React from 'react'
import { Outlet, } from "react-router-dom";
import { VStack, Heading } from '@chakra-ui/react'
export default function Main() {
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

import { Heading, VStack, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    // console.log(error)
    return (
      <VStack p={'12rem'} textAlign='center'>
        <Heading color={'purple.300'}>Oops!</Heading>
        <Text color={'red.400'}>Sorry, an unexpected error has occurred.</Text>
        <Text color={'green.500'}>
          {error.statusText || error.message}
        </Text>
      </VStack>
    )
}
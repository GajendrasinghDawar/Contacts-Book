import { Heading, VStack, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    // console.log(error)
    return (
      <VStack >
        <Heading color={'purple.300'}>Oops!</Heading>
        <Text color={'red.400'}>Sorry, an unexpected error has occurred.</Text>
        <Text>
          {error.statusText || error.message}
        </Text>
      </VStack>
    )
}
import { Heading, VStack, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return (
      <VStack >
        <Heading>Oops!</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>
          <i>{error.statusText || error.message}</i>
        </Text>
      </VStack>
    )
}
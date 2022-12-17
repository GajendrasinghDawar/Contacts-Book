import { VStack, Text, Spacer, Link } from "@chakra-ui/react";
export default function Index() {
    return (
      <VStack
        p={4}
        w={'full'}
        justifyContent='center'
      >
        <Text>
          Its Remix of React, React Router and Django Integration.
        </Text>

        <Spacer />

        <Text>Check  Gajendrasingh Dawar's website  at {" "}
          <Link href="https://gajendrasinghdawar.tk/" color={'red.400'}>
            gajendrasinghdawar.tk
          </Link>
          .
        </Text>
      </VStack>
    );
  }
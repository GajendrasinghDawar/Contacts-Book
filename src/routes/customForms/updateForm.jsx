import React from 'react'
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Input, FormLabel, Textarea } from '@chakra-ui/react'
import { Button, chakra, HStack, VStack } from '@chakra-ui/react'


const CustomForm = chakra(Form)

export default function UpateForm({ contact }) {

    const navigate = useNavigate()

    return (
        <VStack >
            <CustomForm method="post" id="contact-form" encType="multipart/form-data" >
                <HStack>
                    <FormLabel>Name</FormLabel>
                    <Input
                        placeholder="First"
                        aria-label="First name"
                        type="text"
                        name="first_name"
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        focusBorderColor='pink.400'
                        defaultValue={contact.first_name}
                    />
                    <Input
                        defaultValue={contact.last_name}
                        placeholder="Last"
                        aria-label="Last name"
                        type="text"
                        name="last_name"
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        focusBorderColor='pink.400'
                    />
                </HStack>

                <HStack>
                    <FormLabel>Twitter</FormLabel>
                    <Input

                        defaultValue={contact.twitter_handle}
                        focusBorderColor='pink.400'
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        type="text"
                        name="twitter_handle"
                        placeholder="@GajendrasinghDwr"
                    />

                </HStack>

                <HStack>
                    <FormLabel>Avatar URL</FormLabel>

                    <Input
                        defaultValue={contact.avatar_url}
                        placeholder="https://example.com/avatar.jpg"
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        aria-label="Avatar URL"
                        type="text"
                        focusBorderColor='pink.400'
                        name="avatar_url"
                    />
                </HStack>

                <HStack>
                    <FormLabel>Avatar Image</FormLabel>
                    <Input
                        focusBorderColor='pink.400'
                        aria-label="Avatar URL"
                        type="file"
                        name="avatar_image"
                    // defaultValue={contact.avatar_image}
                    />
                </HStack>

                <HStack>
                    <FormLabel>Notes</FormLabel>
                    <Textarea
                        defaultValue={contact.note}
                        focusBorderColor='purple.400'
                        name="note"
                        rows={3}
                    />
                </HStack>

                <HStack
                    mt={3}>
                    <Button type="submit">Save</Button>
                    <Button type="button"
                        colorScheme='green'
                        onClick={() => {
                            navigate(-1);
                        }}>Cancel</Button>
                </HStack>

            </CustomForm>

        </VStack>
    )
}




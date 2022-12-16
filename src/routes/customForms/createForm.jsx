import React from 'react'
import { Button, chakra, HStack, VStack } from '@chakra-ui/react'
import { Form } from "react-router-dom";
import { Input, IconButton, FormLabel, Textarea } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";
import { useNavigate, } from "react-router-dom";

const CustomForm = chakra(Form)

export default function CreateFrom() {
    const navigate = useNavigate();
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
                        focusBorderColor='purple.400'
                    />
                    <Input
                        placeholder="Last"
                        aria-label="Last name"
                        type="text"
                        name="last_name"
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        focusBorderColor='purple.400'
                    />
                </HStack>
                <HStack>
                    <FormLabel>Twitter</FormLabel>

                    <Input
                        focusBorderColor='purple.400'
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        type="text"
                        name="twitter_handle"
                        placeholder="@GajendrasinghDwr"
                    />

                </HStack>
                <HStack>
                    <FormLabel>Avatar URL</FormLabel>

                    <Input
                        placeholder="https://example.com/avatar.jpg"
                        _placeholder={{ opacity: 1, color: 'purple.400' }}
                        aria-label="Avatar URL"
                        type="text"
                        focusBorderColor='purple.400'
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
                    />
                </HStack>
                <HStack>
                    <FormLabel>Notes</FormLabel>
                    <Textarea
                        focusBorderColor='purple.400'
                        name="note"
                        rows={3}
                    />
                </HStack>
                <HStack>
                    <Button type="submit">Save</Button>
                    <Button type="button"
                        onClick={() => {
                            navigate(-1);
                        }}>Cancel</Button>
                </HStack>
            </CustomForm>

        </VStack>
    )
}




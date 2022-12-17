import React from 'react'
import { Form } from "react-router-dom";
import { chakra, Input, IconButton, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BiSearch } from "react-icons/bi";

const CustomForm = chakra(Form)

export default function SearchFrom({ searching, search, onSearch }) {
    return (
        <CustomForm id="search-form" role="search">
                <InputGroup >
                    <InputLeftElement
                    pinterEvents='none'
                        children={<IconButton
                            fontSize='20px'
                            variant='ghost'
                            icon={<BiSearch />}
                            aria-label='loading search'
                            isLoading={searching ? true : false}
                            colorScheme='green'
                        />}
                    />
                    <Input
                        isInvalid
                        errorBorderColor='red.200'
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="search"
                        defaultValue={search}
                    onChange={onSearch}
                    />
                </InputGroup>
        </CustomForm>
    )
}




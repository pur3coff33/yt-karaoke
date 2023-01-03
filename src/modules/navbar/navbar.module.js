import { Flex, Heading, HStack, Link } from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"

const NavBarModule = () =>{
    return <>
        <Flex h='5rem' bg='gray.50' alignItems='center'  p='1rem' boxShadow='2xl' justifyContent='space-between'>
            <ReactLink to={'/'}>
                <Heading size='md' color='gray.900'>YT Karaoke</Heading>
            </ReactLink>
            <HStack spacing='1rem'>
                <Link>About</Link>
                <Link>Support</Link>
                <Link>Tutorial</Link>

            </HStack>
            
        </Flex>
       
    </>
}

export default NavBarModule
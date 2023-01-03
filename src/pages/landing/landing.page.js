import { Button, Flex, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TutorialPage from "./components/tutorial";

const LandingPage = () => {

    const backgroundImageURL = 'https://img.freepik.com/free-photo/young-teenage-black-african-american-boy-singer-performing-concert_1258-114830.jpg?w=2000'

    return<>
        <VStack w={'100%'} spacing={'1rem'}>
            <Flex w={'100%'} p={'1rem'} justifyContent={'center'} alignItems='center' backgroundImage={`url(${backgroundImageURL})`} backgroundPosition='center' minHeight={'20rem'}>
                <VStack p='1rem' spacing={'2rem'} bgColor='whiteAlpha.700' borderRadius={'0.3rem'}>
                    <VStack>
                        <Heading size={'lg'}>YT Karaoke</Heading>
                        <Text>Youtube karaoke made <strong>EZ</strong>.</Text>
                    </VStack>
                
                    <HStack spacing={'0.6rem'}>
                        <Input placeholder="Enter room ID" colorScheme='orange'></Input>
                        <Button colorScheme='orange' w='100px'>Join</Button>
                        <Link to='/create-room'>
                            <Button colorScheme='orange' w='180px' variant='outline'>Create Room</Button>
                        </Link>
                    </HStack>
                </VStack>
            </Flex>
            <TutorialPage />
        </VStack>
    </>
}

export default LandingPage;
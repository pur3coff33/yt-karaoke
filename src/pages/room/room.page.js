import {Button, Card, CardBody, Divider, Flex, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import ReactPlayer from 'react-player/youtube'
import React, { useEffect, useRef, useState } from 'react'


const RoomPage = () => {

    const ytPlayer = useRef()
    const [isPlaying, setIsPlaying] = useState(true)

    const [playlist, setPlaylist] = useState([])
    const [playlistTitles, setPlaylistTitles] = useState([])
    const [currentSong, setCurrentSong] = useState(playlist[0])

    const fcURL = useRef()


    const onNextSong = async () => {
        //remove first element
        const currPlaylist = playlist
        currPlaylist.shift()
        setPlaylist(currPlaylist)
        setCurrentSong(playlist[0])
        setIsPlaying(true)
        updateTitle()

    }

    //init
    useEffect(()=>{
        (async ()=> {
            let titles = []
            for(let url of playlist){
                titles.push(await getTitle(url))
            }
            setPlaylistTitles(titles)
        })()
    },[])

    const updateTitle = async () => {
        let titles = []
        for(let url of playlist){
            titles.push(await getTitle(url))
        }
        setPlaylistTitles(titles)
    }

    const getTitle = async (vidURL) => {
        const res = await fetch(`https://noembed.com/embed?dataType=json&url=${vidURL}`)
        const data = await res.json()
        return data.title;
    }  

    const addToQueue = async () => {

        const inputValueURL = fcURL.current.value
        if(ReactPlayer.canPlay(inputValueURL)){
            const temp = playlist
            temp.push(inputValueURL)
            setPlaylist(temp)
            updateTitle()
            fcURL.current.value = ''
        }


    }

    return (
        <Flex p={'1rem'} gap='1rem' justifyContent={'center'}>
            <VStack w={'full'} maxW='1440px'>
                <Card w={'full'}>
                    <CardBody>
                        <HStack>
                            <Input placeholder='Enter youtube url' ref={fcURL}></Input>
                            <Button colorScheme={'orange'} variant='solid' onClick={addToQueue}>Add to Queue</Button>
                        </HStack>
                        
                    </CardBody>
                </Card>
                <HStack w={'full'}>
                    <Card w='full'>
                        <CardBody>
                            <ReactPlayer ref={ytPlayer} url={currentSong} controls width={'100%'} height={'500px'} onEnded={onNextSong} playing={isPlaying}/>
                        </CardBody>
                    </Card>
                
                    <Card w='sm' h={'600px'} variant='outline' overflowY={'scroll'}>
                        <CardBody>

                            <VStack>
                                <Heading>Playlist</Heading>
                                <VStack w={'full'} alignItems='flex-start'>
                                    {playlistTitles.map((song, index) => <div key={index}><Text>{ (index + 1) + '. ' + song}</Text>{index===0 && <Divider mt='1rem' />}</div>)}
                                </VStack>
                            </VStack>
                            
                        </CardBody>

                    </Card>
                
                </HStack>
                
            </VStack>
        </Flex>
    )

}

export default RoomPage
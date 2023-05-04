import { Box, Text,  Heading, VStack, HStack } from "@chakra-ui/react";
import { faCode, faSearch, faPalette, faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <Box
        as="section"
        bg="RGBA(0, 0, 0, 0.80)"
        >
            <Box
             maxW="1280px" 
             height="24em"
             margin="auto"
             textAlign="center"
            >
                <VStack
                 justify="center"
                 alignItems="center"
                 color="white"
                 pt="8"
                >
                <Box w="600px" mb="9">
                    <Text color="gold" as="h1">SERVICES</Text>
                    <Heading>What I Am Great At</Heading>
                    <Text as="p" >I am a Software Engineer, specialize in making an Attractive website that goes with the principle of UI/UX. also a Graphic Design, an online and offline Instructor. Am good at what i do am looking forward in Collaborating with new Engineers in Creating more Great Project </Text>
                </Box>
                </VStack>
                <HStack
                maxW="1280px"
                margin="auto"
                justify="space-between"
                paddingLeft="10"
                paddingRight="10"
                >
                    <Box
                    w="170px"
                    h="150px"
                    bg="RGBA(0, 0, 0, 0.92)"
                    
                    >
                        <VStack m="auto" mt="12" >
                        <FontAwesomeIcon color="gold" size="2xl" icon={faPalette} />
                        <Text as="p" color="white">UX/UI Design</Text>
                        </VStack>
                    </Box>
                    <Box
                    w="170px"
                    h="150px"
                    bg="RGBA(0, 0, 0, 0.92)"
                    color="white"
                    >
                        <VStack 
                        justify="center"
                        align="center"
                        paddingTop="12"
                        m="auto">
                        <FontAwesomeIcon color="white" size="2xl" icon={faCode} />
                        <Text as="p">Web Development</Text>
                        </VStack>
                    </Box>
                    <Box
                    w="170px"
                    h="150px"
                    bg="RGBA(0, 0, 0, 0.92)"
                    >
                        <VStack 
                        justify="center"
                        align="center"
                        m="auto"
                        mt="12">
                        <FontAwesomeIcon color="gold" size="2xl" icon={faSearch} />
                        <Text as="p" color="white">Web Research</Text>
                        </VStack>
                    </Box>
                    <Box
                    color="white"
                    w="170px"
                    h="150px"
                    bg="RGBA(0, 0, 0, 0.92)"
                    >
                        <VStack
                        justify="center"
                        align="center"
                        m="auto"
                        paddingTop="12"
                        >
                        <FontAwesomeIcon size="2xl" icon={faChartColumn}  />
                        <Text as="p">Marketing</Text>
                        </VStack>
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}
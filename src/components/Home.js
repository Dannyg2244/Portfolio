import { Box, HStack, Text, Flex, Button, Image, Heading } from "@chakra-ui/react";
import img1 from "./images/danny1.jpg"
import { Route, Routes} from "react-router-dom"
import Contact from "./Contact";
import { Link } from "react-router-dom";

export default function Home(){
    return (
            <Box 
            as="section"
            bg="RGBA(0, 0, 0, 0.92)"
            >
                <Box 
                maxW="1280px" 
                height="24em"
                margin="auto"
                >
                    <HStack
                    px="6"
                    py="4"
                    justify="space-between"
                    color="white"
                    >
                        <Box alignItems="center">
                            <Flex direction="column" color="white">
                                <Text as="h1" fontWeight="extrabold" fontSize="5xl" fontFamily="sans-serif">
                                    Daniel
                                </Text>
                                <Flex>
                                <Text as="h1" fontWeight="extrabold" fontSize="5xl" fontFamily="sans-serif" mt="-9">
                                    Gbenga
                                </Text>
                                <Text as="h1" fontWeight="extrabold" fontSize="5xl" fontFamily="sans-serif" mt="-9" color="gold">
                                    .
                                </Text>
                                </Flex>
                                <Box borderBottom="1px solid gold" w="20px" mt="4" mb="4" />
                            </Flex>
                            <Flex>
                            <Text as="p" mr="4"><a href="https://www.instagram.com/">Instagram</a></Text>
                            <Box mr="4" borderRight="1px solid white"/>
                            <Text as="p" ><a href="https://www.linkedin.com/feed/">Linkedin</a></Text>
                            </Flex>
                            <Flex mt= "2.5">
                            <Text mr="4" as="p" ><a href="https://twitter.com/home">Twitter</a></Text>
                            <Box mr="4" borderRight="1px solid white"/>
                            <Text mr="4" as="p" ><a href="https://web.facebook.com/">Facebook</a></Text>
                            <Box mr="4" borderRight="1px solid white"/>
                            <Text as="p" ><a href="https://github.com/Dannyg2244">Github</a></Text>
                            </Flex>
                            <Button mt="5" variant="outline" bg="transparent" borderColor="gold" ><Link isExternal color="gold" to="/contact">CONTACT ME</Link></Button>
                        </Box>
                        <Box>
                        <Image 
                        src={img1}
                        alt="Dannygenius image"
                        w="300px"
                        h="350px"
                        />
                        </Box>
                        <Box w="300px"
                        >
                        <Text color="gold" as="h1">INTRODUCTION</Text>
                        <Heading >UI/UX DESIGNER, FULL STACK WEB DEVELOPER</Heading>
                        <Text as="p">Daniel Gbenga is a very dedicated person and has a good team spirit. he his willing to work with any organization and to gain more experience in the process</Text>
                        </Box>
                    </HStack>
                    <Routes>
                    <Route exact path="/contact" element={<Contact />}  />
                    </Routes>
                </Box>
            </Box>
    )
}
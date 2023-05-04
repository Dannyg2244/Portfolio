import { Submit } from "../hooks/useSubmit";
import React from "react";
import { Box, HStack,Text, Flex} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowDown, } from "@fortawesome/free-solid-svg-icons"
import {
    faFacebook, 
    faLinkedin, 
    faTwitter, 
    faInstagram, 
    faGithub
} from "@fortawesome/free-brands-svg-icons"
import { Route, Routes } from "react-router-dom"
import Contact from "./Contact";
import { Link} from "react-router-dom";
export default function Header() {
    return (
        <Box
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        backgroundColor="RGBA(0, 0, 0, 0.92)"
        >
            <Box
            color="white"
            maxW="1280px"
            margin="auto"
            h="5rem"
            >
                <HStack
                px="4"
                py="4"
                justify="space-between"
                align="center"
                >
                    <nav>
                        <HStack>
                        <Flex>
                                <Text as="h1" fontWeight="extrabold" fontSize="3xl" fontFamily="sans-serif" mt="-5">
                                   DG
                                </Text>
                                <Text as="h1" fontWeight="extrabold" fontSize="3xl" fontFamily="sans-serif" mt="-5" color="gold">
                                    .
                                </Text>
                                </Flex>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing="32px" >
                        <Link to="/"><Text as="p" fontWeight="semibold" >Home</Text></Link>
                        <Link to="/portfolio"><Text as="p" fontWeight="semibold" >Portfolios</Text></Link>
                        <Link to="/blog"><Text as="p" fontWeight="semibold" >
                            Blog <FontAwesomeIcon size="xs" icon={faArrowDown} /> </Text></Link>
                        <Link to="/contact"><Text as="p" fontWeight="semibold" >Contact</Text></Link>
                        
                        <HStack borderRight="1px solid white" marginLeft="4px">
                            <Text color="black">i</Text>
                        </HStack>

                        <HStack spacing="12px">
                        <a href="https://web.facebook.com/" rel="noOpener noReferral" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.linkedin.com/feed/" rel="noOpener noReferral" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/" rel="noOpener noReferral" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://twitter.com/home" rel="noOpener noReferral" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://github.com/Dannyg2244" rel="noOpener noReferral" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <Box>
                           theme <Submit />
                        </Box>
                        </HStack>
                        </HStack>
                        
                    </nav>
                    
                    <Routes>
                    <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                   
                </HStack>
            </Box>

        </Box>
    )
}
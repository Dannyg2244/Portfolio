import { Box, FormControl, FormHelperText, FormLabel, Text, VStack } from "@chakra-ui/react"
import {useState} from "react"
import React from "react"


function Contact() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [feedback, setFeedback] = useState("")

    const handleErrorMessage = () => {
        return (
            <p>pls provide a feedback that is 15 character long</p>
        )
    }

    const isFormValid = () => {
        return(
        fullname &
        email &
        feedback.length > 15
    )}

    const clearForm = () => {
        setFeedback("")
        setEmail("")
        setFullname("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        clearForm()
        alert("form submitted")
    }
    return (
        <Box
        top={0}
        left={0}
        right={0}
        bg="gold"
        p="10"
        >
            <Box
            maxWidth="1280px"
            height="100vh"
            margin="auto"
            >
                <VStack>
                <Box
                height="90vh"
                w="50%"
                boxShadow="0px 0px 0px 1px white"
                >
                    <Box
                    height="20vh"
                    bg="gold"
                    p="6"
                    >
                        <Text as="h1" fontSize="2xl" fontWeight="800" fontFamily="sans-serif"> 
                        Contact Us
                        </Text>
                        <Text as="p" fontSize="xl"> please kindly fill this form in s decent manner</Text>
                    </Box>
                    <Box 
                    bg="whiteAlpha.500"
                    p="6"
                    >
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired mb="4">
                                <FormLabel>Full Name </FormLabel>
                                <input 
                                type="text" 
                                placeholder="Fullname"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                />
                            </FormControl>
                            <FormControl isRequired mb="4">
                                <FormLabel>Email Address</FormLabel>
                                <input 
                                type="email" 
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormHelperText>We'll never share your email.</FormHelperText>
                                </FormControl>
                                <FormControl isRequired mb="4">
                                <FormLabel>Feedback</FormLabel>
                                <textarea 
                                type="text" 
                                placeholder="Feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                />
                                {feedback.length < 15 ? handleErrorMessage() : null}
                            </FormControl>
                            <button type="submit" disabled={!isFormValid()} bg="gold" variant="outline">Submit</button>
                           
                        </form>
                    </Box>
                </Box>
                </VStack>
            </Box>
        </Box>
    )
}

export default Contact
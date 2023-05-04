import React from "react";
import { ChakraProvider, Flex,  } from "@chakra-ui/react";
import { ThemeProvider, useUser } from "./context/alertContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
const Root = () => {
    const {theme} = useUser()
    return (
        <div
        style={{
        backgroundColor: theme === "light" ? "black" : "white"
        }}
        >
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

function App() {
    return (
        <ChakraProvider>
            <ThemeProvider>
            <Flex direction="column" width="100%">
            <Root />
            </Flex>
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default App

/*
function App() {
    return (
        <ChakraProvider>
            <Contact />
            </ChakraProvider>
    )
}

export default App

*/
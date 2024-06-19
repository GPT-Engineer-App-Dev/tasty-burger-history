import { Container, Text, VStack, Heading, Box, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">The History of Hamburgers</Heading>
        <Text fontSize="lg" textAlign="center">Discover the fascinating journey of the hamburger, from its origins to becoming a global icon.</Text>
        <Box boxSize="sm">
          <Image src="/images/hamburger.jpg" alt="Hamburger" objectFit="cover" />
        </Box>
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading as="h2" size="lg" mb={4}>Origins</Heading>
          <Text fontSize="md" mb={6}>The hamburger's origins can be traced back to the 19th century, with various claims from Germany and the United States.</Text>
          <Heading as="h2" size="lg" mb={4}>Rise to Fame</Heading>
          <Text fontSize="md" mb={6}>In the 20th century, hamburgers became a staple of American cuisine, thanks to the rise of fast food chains.</Text>
          <Heading as="h2" size="lg" mb={4}>Global Icon</Heading>
          <Text fontSize="md" mb={6}>Today, hamburgers are enjoyed worldwide, with countless variations and styles.</Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
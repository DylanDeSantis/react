import { Center, Box, Image } from "@chakra-ui/react";
import imagen from "../assets/logo.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <img src={imagen} />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;

import { Flex, Button, HStack, Image } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel,
} from "chakra-framer-carousel";

const images = [
  "https://cdn.discordapp.com/attachments/1022991150333820929/1031451136768606239/Landing_msg.jpg",
  "https://cdn.discordapp.com/attachments/1022991150333820929/1031437861393797130/Gardens_of_the_moon.jpg",
  "https://cdn.discordapp.com/attachments/1022991150333820929/1031437861737734144/Star_Wars_Bloodline.jpg",
  "https://cdn.discordapp.com/attachments/1022991150333820929/1031437862035525662/The_name_of_the_wind.jpg",
  "https://cdn.discordapp.com/attachments/1022991150333820929/1031437862320738334/White_Fang.jpg",
];

function Card({ image, index }) {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      h={
        isCenter
          ? { base: "300px", md: "400px", xl: "470px" }
          : { base: "280px", md: "320px", xl: "420px" }
      }
      w={
        isCenter
          ? { base: "200px", md: "280px", xl: "330px" }
          : { base: "180px", md: "220px", xl: "290px" }
      }
      boxShadow="lg"
      as="button"
      onClick={onClickHandler}
    >
      <Image
        h={
          isCenter
            ? { base: "300px", md: "400px", xl: "470px" }
            : { base: "280px", md: "320px", xl: "420px" }
        }
        w={
          isCenter
            ? { base: "200px", md: "280px", xl: "330px" }
            : { base: "180px", md: "220px", xl: "290px" }
        }
        src={image}
        objectFit=""
        objectPosition="center center"
        borderRadius={10}
      />
    </Flex>
  );
}

function Toolbar() {
  const { onNext, onPrevious } = useCarousel();
  return (
    <Flex w="full" justify="center">
      <HStack>
        <Button
          colorScheme="yellow"
          w={{ base: "40px", sm: "55px", md: "65px" }}
          onClick={onPrevious}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          colorScheme="yellow"
          w={{ base: "40px", sm: "55px", md: "65px" }}
          onClick={onNext}
        >
          <ArrowForwardIcon />
        </Button>
      </HStack>
    </Flex>
  );
}

const homeCarousel = () => {
  return (
    <Carousel>
      <CarouselItems>
        {images.map((image, index) => {
          return (
            <CarouselItem index={index} key={image}>
              <Card index={index} image={image} />
            </CarouselItem>
          );
        })}
      </CarouselItems>
      <Toolbar />
    </Carousel>
  );
};

export default homeCarousel;

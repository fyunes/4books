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
  "https://github.com/avilalte/skillfactory-third-project/blob/dev/src/assets/images/fr.jpg?raw=true",
  "https://github.com/avilalte/skillfactory-third-project/blob/dev/src/assets/images/al.jpg?raw=true",
  "https://github.com/avilalte/skillfactory-third-project/blob/dev/src/assets/images/Me.jpg?raw=true",
  "https://github.com/avilalte/skillfactory-third-project/blob/dev/src/assets/images/fa.jpg?raw=true",
];

function Card({ image, index }) {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      h={
        isCenter
          ? { base: "300px", md: "400px", xl: "450px" }
          : { base: "280px", md: "320px", xl: "400px" }
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
            ? { base: "300px", md: "400px", xl: "450px" }
            : { base: "280px", md: "320px", xl: "400px" }
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

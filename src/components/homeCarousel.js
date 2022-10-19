import { Flex, Button, HStack, Image, Tooltip} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel,
} from "chakra-framer-carousel";

const images = [
  "https://cdn.discordapp.com/attachments/1032221834747318292/1032221916389445632/Landing_msg.jpg",
  "https://cdn.discordapp.com/attachments/1022991150333820929/1031437861393797130/Gardens_of_the_moon.jpg",
  "https://cdn.discordapp.com/attachments/1032221834747318292/1032221916720803931/Star_Wars_Bloodline.jpg",
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
        <Tooltip placement="bottom" label="Previous" bg="brown.900" hasArrow>
          <Button
            colorScheme="yellow"
            w={{ base: "40px", sm: "55px", md: "65px" }}
            onClick={onNext}
          >
            <ArrowBackIcon />
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" label="Next" bg="brown.900" hasArrow>
        <Button
          colorScheme="yellow"
          w={{ base: "40px", sm: "55px", md: "65px" }}
          onClick={onPrevious}
        >
          <ArrowForwardIcon />
        </Button>
        </Tooltip>
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

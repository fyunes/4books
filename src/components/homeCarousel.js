import { Flex, Button, HStack, Image, Tooltip } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel,
} from "chakra-framer-carousel";
import image1 from "../assets/images/carousel/Landing-msg.jpg";
import image2 from "../assets/images/carousel/Gardens-of-the-moon.jpg";
import image3 from "../assets/images/carousel/Star-Wars-Bloodline.jpg";
import image4 from "../assets/images/carousel/The-name-of-the-wind.jpg";
import image5 from "../assets/images/carousel/White-Fang.jpg";

const images = [image1, image2, image3, image4, image5];

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

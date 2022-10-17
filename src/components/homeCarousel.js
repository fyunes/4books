import { Flex, Button, HStack, Image } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel,
} from "chakra-framer-carousel";

// const images = [
//   "../assets/images/carousel/1.jpg",
//   "../assets/images/carousel/2.jpg",
//   "../assets/images/carousel/3.jpg",
//   "../assets/images/carousel/4.jpg",
//   "../assets/images/carousel/5.jpg",
//   "../assets/images/carousel/6.jpg",
//   "../assets/images/carousel/7.jpg",
// ];

const images = [
  "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=",
  "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
];

function Card({ image, index }) {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      minH={
        isCenter
          ? { base: "300px", sm: "400px", md: "550px", lg: "400px" }
          : { base: "200px", sm: "150px", md: "250px", lg: "350px" }
      }
      boxSize={
        isCenter
          ? { base: "200px", sm: "300px", md: "400px", lg: "500px" }
          : { base: "200px", sm: "150px", md: "250px", lg: "500px" }
      }
      boxShadow="lg"
      as="button"
      onClick={onClickHandler}
    >
      <Image
        minH={{ base: "300px", sm: "400px", md: "550px", lg: "400px" }}
        src={image}
        boxSize={
          isCenter
            ? { base: "200px", sm: "300px", md: "400px", lg: "500px" }
            : { base: "100px", sm: "150px", md: "250px", lg: "300px" }
        }
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
          w={{ base: "40px", sm: "55px", md: "115px" }}
          onClick={onPrevious}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          colorScheme="yellow"
          w={{ base: "40px", sm: "55px", md: "115px" }}
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

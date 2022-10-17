import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


   const ImageSlider = ({ slides }) => {
    return (
      <Carousel infiniteLoop showThumbs={false} showStatus={false} autoPlay={true} width="100%" p={10}  
      >
        {slides.map((slide, index) => {
          return <Box p={3} borderRadius={10} key={index} >
          <Image src={slide.image} height="auto" borderRadius={15} />
          </Box>
        })}
      </Carousel>
    );
  };


export default ImageSlider
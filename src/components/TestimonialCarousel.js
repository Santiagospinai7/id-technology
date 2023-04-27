import React, { useRef } from "react";
import styled from "styled-components";
import arrowIcon from "../img/Instagram.png";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mauris sit amet ex laoreet efficitur.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      text:
        "Nulla facilisi. Duis rhoncus justo at leo suscipit, in interdum turpis rhoncus. Fusce volutpat sapien nec arcu gravida, ut tincidunt eros tristique.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Bob Johnson",
      text:
        "Donec sed sapien a metus faucibus blandit. Nullam vel lorem id magna efficitur bibendum. Ut fringilla lacus id commodo sollicitudin.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Alice Green",
      text:
        "Pellentesque euismod sapien ut ligula hendrerit, sit amet maximus odio commodo. Maecenas sed ultrices ex.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const scrollRef = useRef();

  const handlePrevClick = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleNextClick = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <CarouselStyled>
      <h3>Lo que valoran nuestros clientes de nuestros servicios</h3>
      <div className="carousel-container">
        <div className="carousel-slide" ref={scrollRef}>
          {testimonials.map((testimonial, index) => {
            // if (index % 2 === 0) {
              return (
                <div className="testimonial-section" key={testimonial.id}>
                  <div className="testimonial">
                    <div className="testimonial-text">{testimonial.text}</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                  </div>
                  {/* {testimonials[index + 1] && (
                    <div className="testimonial">
                      <div className="testimonial-text">
                        {testimonials[index + 1].text}
                      </div>
                      <div className="testimonial-name">
                        {testimonials[index + 1].name}
                      </div>
                    </div>
                  )} */}
                </div>
              );
          })}
        </div>
        <button className="carousel-prev" onClick={handlePrevClick}>
          <img src={arrowIcon} alt="Previous" />
        </button>
        <button className="carousel-next" onClick={handleNextClick}>
          <img src={arrowIcon} alt="Next" />
        </button>
      </div>
    </CarouselStyled>
  );
};

const CarouselStyled = styled.div`
  h3 {
    text-align: center;
    margin: 4rem 0rem 0rem 0rem;
  }

  .carousel-container {
    padding: 3rem 10rem 4rem 10rem;
    position: relative;
    background-color: red;
  }

  .carousel-slide {
    background-color: blue;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .testimonial-section {
    background-color: aquamarine;
    display: flex;
    margin: 0rem 5rem;
    scroll-snap-align: start;
    width: 100%;

    .testimonial {
      width: 50%;
      padding: 0 20px;
    }

    .testimonial-text {
      font-size: 1.2rem;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    .testimonial-name {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }

  .carousel-prev,
  .carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;
  }

  .carousel-prev {
    left: 20px;
  }

  .carousel-next {
    right: 20px;
  }

  img {
    height: 30px;
    width: 30px;
  }
`;

export default TestimonialCarousel;

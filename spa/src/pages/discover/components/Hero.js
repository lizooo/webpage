import React from "react";
import {
  HeroDescriptionWraper,
  HeroText,
  HeroImg,
  HeroProsWraper,
  ProsItem,
} from "./Hero.styled";

const Hero = () => (
  <React.Fragment>
    <HeroDescriptionWraper>
      <HeroText>
        <h1>
          Brighten your <br /> traveling experience with Visiti!
        </h1>
        <h4>
          You want to explore a new destination but all tours are booked? Visiti
          is a way to go! We split big multiday tours into separate activities
          and make it possible for you to join any of them. Only exclusive
          offers with group pricing for your entertainment!
        </h4>
      </HeroText>
      <HeroImg>
        <img src="images\illustration-1.svg" alt="illustration" />
      </HeroImg>
    </HeroDescriptionWraper>
    <HeroProsWraper>
      <ProsItem>
        <img src="images\tickets-vector.svg" alt="illustration" />
        <h3>Discover unique tours!</h3>
        <h4>
          All the proposals are elements of complex tours which have never been
          available separately
        </h4>
      </ProsItem>
      <ProsItem>
        <img src="images\money-vector.svg" alt="illustration" />
        <h3>Save some money!</h3>
        <h4>We offer exclusive prices for hot tours</h4>
      </ProsItem>
      <ProsItem>
        <img src="images\language-vector.svg" alt="illustration" />
        <h3>Enjoy your native language!</h3>
        <h4>
          Visiti has partnerships with local Ukrainian tour agencies that have
          their local tour guides abroad
        </h4>
      </ProsItem>
    </HeroProsWraper>
  </React.Fragment>
);

export default Hero;

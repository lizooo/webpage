import React from "react";
import { FindTourWrapper, Text } from "./FindTour.styled";
import { Button } from "../../../components/Buttons/Button.styled";
import {Link} from "react-router-dom" 

const FindTour = () => {
  return (
    <FindTourWrapper>
      <img src="images\icon-zoom.svg" alt="illustration" />
      <Text>
        <h3 style={{ fontWeight: "500" }}>Find your perfect tour!</h3>
        <h4>
          Pick location and use parametrized search to find the best proposals{" "}
        </h4>
      </Text>
      <Link to="/tours"><Button re> Try it out</Button></Link>
    </FindTourWrapper>
  );
};

export default FindTour;

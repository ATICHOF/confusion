import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { Fade } from "react-animation-components";
export const RenderLeader = ({ leader, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h3>{errMess}</h3>;
  } else
    return (
      <Fade in>
        <Media tag="li">
          <Media left middle>
            <Media object src={baseUrl + leader.image} alt={leader.name} />
          </Media>
          <Media body className="ml-5 mb-4">
            <Media heading>{leader.name}</Media>
            <Media className="my-3">{leader.designation}</Media>
            <Media className="my-3">{leader.description}</Media>
          </Media>
        </Media>
      </Fade>
    );
};

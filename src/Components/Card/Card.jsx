import React, { Component } from "react";
import { CardBundle } from "./Card.style";

export class Card extends Component {
  routeToProfile = (url) => {
    window.open(url, "_blank");
  };
  timeZoneHandler = (date) => {
    const d1 = new Date(date);
    return d1.toString();
  };
  render() {
    let { Container, Navigate } = CardBundle;
    let { data } = this.props;

    return (
      <Container>
        {/* <img src={data.avatar_url} alt="Avatar"></img> */}
        <Navigate>
          <span>{data.PFName}</span>
          <span>{`$ ${data.Value}`}</span>
          <span>{`${data.CCode} Vs ${data.UpComingMatchesList[0].VsCCode}`}</span>
          <span>{this.timeZoneHandler(data.UpComingMatchesList[0].MDate)}</span>
        </Navigate>
      </Container>
    );
  }
}

export default Card;

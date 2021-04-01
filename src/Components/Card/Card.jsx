import React, { Component } from "react";
import { playerList } from "../../Page/Util";
import { CardBundle } from "./Card.style";
import unknown from "../../player-images/unknown.svg";

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
        <img
          src={playerList[data.Id] ? playerList[data.Id] : unknown}
          alt="Avatar"
        ></img>
        <Navigate>
          <span>{data.PFName}</span>
          <span>{data.SkillDesc}</span>
          <span>{`$ ${data.Value}`}</span>
          <span>{`${data.CCode} Vs ${data.UpComingMatchesList[0].VsCCode}`}</span>
          <span>{this.timeZoneHandler(data.UpComingMatchesList[0].MDate)}</span>
        </Navigate>
      </Container>
    );
  }
}

export default Card;

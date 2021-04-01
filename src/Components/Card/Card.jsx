import React, { Component } from "react";
import { playerList } from "../../Page/Util";
import { CardBundle } from "./Card.style";

export class Card extends Component {
  routeToProfile = (url) => {
    window.open(url, "_blank");
  };
  timeZoneHandler = (date) => {
    const d1 = new Date(date);
    return d1.toString();
  };

  renderPlayerImageHandler = (playerId) => {
    for (const key in playerList) {
      if (key === playerId) {
        const image = playerList[key];
        return image;
      }
    }
  };
  render() {
    let { Container, Navigate } = CardBundle;
    let { data } = this.props;

    return (
      <Container>
        <img src={this.renderPlayerImageHandler(data.Id)} alt="Avatar"></img>
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

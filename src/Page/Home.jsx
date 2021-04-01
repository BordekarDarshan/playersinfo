import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../Components/Input/Input";
import { BundleHome } from "./Home.magic";
import { fetchProfileThunk } from "../Redux/FetchProfile/Action";
import Card from "../Components/Card/Card";
import NoDataFound from "../Components/Message/NoDataFound";

export class Home extends Component {
  state = {
    search: "",
    FliteredData: [],
  };
  componentDidMount() {
    this.props.fetchProfileThunk();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.search !== this.state.search) {
      this.filterPlayerHandler(
        this.props.player?.playerList,
        this.state.search
      );
    }
  }

  onChangeHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  filterPlayerHandler = (MedData, inputMed) => {
    if (this.props.player.playerList) {
      let filterMedName = MedData.filter(
        (content) =>
          content.PFName.toLowerCase().includes(inputMed.toLowerCase()) ||
          content.TName.toLowerCase().includes(inputMed.toLowerCase())
      );

      this.setState({ FliteredData: filterMedName });
    }
  };

  render() {
    let { Container, CardWrapper } = BundleHome;
    let { player, theme } = this.props;
    console.log(player);
    return (
      <Container>
        <Input
          onChange={this.onChangeHandler}
          search={this.state.search}
          theme={theme}
        />
        {this.state.FliteredData.length > 0 ? (
          <CardWrapper>
            {this.state.FliteredData.map((data) => (
              <Card data={data} key={data.id} theme={theme} />
            ))}
          </CardWrapper>
        ) : player?.playerList ? (
          <CardWrapper>
            {player.playerList.map((data) => (
              <Card data={data} key={data.id} theme={theme} />
            ))}
          </CardWrapper>
        ) : (
          <NoDataFound theme={theme} onlyLogo={false} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.playerData.profile,
});

export default connect(mapStateToProps, { fetchProfileThunk })(Home);

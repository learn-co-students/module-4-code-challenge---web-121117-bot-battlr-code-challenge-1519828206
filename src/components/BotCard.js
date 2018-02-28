import React from "react";

class BotCard extends React.Component {
state={
  clicked:true
}

handleClick = () => {
  console.log(this.props)
  if (this.state.clicked){
    this.props.handleAddBot(this.props.bot)
    this.setState({clicked:!this.state.clicked})

  } else {
    this.props.handleRemoveBot(this.props.bot)
    this.setState({clicked:!this.state.clicked})
  }
}
// handleClick = (event) => {
//   this.setState({clicked:!this.state.clicked}, this.whichClick())
// }

  // const { bot } = props;
  //
  // let botType;
  //
  // switch (bot.bot_class) {
  //   case "Assault":
  //     botType = <i className="icon military" />;
  //     break;
  //   case "Defender":
  //     botType = <i className="icon shield" />;
  //     break;
  //   case "Support":
  //     botType = <i className="icon ambulance" />;
  //     break;
  //   default:
  //     botType = <div />;
  // }

  render(){
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={this.props.bot.id}
          onClick={this.handleClick}
        >
          <div className="image">
            <img alt="oh no!" src={this.props.bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.bot.name}
            </div>

            <div className="meta text-wrap">
              <small>{this.props.bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {this.props.bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {this.props.bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {this.props.bot.armor}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default BotCard;

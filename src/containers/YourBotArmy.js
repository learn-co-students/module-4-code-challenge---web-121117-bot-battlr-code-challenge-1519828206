import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = () => {
    return this.props.enlistedBots.map((bot,id) => {
      return <BotCard {...bot} thisBot={bot} unenlistBot={this.unenlistBot} viewBotSpecs={this.props.viewBotSpecs} toggleEnlist={this.props.toggleEnlist} key={bot.id}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

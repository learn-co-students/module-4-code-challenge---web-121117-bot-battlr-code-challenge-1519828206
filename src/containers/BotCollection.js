import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
    return this.props.allBots.map((bot,id) => {
      return <BotCard {...bot} thisBot={bot} viewBotSpecs={this.props.viewBotSpecs} toggleEnlist={this.props.toggleEnlist} key={bot.id}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  ༼ つ ◕_◕ ༽つ Collection of all bots ༼ つ ◕_◕ ༽つ
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

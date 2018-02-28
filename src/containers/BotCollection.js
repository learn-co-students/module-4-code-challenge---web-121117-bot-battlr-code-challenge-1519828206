import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  createBotElements = () =>{
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id}
                      bot={bot}
                      handleAddBot={this.props.handleAddBot}
                      handleRemoveBot={this.props.handleRemoveBot}
                      myBots={this.props.myBots}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.createBotElements()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

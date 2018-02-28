import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => {
            return <BotCard handleAdd={this.props.handleAdd} id={bot.id} key={bot.id} bot={bot} />
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

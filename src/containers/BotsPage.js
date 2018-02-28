import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

  state = {
    bots:[],
    myBots:[]
  }

  componentDidMount(){
    this.fetchBots()
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(data => {
      this.setState({bots:data})
      console.log("state after fetch", this.state)
    })
  }

  handleAddBot = (bot) => {
    let newAllBotsArray= this.state.bots.filter(currBot=> {
      return currBot.id != bot.id
    })
    let newMyBotsArray=[...this.state.myBots, bot]
    this.setState({bots:newAllBotsArray, myBots:newMyBotsArray})
  }

  handleRemoveBot = (bot) => {
    let newAllBotsArray=[...this.state.bots, bot]
    let newMyBotsArray= this.state.myBots.filter(currBot=> {
      return currBot.id != bot.id
    })
    this.setState=({bots:newAllBotsArray, myBots:newMyBotsArray})
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots}
                     handleRemoveBot={this.handleRemoveBot}
                     handleAddBot={this.props.handleAddBot}/>
        <BotCollection bots={this.state.bots}
                       myBots={this.state.myBots}
                       handleRemoveBot={this.handleRemoveBot}
                       handleAddBot={this.handleAddBot}/>

      </div>
    );
  }

}

export default BotsPage;

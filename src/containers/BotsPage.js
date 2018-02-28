import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    botArmy: []
  }

  componentDidMount(){
    this.renderBots()
  }

  renderBots = () => {
    return fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(res => res.json()).then(json => this.setState({allBots: json}))
  }

  handleAdd = (bot) => {
    this.setState({botArmy: [...this.state.botArmy, bot]})
  }

  handleRemove = (bot) => {
    let arr = this.state.botArmy
    let index = arr.indexOf(bot)
    arr.splice(index, 1);
    this.setState({botArmy: arr });
  }

  render() {
    console.log(this.state.allBots)
    console.log(this.state.botArmy)
    return (

      <div>
        <YourBotArmy handleRemove={this.handleRemove} botArmy={this.state.botArmy} />
        <BotCollection handleAdd={this.handleAdd} bots={this.state.allBots}/>
      </div>
    );
  }

}

export default BotsPage;

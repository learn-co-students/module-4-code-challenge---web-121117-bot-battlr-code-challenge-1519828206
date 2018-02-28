import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state= ({
    allBots: [],
    enlistedBots: []
  })

  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        allBots: json
      })
    })
  }

  toggleEnlist = (bot) => {
    if (this.state.enlistedBots.includes(bot)) {
      this.unenlistBot(bot)
    } else {
      this.enlistBot(bot)
    }
  }

  enlistBot = (bot) => {
    let oldEnlistedBots = this.state.enlistedBots
    oldEnlistedBots.push(bot)
    this.setState ({
      enlistedBots: oldEnlistedBots
    })
  }

  unenlistBot = (bot) => {
    let oldEnlistedBots = this.state.enlistedBots
    let newEnlistedBots = oldEnlistedBots.filter(currentBot => currentBot !== bot);
    this.setState ({
      enlistedBots: newEnlistedBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy
          {...this.state}
          toggleEnlist={this.toggleEnlist}
        />
        <BotCollection
          {...this.state}
          toggleEnlist={this.toggleEnlist}
        />
      </div>
    );
  }

}

export default BotsPage;

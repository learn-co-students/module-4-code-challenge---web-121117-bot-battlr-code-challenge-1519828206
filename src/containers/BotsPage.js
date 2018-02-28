import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  state= ({
    allBots: [],
    enlistedBots: [],
    viewBotSpecs: false,
    selectedBot: null
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

  resetView = () => {
    this.setState ({
      viewBotSpecs: false,
      selectedBot: null
    }, console.log(this.state))
  }

  viewBotSpecs = (bot) => {
    this.setState ({
      viewBotSpecs: true,
      selectedBot: bot
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
    if (!this.state.enlistedBots.includes(bot)) {
      oldEnlistedBots.push(bot)
      this.setState ({
        enlistedBots: oldEnlistedBots
      })
    }
  }

  unenlistBot = (bot) => {
    let oldEnlistedBots = this.state.enlistedBots
    let newEnlistedBots = oldEnlistedBots.filter(currentBot => currentBot !== bot);
    this.setState ({
      enlistedBots: newEnlistedBots
    })
  }

  renderView = () => {
    if (this.state.viewBotSpecs === false) {
      return (
        <div>
          <YourBotArmy
            {...this.state}
            toggleEnlist={this.toggleEnlist}
            viewBotSpecs={this.viewBotSpecs}
          />
          <BotCollection
            {...this.state}
            toggleEnlist={this.toggleEnlist}
            viewBotSpecs={this.viewBotSpecs}
          />
        </div>
      )
    } else {
      return (<BotSpecs {...this.state} currentBot={this.state.selectedBot} toggleEnlist={this.toggleEnlist} resetView={this.resetView}/>)
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }

}

export default BotsPage;

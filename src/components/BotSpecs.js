import React from "react";

const BotSpecs = props => {
  // const { bot } = props;
  let bot = props;
  console.log(props)

  let botType;

  switch (props.currentBot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  const switchEnlistUnenlist = () => {
    if (props.enlistedBots.includes(props.selectedBot)) {
      return 'Unenlist'
    } else {
      return 'Enlist'
    }
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.currentBot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {props.currentBot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.currentBot.catchphrase}
            </p>
            <strong>
              Class: {props.currentBot.bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.currentBot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.currentBot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.currentBot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() => props.resetView()}
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() => {
                  props.toggleEnlist(props.currentBot);
                  props.resetView()
                }
              }
            >
              {switchEnlistUnenlist()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default BotSpecs;

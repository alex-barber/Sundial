import * as React from 'react';

interface ClockButtonState {
  status: boolean | null;
  runningTime: number;
  startTime: any;
  postBody: null | string
}

interface ClockButtonProps {}

export class ClockButton extends React.Component<
  ClockButtonProps,
  ClockButtonState
> {
  constructor(props: object) {
    super(props);
    this.state = {
      status: false,
      runningTime: 0,
      startTime: null,
      postBody: null,
    };
  }
  handleClick = () => {
    console.log('running');
    let timer;
    if (!this.state.status) {
      console.log('running');
      this.setState({
        status: !this.state.status,
        startTime: new Date().toJSON(),
      });

      console.log(this.state);
      timer = setInterval(this.tick, 50);
    } else {
      this.setState({ status: !this.state.status });
      clearInterval(timer);
    }
  };
  handleReset = (): void => {
    this.setState({ runningTime: 0, status: false });
  };

  tick = () => {
    if (this.state.status === true) {
      this.setState({ runningTime: Date.now() - Date.parse(this.state.startTime) });
    }
  };

  render() {
    return (
      <div>
        <p>{Math.round(this.state.runningTime / 1000)}</p>
        <button onClick={this.handleClick}>
          {this.state.status ? 'STOP' : 'START'}
        </button>
        <button onClick={this.handleReset}>RESET</button>
        {this.state.runningTime && !this.state.status ?
                 <form
            onSubmit={(event: any) => {
              event.preventDefault();
              console.log(this.state.postBody)
            }}
          >
            <input
              type="text"
              value={this.state.postBody}
              onChange={e => this.setState({postBody: e.target.value})}
            />
            <input type="submit" value="Submit" />
          </form> :
            <div></div>


        }
      </div>
    );
  }
}

export default ClockButton;

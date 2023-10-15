import { Component } from 'react';
import './App.css'

interface State {
  count: number;
}

interface Props {
  initialCount: number; // Prop for initial state
}

class AppClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <button 
        data-testid="increment" 
        onClick={this.incrementCount}
        >
          count is {this.state.count}
        </button>
      </div>
    );
  }
}

export default AppClass;
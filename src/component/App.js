import React, { Component } from "react";
import "./App.css";
import BarChartExample from "./BarChart/BarChartExample";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
    };
    this.eventSource = new EventSource("http://localhost:5000/events");
  }

  componentDidMount() {
    this.eventSource.addEventListener("updateData", (e) => {
      console.log("listing event");
      this.updateChartData(JSON.parse(e.data));
    });
  }

  updateChartData = (eventData) => {
    console.log("event data: ", eventData);
    const newData = [...this.state.chartData, eventData];

    this.setState({ chartData: newData });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to live-Analytics</h1>
        <BarChartExample data={this.state.chartData} />
      </div>
    );
  }
}

/*
function App() {
  var eventsource = new EventSource("http://localhost:5000/events");

  const [chartData, setData] = useState([]);

  useEffect(() => {
    console.log("coming in");
    eventsource.addEventListener("updateData", (e) => {
      console.log("listing event");
      updateChartData(JSON.parse(e.data));
    });

    const updateChartData = (eventData) => {
      console.log("event data: ", eventData);
      const newData = [...chartData, eventData];

      setData(newData);
    };

    return () => {
      eventsource.close();
    };
  }, [eventsource, chartData]);

  return (
    <div className="App">
      <h1>Welcome to live-Analytics</h1>
      <BarChartExample data={chartData} />
    </div>
  );
}
*/

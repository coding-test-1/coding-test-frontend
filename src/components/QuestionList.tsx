import React from "react";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";

import PageHeader from "@atlaskit/page-header";
class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      questions: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/pariksha/questions/json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            questions: result.slice(0, 3),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, questions } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Tabs
          onChange={(index) => console.log("Selected Tab", index + 1)}
          id="default"
        >
          <TabList>
            {questions.map((item, index) => (
              <Tab>
                {index + 1}. {item.fields.Title}
              </Tab>
            ))}
          </TabList>

          {questions.map((item) => (
            <TabPanel>
              <div style={{ display: "block", margin: "20px" }}>
                <div>
                  <PageHeader>{item.fields.Title}</PageHeader>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.fields.Description,
                  }}
                />
              </div>
            </TabPanel>
          ))}
        </Tabs>
      );
    }
  }
}

export default QuestionList;

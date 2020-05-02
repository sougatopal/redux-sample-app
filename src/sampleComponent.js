import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { data: state.test.data };
};

class SampleComponent extends React.Component {
  render() {
    const { data } = this.props;
    return <div>Data from react redux store is :{data}</div>;
  }
}
export default connect(mapStateToProps)(SampleComponent);

import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './number.css'

let Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
`;



class Number extends Component {

  Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: ${this.props.width}
`;

  render() {
    return (
      <this.Container className="number" onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </this.Container>
    );
  }
}

Number.propTypes = {
  value : PropTypes.number.isRequired, //making it required since we need some number
  width : PropTypes.string
}

export default Number;

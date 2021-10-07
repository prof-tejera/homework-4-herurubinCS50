import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
`;

class Operator extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

Operator.propTypes = {
  value : PropTypes.number.isRequired
}



export default Operator;

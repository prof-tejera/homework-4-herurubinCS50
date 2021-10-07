import { Component } from 'react';
import styled from 'styled-components';
import PropTypes, {number} from "prop-types";
import './screen.css'

const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 70px;
  text-align: right;
  margin-bottom: 10px;

`;

class Screen extends Component {
  render() {
    return <Container className={this.props.classes}  >

            {this.props.value}

      </Container>;
  }
}

Screen.propTypes = {
  value : PropTypes.number,
  classes : PropTypes.string
}

export default Screen;

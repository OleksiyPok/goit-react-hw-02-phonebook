import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container, Title } from './Section.styled';

class Section extends Component {
  render() {
    return (
      <Container>
        {this.props.title ? <Title>{this.props.title}</Title> : ''}
        {this.props.children ? this.props.children : ''}
      </Container>
    );
  }
}

export default Section;

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
// };

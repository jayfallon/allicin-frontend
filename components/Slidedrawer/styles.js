import styled from 'styled-components';

const SlidedrawerStyles = styled.div`
  background-color: ${props => props.theme.slideDrawerBackground};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  &.open {
    transform: translateY(0);
  }
`;

export default SlidedrawerStyles;

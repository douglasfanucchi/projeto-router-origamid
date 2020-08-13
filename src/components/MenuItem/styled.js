import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  text-decoration: none;
  border: 1px solid #ccc;
  padding: 10px 20px;
  user-select: none;
  color: black;
  border-radius: var(--radius);
  font-size: 20px;
  background-color: #ccc;

  &:hover,
  &.active {
    background-color: #bbb;
    border-color: #ccc;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

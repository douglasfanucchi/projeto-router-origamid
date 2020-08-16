import styled from 'styled-components';

export default styled.li`
  list-style: none;
  flex: 1 0 30%;
  min-width: 250px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 30px;
  cursor: pointer;
  user-select: none;

  & img {
    border-radius: var(--radius);
    max-width: 100%;
  }

  & figcaption {
    margin-top: 10px;
  }
`;

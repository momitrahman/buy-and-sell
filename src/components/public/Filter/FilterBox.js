import styled from 'styled-components';

const FilterBox = styled.div`
  width: 650px;
  margin-top: 30px;
  display: flex;
  text-align: center;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 95vw;
  }
`;

export default FilterBox;

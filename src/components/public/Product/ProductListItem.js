import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import * as color from '../../../UI/color';

const Item = styled.div`
  width: 650px;
  display: flex;
  margin: 30px 10px;
  border-radius: 5px;
  box-shadow: 0 0 1px black;
  background: white;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 170px;
`;

const Info = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const Heading = styled.div`
  color: ${color.colorG};
  font-size: 24px;
  text-transform: capitalize;
  white-space: nowrap;
`;

const Location = styled.div`
  font-size: 18px;
`;

const Type = styled.span`
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Time = styled.span`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.colorBlack};
`;

const ProductListItem = ({ id, item }) => {
  const { title, location, price, date, type, subcategory } = item;
  console.log(id);
  return (
    <StyledLink to={`/${id}`}>
      <Item>
        <Image src="https://picsum.photos/400/400?random" />
        <Info>
          <Heading>{title}</Heading>
          <Time>{moment(moment(date).format()).fromNow()}</Time>
          <div>
            <Location>{location}</Location>
            <Type>{type}</Type> - {subcategory}
          </div>
          <Price>৳ {price}</Price>
        </Info>
      </Item>
    </StyledLink>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductListItem;

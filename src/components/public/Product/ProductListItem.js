import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import * as color from '../../../color';

const StyledLink = styled(Link)`
  display: block;
  position: relative;
  margin: 30px 10px;
  width: 650px;
  padding: 0;
  text-decoration: none;
  color: ${color.colorBlack};
  box-shadow: 0 1px 2px ${color.colorA};
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
`;

const Image = styled.img`
  display: block;
  width: 160px;
  height: 130px;
`;

const Info = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const Heading = styled.div`
  color: ${color.colorA};
  font-size: 22px;
  font-weight: 300;
  text-transform: capitalize;
  white-space: nowrap;
`;

const LocationCat = styled.div`
  font-size: 16px;
  text-transform: capitalize;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Time = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.colorB};
  margin-right: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ProductListItem = ({ id, item, index }) => {
  const { title, location, price, date, subcategory } = item;
  return (
    <StyledLink to={`/view/${id}`}>
      <Details>
        <Image src={`https://picsum.photos/400/400?${index}`} />
        <Info>
          <Heading>{title}</Heading>
          <div>
            <LocationCat>
              {location} &ndash; {subcategory}
            </LocationCat>
          </div>
          <Price>৳ {price}</Price>
        </Info>
      </Details>
      <Time>{moment(moment(date)).fromNow()}</Time>
    </StyledLink>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductListItem;

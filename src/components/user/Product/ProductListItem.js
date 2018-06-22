import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

import DeleteProduct from '../../../containers/user/DeleteProduct';
import * as color from '../../../color';

const Item = styled.div`
  width: 650px;
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
  border-radius: 5px;
  color: ${color.colorBlack};
  box-shadow: 0 1px 2px ${color.colorA};
  background-color: white;
  padding: 0;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 160px;
  height: 130px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: stretch;
`;

const Info = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;

const Heading = styled.div`
  color: ${color.colorA};
  font-size: 22px;
  text-transform: capitalize;
  white-space: nowrap;
`;

const LocationTime = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Edit = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: ${color.colorG};
  padding: 7px;
  margin-right: 5px;
  border: 1px solid ${color.colorG};
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
`;

const ProductListItem = ({ id, item, index }) => {
  const { title, location, price, date } = item;
  return (
    <Item>
      <InfoBox>
        <Image src={`https://picsum.photos/200/200/?${index}`} />
        <Info>
          <Heading>{title}</Heading>
          <LocationTime>
            {location} ‒ {moment(moment(date).format()).fromNow()}
          </LocationTime>
          <Price>৳ {price}</Price>
        </Info>
      </InfoBox>
      <Action>
        <Edit to={`/user/edit/${id}`}>Edit</Edit>
        <DeleteProduct pid={id}>Delete</DeleteProduct>
      </Action>
    </Item>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductListItem;

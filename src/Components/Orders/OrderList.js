import React from 'react';

const OrderList = (props) => {
    const list = props.list;
    const { gameName, price, orderDate1, orderTime} = list;
    return (
        <tr>
            <td>{gameName}</td>
            <td>{orderTime}</td>
            <td>{orderDate1}</td>
            <td>1</td>
            <td>${price}</td>
        </tr>
    );
};

export default OrderList;
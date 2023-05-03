import React from 'react';
import './Cart.css';

const Cart = (props) => {
const {cart} = props;
const {read} =props;
let total = 0;
let title = [];
for (const blog of cart) {
    total = total + blog.duration;
}

for (const b of read) {
    title.push(b.title);
}

    return (
        <div className="cart">
            <div className="time">
                <h1 className="spent">Spent time on read:{total} min</h1>
            </div>
            <div className="bookmark">
                <h1>Bookmarked Blogs:{read.length}</h1>
                {
                    title.map(t =><h3 className="title">{t}</h3>)
                }
            </div>    
        </div>
    );
};

export default Cart;
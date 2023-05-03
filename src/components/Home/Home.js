
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import Blog from '../Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [read, setRead] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    const handleAddToCart = (blog) => {
        const ids = [];
        cart.map(b => ids.push(b.id) )
        for (const id of ids) {
            if(id===blog.id){
                toast('Again Mark as Read '+ blog.title);
            }
        } 
        const newCart = [...cart, blog];
        setCart(newCart);
    }

    const markAsRead = (blog) => {
        const ids = [];
        read.map(b => ids.push(b.id) )
        for (const id of ids) {
            if(id===blog.id){
                toast('Again Bookmarked '+ blog.title);
            }
        }
        const newRead = [...read, blog];
        setRead(newRead);
    }
    return (
        <div className='blog-container'>
            <div className="blogs-container">
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                            handleAddToCart={handleAddToCart}
                            markAsRead={markAsRead}
                        ></Blog>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} read={read}></Cart>
            </div>
        </div>
    );
};

export default Home;
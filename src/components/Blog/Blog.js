import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blog = (props) => {
    const { user, image, cover, publish, duration, title } = props.blog;
    const handleAddToCart = props.handleAddToCart;
    const markAsRead = props.markAsRead;


    return (
        <div className="blog">
            <img src={cover} alt="" />
            <div className="details">
                <div className="user-container">
                    <div className="user">
                        <img src={image} alt="" />
                        <div className="">
                            <h4 className="name">{user}</h4>
                            <p className='date'>{publish}</p>
                        </div>
                    </div>
                    <p className="duration">{duration} min read <FontAwesomeIcon onClick={() =>markAsRead(props.blog)} icon={faBookmark} /></p>
                </div>
                <h1>{title}</h1>
                <p className='hashtag'>#beginners #programming  </p>
                <button onClick={() => handleAddToCart(props.blog)} className='btn' href="">Mark as Read</button>
                <ToastContainer />
            </div>
            <hr className='hr' />
        </div>
    );
};

export default Blog;
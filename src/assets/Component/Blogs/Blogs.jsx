import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";



const Blogs = ({ blog }) => {
    const {title, cover, author_image, author, posted_date,reading_time} = blog
    return (
        <div className='mb-10'>
            <img className='w-full' src={cover} alt="" />
            <h1 className='text-4xl font-bold mt-3'>Name {title} </h1>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-16' src={author_image} alt="" />
                    <div>
                        <h3 className='font-bold'>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex gap-1'>
                <p><span className='font-bold'>{reading_time}</span></p>
                <button><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
                    
            </div>
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.object
}
export default Blogs;
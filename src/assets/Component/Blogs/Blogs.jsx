import PropTypes from 'prop-types';

const Blogs = ({ blog }) => {
    const {title, cover, author_image, author, posted_date,reading_time} = blog
    return (
        <div>
            <img className='w-[845px]' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-16' src={author_image} alt="" />
                    <div>
                        <h3 className='font-bold'>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                        <p>{reading_time}</p>
                <div>
                </div>

            </div>
            <h1 className='text-4xl font-bold'>Name {title} </h1>
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.object
}
export default Blogs;
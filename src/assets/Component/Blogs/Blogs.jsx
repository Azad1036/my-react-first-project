import PropTypes from 'prop-types';

const Blogs = ({ blog }) => {
    const {title} = blog
    return (
        <div>
            <h1>Name {blog.title} </h1>
        </div>
    );
};

Blogs.propTypes = {
    blog: PropTypes.object
}
export default Blogs;
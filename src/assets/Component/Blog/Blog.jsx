import { useEffect } from "react";
import { useState } from "react";
import Blogs from "../Blogs/Blogs";

const Blog = () => {
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('PublicPost.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl"> Blog : {blogs.length} </h3>
            {
                blogs.map(blog => <Blogs 
                    key={blog.id}
                    blog={blog} ></Blogs>)
            }

        </div>
    );
};

export default Blog;
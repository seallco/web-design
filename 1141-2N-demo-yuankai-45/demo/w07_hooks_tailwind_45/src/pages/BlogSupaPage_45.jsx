import { useState, useEffect } from 'react';
//import blogData_45 from '../assets/data/blogData_45.json'; 
import Blog_45 from '../components/Blog_45';
//const api_url = 'https://localhost:5001/api/blog_45'; 
import { supabase } from '../db/clientSupabase'; 
import Wrapper from '../assets/wrappers/blog2_45'

const BlogSupaPage_45 = () => {
    const [name, setName] = useState('周淵凱'); 
    const [id, setId] = useState(213410045);   
    const [blogs_45, setBlogs_45] = useState([]); 

    const fetchBlogFromSupaSever = async () => {
        try {
            let { data, error } = await supabase.from('blog_45').select('*'); 
            // const response = await fetch(api_url);
            // const data = await response.json();
            console.log('blogs', data);
            setBlogs_45(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlogFromSupaSever(); 
    }, []);

    return (
        <Wrapper>
            <section className="blogs">
                <div className="section-title">
                    <h2>Blogs From Supabase -- {name}, {id}</h2>
                </div>

                <div className="blogs-center">
                    {blogs_45.length === 0 ? (
                        <p>載入中或沒有資料</p>
                    ) : (
                        blogs_45.map((blog) => (
                            <Blog_45
                                key={blog.id}
                                id={blog.id}
                                title={blog.title}
                                descrip={blog.descript}
                                category={blog.category}
                                img={blog.img || '/default.jpg'} 
                            />
                        ))
                    )}
                </div>
            </section>
        </Wrapper>
    );
};

export default BlogSupaPage_45;
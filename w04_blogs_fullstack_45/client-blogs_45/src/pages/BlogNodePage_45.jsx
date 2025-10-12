import{ useState, useEffect, use } from 'react'

// import blogData_45 from '../assets/data/blogData.json'
import Blog_45 from '../components/Blog_45';

const api_url = 'http://localhost:5001/api/blog_45';

const BlogNodePage_45 = () => {
    const [name, setName] = useState('周淵凱');
    const [id, setId] = useState('213410045');
    const [blogs_45, setBlogs_45] = useState([]);

const fetchBlogFromNodeServer = async () => {
    try{
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_45(data);
    }catch(error){
      console.log(error);
    }
}

useEffect(()=>{
    fetchBlogFromNodeServer();
}, []);

    return(
    <>
      <section className="blogs">
      <div className="section-title">
        <h2>blogs from Node -- { name }, {id}{' '}</h2>
      </div>
      <div className="blogs-center">
      {blogs_45.map((blog_45) => {
        const {id, title, descrip, category, img} = blog_45;
        return (
        <Blog_45 
        key={id} 
        id={id} 
        title ={title} 
        descrip={descrip} 
        category={category} 
        img={img} 
        />
        )
      })}
      </div>
    </section>
    </> 
    )
}

export default BlogNodePage_45

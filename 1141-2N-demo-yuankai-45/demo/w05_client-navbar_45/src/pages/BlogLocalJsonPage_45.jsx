import{ useState} from 'react'

import blogData_45 from '../assets/data/blogData.json'
import Blog_45 from '../components/Blog_45';

const BlogLocalJsonPage_45 = () => {
    const [name, setName] = useState('周淵凱');
    const [id, setId] = useState('213410045');
    const [blogs_45, setBlogs] = useState(blogData_45);
    return(
    <>
      <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json -- { name }, {id}</h2>
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

export default BlogLocalJsonPage_45

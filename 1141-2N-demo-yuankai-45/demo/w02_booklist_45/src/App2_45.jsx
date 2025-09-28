import './App_45.scss';
import books_data from './booklist_data';

console.log('books_data', books_data);

const App2_45 = () => {
    return (
        <>
        <Booklist_45 />
        </>
        
    );
};

const Booklist_45 = () => {
return (
    <section className='booklist'>
        {books_data.map((book) => {
            const {id, img, title, author} = book;
            return <Book_45 key={id} img={img} title={title} author={author} />
        })}
    </section>
    )
}


const Book_45 = ({img, title, author }) => {
return (
<article className='book'>
                    <img src={img} />
                    <div className='bookinfo'>
                        <h1>{title}</h1>
                        <h4>{author}</h4>
                        </div>
                        </article> 

)
}


export default App2_45;

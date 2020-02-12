import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';

export default function Home(props) {
  return (
    <div>
        <Header />
        <p>this is the home page shdjkfkdsjhf</p>
        <h3>{props.quote}</h3> 
        <h5>-{props.author}</h5>
    </div>
  );
}

Home.getInitialProps = async function() {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    console.log(`Quote data fetched. content is: ${data.content}`);

    return { 
        quote: data.content,
        author: data.author,
        };
}

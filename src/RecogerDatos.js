import { useState, useEffect } from 'react';

const DEFAULT_URL = "http://localhost:5000/users";

async function fetchPosts() {
  const response = await fetch('http://localhost:5000/users');
  const blogPosts = await response.json();
  return blogPosts;
}


async function fetchPosts2() {
  const response2 = await fetch(DEFAULT_URL);
  const blogPosts2 = await response2.json();
  return blogPosts2;
}

function FetchUseEffect() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [useeffectvar, setUseEffectVar] = useState();
//   function fetchPostsHandler() {
//     fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
//   }

  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);

  // useEffect(
  //   ()=> {console.log("He llamado a esta función desde useEffect" + useeffectvar)}
  //   , [useeffectvar]);

  useEffect(
    function () {
      fetchPosts2().then((fetchedPosts2) => setLoadedPosts(fetchedPosts2));
    }, [useeffectvar]);

    return (
      <>
          <ul>
          {loadedPosts.map((post) => (
            <li key={post.id}>
              {post.name} 
              <button onClick={()=>{setUseEffectVar(post.id)}}>
                Texto
              </button>
            </li>
          ))}
        </ul>
      </>
    );
}

export default FetchUseEffect;
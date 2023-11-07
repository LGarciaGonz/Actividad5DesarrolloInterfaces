import { useState, useEffect } from 'react';

async function fetchPosts() {
  const response = await fetch('http://localhost:5000/users');
  const blogPosts = await response.json();
  return blogPosts;
}

function FetchUseEffect() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [useeffectvar, setUseEffectVar] = useState();
  const [dataUser, setDataUser] = useState(); 
  

  async function fetchPosts2() {
    const response2 = await fetch('http://localhost:5000/users/' + useeffectvar);
    const blogPosts2 = await response2.json();
    return blogPosts2;
  }

  useEffect(function () {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, []);

  useEffect(
    function () {
      fetchPosts2().then((fetchedPosts2) => {
        setDataUser(fetchedPosts2)});

    }, [useeffectvar]);

    return (
      <>
          <ul>
          {loadedPosts.map((post) => (
            <li key={post.id}>
              {post.name} <span>  </span>
              <button onClick={()=>{setUseEffectVar(post.id)}}>
                Mostrar datos</button>    
              {dataUser && dataUser.id === post.id &&(
                  <ul>
                    <li>{dataUser.name}</li>
                    <li>{dataUser.email}</li>
                    <li>{dataUser.phone}</li>
                  </ul>
                )}
            </li>
          ))}
        </ul>
      </>
    );
}

export default FetchUseEffect;
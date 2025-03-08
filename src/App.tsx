import { useState, useEffect } from 'react';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import {Post} from './types/Post';
import {api} from './api';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    loadPosts();
  }, []);

  const loadPosts = async ()=>{
    setLoading(true)
    let json = await api.getAllPosts()
    setLoading(false)
    setPosts(json)
  }

  const handleAddPost = async (title: string, body: string)=>{
    let json = await api.addNewPost(title, body, 1);
    if(json.id){
      alert("The post was successfully added")
    }else{
      alert("Fill in the data ")
    }
  }

  return (
    <div className='p-5 font-serif'>
      {loading &&
        <div>Carregando...</div>
      }

      {!loading && posts.length > 0 &&
        <>
          <PostForm onAdd={handleAddPost}/>
          <div>Total de Posts: {posts.length}</div>
          <div className='grid grid-cols-4 gap-4'>
            {posts.map((item, index)=>(
              <PostItem data={item} key={index}/>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir.</div>
      }
    </div>
  )
}
 
export default App
 
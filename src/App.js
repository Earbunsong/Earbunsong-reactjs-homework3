import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Skeleton from './components/Skeleton';
import ProducrCard from './components/ProductCard';

function App() {
  const[posts,setPost]= useState([])
  const [isLoad,setLoading]=useState(true);
  useEffect(() =>{
    fetch("https://api.escuelajs.co/api/v1/products").then(respone=>respone.json()).then(respone=>{
      setPost(respone);
      setLoading(false);
    },[])
  })
  return (
    <div className='grid grid-cols-4'>
      {
        isLoad?<Skeleton/>: posts.map((item,index)=>(
          <ProducrCard descritption={item.description} name={item.title} index={index} image={item.images[2] }  />
        ))
      }
    </div>
  );
}

export default App;

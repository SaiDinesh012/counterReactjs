
import { useState } from 'react';
import './App.css';

function App() {

  let [use,setUse]=useState(0);
  return (
    <div className="App bg-slate-600 h-screen">
      <h1 className=' pt-52 m-5 text-5xl text-red-600 bold'>Counter</h1>
      <p className='p-3 text-8xl py-5 my-8'>{use}</p>

      <button onClick={()=>{ 
        if(use===0){
          setUse(0);
        }else{
          setUse(use-1); 
        } 
        }} className=' bg-white text-5xl mx-3 px-5  w-58 h-25  border border-black rounded'>-</button>


         <button onClick={()=>{ 
          setUse(0); 
        }} className=' bg-white text-3xl mx-3 px-5  w-58 h-27  border border-black rounded'>Reset</button>


      <button onClick={()=>{ 
          setUse(use+1); 
        }} className=' bg-white text-5xl mx-3 px-5  w-58 h-25  border border-black rounded'>+</button>


    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

//React Web app - Best features
// 1. SPA - Single Page Application - no reload - index.html
// 2. Reusability






  
  
  /*return (
     <div className="App">
      
       { <Msg
        name="Darth vader"
        pic="https://filestore.community.support.microsoft.com/api/images/3c4dc47e-3f3e-4cbe-88a3-ee9c0676a652?upload=true"
      />
      <Msg
        name="Zoro"
        pic="https://64.media.tumblr.com/4ecbe2d1dfe5b036473698a327ab4bce/e7dba1dd3de9daae-5c/s540x810/d6f2ac25d91bcad8886661702e5a559efe18268f.gif"
      />
      <Msg
        name="Sanji"
        pic="https://i.pinimg.com/originals/92/3d/50/923d50b135b2c1034f91787705d29b03.gif"
      /> } 
        </div>
   );*/

function App() {
  //{ Transform - map -> Array of string -> Array of JSX }
  /*const users = [
    {
      name: "Darth vader",
      pic: "https://filestore.community.support.microsoft.com/api/images/3c4dc47e-3f3e-4cbe-88a3-ee9c0676a652?upload=true",
    },
    {
      name: "Zoro",
      pic: "https://64.media.tumblr.com/4ecbe2d1dfe5b036473698a327ab4bce/e7dba1dd3de9daae-5c/s540x810/d6f2ac25d91bcad8886661702e5a559efe18268f.gif",
    },
    {
      name: "Sanji",
      pic: "https://i.pinimg.com/originals/92/3d/50/923d50b135b2c1034f91787705d29b03.gif",
    },
    {
      name: "Luffy",
      pic: "https://64.media.tumblr.com/4ecbe2d1dfe5b036473698a327ab4bce/e7dba1dd3de9daae-5c/s540x810/d6f2ac25d91bcad8886661702e5a559efe18268f.gif",
    },
  ];*/

return (
<div>
      {/* { { users.map((user) => (
        <Msg name={user.name} pic={user.pic} />
      ))}  */}
      <Counter/>
      <Counte/>


</div> 
)}

function Counter() {
  // const num=1
  const[like,setlike]=useState(0)
  // setlike is the function help to update like
  return(
  <div>
        <button onClick={()=>setlike(like+1)}>👍{like}</button>
        
        <p>{}</p>
 </div>
      )}
      function Counte() {
        // const num=1
        const[like,setlike]=useState(0)
        // setlike is the function help to update like
        return(
        <div>
              <button onClick={()=>setlike(like+1)}>👎 {like}</button>
              
              <p>{}</p>
       </div>
            )}
      
      
// function Msg({ name, pic }) {
//   return (
//     <div>
//       <img height="200" src={pic} alt={name} />
//       <h1 className="name">Hi, {name}😊!!!</h1>
//     </div>
//   );
// } //reuseabilityS







  
  
  
  
  
  
  
  
  /*const movies = [
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: ` When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`,
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`,
    },

    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
    },
  ];*/

  export default App
 
      

      

  

















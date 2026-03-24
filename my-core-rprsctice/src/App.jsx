import Batsman from './Batsman'; 
import './App.css'
import Users from './users';
import { Suspense } from 'react';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())





function App() {
  
  function handleClick(){
    alert('click done');
  }


  const handleClick2 = () => {
    alert('click done');
  }

  const handleClick3 = (num) => {
    const number=num*num;
    alert(number);
  }

  return (
    <>


      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}> </Users>
      </Suspense>














      <Batsman></Batsman>















      <h1>Home Work</h1>
      <Student name="Mahim"></Student>
      <Player name="tamim" runs="100" stadium="Mirpur"></Player>


      <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={handleClick2}>Click Me</button>
      <br />
      <button onClick={ () => handleClick3(5)}>Click Me</button>

      
    </>
  )
}










function Student(name) {
  return (
    <div style={{
      border: '2px solid white',
      // backgroundColor:'aqua',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px',
      
      

    }}>

      <h3>Name : {name.name}</h3>
      <h4>Daffodil international University</h4>
      <p>mirzapur,tangail</p>

    </div>
  )
}

function Player({ name, runs = 0, stadium }) {
  return (
    <div style={{
      border: '2px solid purple',
      // backgroundColor:'white',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px'

    }}>

      <h3>Name : {name}</h3>
      <h4>run : {runs}</h4>
      <p>Stadium : {stadium}</p>

    </div>
  )
}

export default App

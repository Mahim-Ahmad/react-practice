
import { use } from "react";
export default function Users({fetchUsers}){
const users = use(fetchUsers);

    return(
        <div style={{
      border: '2px solid white',
      // backgroundColor:'aqua',
      borderRadius: '20px',
      margin: '10px',
      padding: '10px'}}>

        <h3>Users : {users.length}</h3>

        </div>
    )
}
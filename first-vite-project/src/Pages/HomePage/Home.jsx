import React from 'react'
import { Header } from '../../shared/components/Header/Header'
// import UserCard from '../../shared/components/UserCard/UserCard'
 
import { useAxios } from '../../shared/hooks/useAxios'
import { getUsers } from '../../services/user'
import {Container } from 'reactstrap'
import { UserCard } from '../../shared/components/UsersCard/UserCard'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
const {data,loading}=useAxios({requestFn:getUsers})
console.log("data",data);

const users=data?.data
console.log("users",users);

const navigate=useNavigate()
  return (
    <div>
 
      <Header/>
      <Container>
        {loading?(
          <h1>loading....</h1>
        ):(  <div className='d-flex flex-wrap gap-3 my-5'>
          {users?.map((user)=>(

<UserCard {...user} onClick={()=>navigate("/detail/"+user.id)}/>


          )
          )}
        
        </div>)}
      
      </Container>
     
    </div>
  )
}



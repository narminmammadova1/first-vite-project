import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../shared/components/Header/Header'
import { Button, Container } from 'reactstrap'
import { useAxios } from '../../shared/hooks/useAxios'
import { getUserID, getUsers} from '../../services/user'
export const Detail = () => {
  const{id}=useParams()
  const {data,loading}=useAxios({requestFn: ()=>getUserID(id)})
  const userInfo=data?.data
  const navigate=useNavigate()
  console.log("useInfo",userInfo);
  return (
    <>
<Header/>
<Container>
<div className='d-flex gap-4 my-5'>
{loading ? 
(
<h1>Loading....</h1>

) :
<>
<div className='w-25'>
    <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwXFbpWQJzEvfTNGePdj95M250jlNpMFIZ_hlTsd6Go6ZsEX9asR-Z0H8Y4PZwcV0bAY&usqp=CAU"
     alt="" />
     <br />
<Button color='dark'size='lg'block onClick={()=>navigate("setting")}>setting</Button>
  </div>

<div className='w-75'>
  <p className='h1'>{userInfo?.name}</p>
  <p className='h2'>{userInfo?.username}</p>
  <p className='h2'>{userInfo?.email}</p>
  <p className='h2'>{userInfo?.phone}</p>
  <p className='h2'>{userInfo?.website}</p>
  <hr />
  <p className='h2'>Company Name:{userInfo?.company.name}</p>


  <h1>Detail:{id}</h1>


</div>
</>
}
  
</div>


</Container>


  </>
  

  )
}


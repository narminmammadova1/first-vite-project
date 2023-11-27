import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export  function UserCard({name="User name",email="email",phone="0000",onClick}) {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    height={200}
    className='object-fit-cover'
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">

{name}   
 </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted d-flex align-items-center gap-3 "
      tag="h6"
    >
      <HiOutlineMail color='red' size={24}/>

{email }
    </CardSubtitle>
    <CardText className='d-flex align-items-center gap-3'>
    <FaPhone color='green' />
{phone}
    </CardText>
    <Button color='dark' block onClick={onClick}>
  Detail
    </Button>
  </CardBody>
</Card>
    </div>
  )
}

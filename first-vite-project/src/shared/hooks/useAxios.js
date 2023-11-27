import { useEffect, useState } from "react"

export const useAxios=({requestFn})=>{

    const [data,setData]=useState(null)
    const [error,setError]=useState(null)

    const [loading,setLoading]=useState(false)


const handleRequestData=()=>{
    setLoading(true)
    requestFn().then(res=>{
        setData(res)
    }).catch(err=>{
        setError(err)
    }).finally(()=>{setLoading(false)})

}



useEffect(()=>{
   handleRequestData()

},[])

return {data,error,loading}


}
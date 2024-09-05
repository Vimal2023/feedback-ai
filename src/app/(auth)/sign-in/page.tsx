'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z  from "zod"
import Link from "next/Link"
import { useEffect, useState } from "react"
import { useDebounceValue } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { signUpSchema } from "@/schemas/signUpSchema"
import axios, {AxiosError} from 'axios'
import {ApiResponse } from "@/types/ApiResponse"


const page = () => {
    const [username, setUsername] = useState('')
    const [usernameMessage, setusernameMessage] = useState('')
    const [isCheckingUsername, setIsCheckingUsername] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const debouncedUsername = userDebounceValue(username, 300)
    const { toast } = useToast()
    const router = useRouter();
    const form = useForm<z.infer<typeof signUpSchema>>({
      resolver: zodResolver(signUpSchema),
      defaultValues:{
        username: '',
        email: '',
        password: ''
      }
    })

    useEffect(() => {
      const checkUsernameUnique = async () => {
        if(debouncedUsername) {
          setIsCheckingUsername(true)
          setusernameMessage('')
          try {
            const response = await axios.get(`/api/
            check-username-unique?username=${debouncedUsername}
            `)
            setusernameMessage(response.data.message)
          } catch (error) {
            
          }
        }
      }
    }
    , [debouncedUsername])
    


  return (
    <div>
      
    </div>
  )
}

export default page

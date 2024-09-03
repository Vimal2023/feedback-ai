'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z  from "zod"
import Link from "next/Link"
import { useState } from "react"
import { useDebounceValue } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"


const page = () => {
    const [username, setUsername] = useState('')
    const [usernameMessage, setusernameMessage] = useState('')
    const [isCheckingUsername, setIsCheckingUsername] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const debouncedUsername = userDebounceValue(username, 300)
    const { toast } = useToast()
    const router = useRouter();
    const form = useForm({
      
    })


  return (
    <div>
      
    </div>
  )
}

export default page

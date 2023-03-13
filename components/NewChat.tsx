import { PlusIcon } from '@heroicons/react/24/solid'
import { AiOutlinePlus } from 'react-icons/ai'
import React from 'react'

const NewChat = () => {
  return (
    <section className="flex items-center justify-center space-x-2 border-gray-700 border p-2">
        <AiOutlinePlus />
        <p>New Chat</p>
    </section>
  )
}

export default NewChat
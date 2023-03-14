import { PlusIcon } from '@heroicons/react/24/solid'
import { AiOutlinePlus } from 'react-icons/ai'
import React from 'react'

const NewChat = () => {
  return (
    <section className="chatRow p-2 rounded">
        <AiOutlinePlus />
        <p>New Chat</p>
    </section>
  )
}

export default NewChat
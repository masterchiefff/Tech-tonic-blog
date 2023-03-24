import React from 'react'

const Profile = () => {
  return (
    <div>
        <figcaption className="flex items-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
            </div>
        </figcaption> 
    </div>
  )
}

export default Profile
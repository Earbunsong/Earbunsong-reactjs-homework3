import React from 'react'

export default function ProducrCard({index,name,descritption,image}) {
  return (
    <>
   <div key={index} role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow  md:p-6 dark:border-gray-700">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <img style={{
                    width:"100%",
                    height:"100%"
                }} src={image} />
            </div>
            <div class="h-2.5 w-48 mb-4">
                {name}
            </div>
            <div class="h-24   mb-2.5 ">
                {descritption}
            </div>
            <button style={{width:"100px",height:"40px",marginTop:"10px"}} type="button" class="mt-10  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700  focus:outline-none dark:focus:ring-blue-800">
                Add card
            </button>
        </div>
    </>
  )
}

'use client'
import React, { useState } from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

const page = () => {
    const [values, setValues] = useState("")
    const [ReactCode, setReactCode] = useState("")
    const [isPreview, setIsPreview] = useState(false)
    const handleSubmit = () => {
        setReactCode(values)
        setIsPreview(true)
    }
    return (
        <div>
            <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                Add your comment
            </label>
            <div className="mt-2">
                <textarea
                    onChange={(e) => setValues(e.target.value)}
                    rows={10}
                    value={values}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
            </div>
            <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Submit
            </button>

            <LiveProvider code="<strong>Hello World!</strong>">
                <LiveEditor />
                <LiveError />
                <LivePreview />
            </LiveProvider>;
        </div>
    )
}

export default page
import { useState, ChangeEvent } from "react";

type Props={
    onAdd: (title: string, body: string) => void
}

export const PostForm = ({onAdd}: Props)=>{
    const [AddTitleText, setAddTitleText] = useState('');
    const [AddBodyText, setAddBodyText] = useState('');

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setAddTitleText(e.target.value)
        }
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
    setAddBodyText(e.target.value)
    }

    const handleAddClick = async ()=>{
        if(AddTitleText && AddBodyText){
          onAdd(AddTitleText, AddBodyText)
        }else{
          alert("Fill in the data ")
        }
      }


    return(
        <fieldset className='border-4 mb-5 p-3'>
            <legend className="text-2xl font-semibold">Add New Post</legend>
            <input
                value={AddTitleText}
                onChange={handleAddTitleChange}
                className='block border py-1.5 px-2'
                type="text"
                placeholder='Type a title'
            />
            <textarea
                className='block border my-2 w-80 p-1'
                value={AddBodyText}
                onChange={handleAddBodyChange}
            ></textarea>
            <button className='block border py-1.5 px-6 bg-slate-900 hover:bg-slate-800 text-slate-50' onClick={handleAddClick}>Add</button>
      </fieldset>
    )
}
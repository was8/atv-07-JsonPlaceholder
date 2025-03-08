import {Post} from '../types/Post'

type Props = {
    data: Post
}

export const PostItem = ({data}:Props)=>{
    return(
        <div className='my-4 bg-slate-300 rounded py-2 px-2'>
            <h4 className='font-bold text-center pb-1'>{data.title.toUpperCase()}</h4>
            <small>#{data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </div>
    )
}
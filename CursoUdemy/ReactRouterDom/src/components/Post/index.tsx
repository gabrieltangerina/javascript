import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Post = () => {
    const params = useParams();
    const { id } = params;
    const [qs] = useSearchParams();

    return (
        <div>
            <h1>Post |
                {`Param: ${id}`} |
                {`QS 1: ${qs.get('page')}`} |
                {`QS 2: ${qs.get('user')}`}</h1>
        </div>
    )
}
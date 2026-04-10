import { useParams } from 'react-router-dom';
import Word, { IWord } from './Word';
import useFetch from '../hooks/useFetch';

export default function Day(){
    const {day} = useParams<{day:string}>();
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)

    if(words.length === 0){
        return <span>Loading...</span>
    }

    return <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table></>
}
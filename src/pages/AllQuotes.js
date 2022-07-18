import QuoteList from "../components/quotes/QuoteList"

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'React'},
    {id: 'q2', author: 'madMax', text: 'Javascript'}
]


const AllQuotes = () =>{
    return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
}

export default AllQuotes
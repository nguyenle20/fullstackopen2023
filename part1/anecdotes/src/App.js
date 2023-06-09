import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Anecdote = ({ text }) => <p>{text}</p>;
const Vote = ({vote}) => <p>has {vote} vote</p>;
const Header = ({text}) => <h1>{text}</h1>;


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]; 
   
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const randomizeAnecdotes = () =>  {
    let randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(randomNumber);
  };

  const voteCount = () => {
    const copy = [ ...vote ];
    copy[selected] += 1;
    setVote(copy);
  }

  const highestVote = Math.max( ...vote );
  const mostVoteAnecdote = anecdotes[vote.indexOf(highestVote)];

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} />
      <Vote vote={vote[selected]} />
      <Button onClick={voteCount} text='vote' />
      <Button onClick={randomizeAnecdotes} text='next anecdote' />

      <Header text='Anecdote with most votes' />
      <Anecdote text={mostVoteAnecdote} />
      <Vote vote={highestVote} />
    </div>
  )
}

export default App
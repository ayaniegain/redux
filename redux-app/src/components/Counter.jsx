import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementByAmount,increment } from '../store/counterSlice'

function Counter() {
  const  count=useSelector((state)=>state.count.value)
  const  counttext=useSelector((state)=>state.count.text)

  const dispatch=useDispatch()

  const handleDispatch = (val) => {
    dispatch(incrementByAmount(val));
  };

  return (
    <div className='text-center my-6'> 
      <h2 className=' font-bold text-3xl my-4'>This is counter app</h2>
      <span className=' font-bold text-2xl text-red-300 '>COUNT: {count} </span>
      <span className=' font-bold text-2xl text-red-300 '>Text : {counttext} </span>
      <br />
      <div className='flex justify-center gap-4 my-6'>
      <button  onClick={() => dispatch(increment())}  className=' font-bold w-20 text-2xl text-green-700 mx-2 p-2 border-4 border-indigo-600'>inc</button>
      <button  onClick={() =>   dispatch(decrement())} className=' font-bold w-20 text-2xl text-green-700 mx-2 p-2 border-4 border-indigo-600'>dec</button>
      <button  onClick={() => handleDispatch('hello')} className=' font-bold w-20 text-2xl text-green-700 mx-2 p-2 border-4 border-indigo-600'>val</button>
      </div>
</div>   
  )
}

export default Counter


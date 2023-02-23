import logo from './logo.svg';
import './App.css';
import { Expenseitem } from './components/expenseitem/Expenseitem';
import expenses from './utils/expense';
function App() {
  return (
    <div>
      <div className='expenses'>
        {expenses.map((e,index)=>(
          <Expenseitem key={index} id={e.id} title={e.title} amount={e.amount} date={e.date}/>
        ))}
      </div>
    </div>
  );
}

export default App;

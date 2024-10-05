import Expenses from './components/expenses/expenses';

function App() {
  const expenses = [
    {
      id : 'e1',
      title : 'Tissue Paper',
      amount : 100.50,
      date : new Date(2024, 10, 1)
    },
    {
      id : 'e2',
      title : 'Coffee Cups',
      amount : 300.50,
      date : new Date(2024, 10, 2)
    },
    
    {
      id : 'e3',
      title : 'Coffee Powder',
      amount : 400.50,
      date : new Date(2024, 10, 3)
    },
    
    {
      id : 'e4',
      title : 'Paper Plates',
      amount : 90.50,
      date : new Date(2024, 10, 4)
    },
    
  ];

  return (
    <div>
      <h2> Calculate Expenses </h2>
      <Expenses items = {expenses} />
    </div>
  )
}

export default App;
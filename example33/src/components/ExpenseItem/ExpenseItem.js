import ExpenseDate from "../ExpenseDate/ExpenseDate";
import './ExpenseItem.module.css'

function ExpenseItem(props) {
  return (
    <div className = 'expense-item'>
      <ExpenseDate date={props.date} />
      <div classNme='expense-item__description'>
        <h1> {props.title}</h1>
        <div className = 'expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
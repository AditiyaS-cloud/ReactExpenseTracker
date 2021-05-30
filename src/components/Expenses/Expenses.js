import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const onSelectYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectFilterData={onSelectYearHandler} />
                {props.items.map((expense) => (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;
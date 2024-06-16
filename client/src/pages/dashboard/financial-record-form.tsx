import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordForm = () => {
  
  const [description,setDescription] = useState<string>("")
  const [amount,setAmount] = useState<string>("")
  const [category,setCategory] = useState<string>("")
  const [paymentMethod,setPaymentMethod] = useState<string>("")
  
  const {user} = useUser();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const newRecord = {
      userID :  user?.id,
      date: new Date(),
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
      
    };
    

    addRecord(newRecord)
    setDescription("")
    setAmount("")
    setCategory("")
    setPaymentMethod("")

  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Description</label>
          <input type="text" required className="input" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="form-field">
          <label htmlFor="">Amount:</label>
          <input type="number" required className="input"value={amount}  onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <div className="form-field">
          <label htmlFor="">Category:</label>
          <select required className="input"value={category}  onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Enterainment">Entertainment</option>
            <option value="Other">Other</option>

          </select>
        </div>
        <div className="form-field">
          <label htmlFor="">Payment Method:</label>
          <select required id="input" value={paymentMethod}  onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select a Payment Method</option>  
          <option value="Credit Card">Credit Card</option>  
          <option value="Cash">Cash</option>  
          <option value="Bank Transfer">Bank Transfer</option>  

          </select>
        </div>
        <button className="button" type="submit">
          Add submit
        </button>
      </form>
    </div>
  );
};

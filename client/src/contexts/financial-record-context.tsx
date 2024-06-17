import {createContext, useContext, useState} from "react";

interface FinancialRecord{
    id:string;
    userId : string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

interface FinancialRecordContextType{
    records: FinancialRecord[];
    addRecord: (record:FinancialRecord)=> void;
    updateRecord:(id:string,newRecord: FinancialRecord) => void; 
    deleteRecord:(id:string) => void; 
}


export const FinancialRecordContext = createContext<FinancialRecordContextType | undefined>(undefined);

export const FinancialRecordProvider =({
    children,
}: {
    children:React.ReactNode;
}) =>{
    const [records, setRecords] = useState<FinancialRecord[]>([]);

    const addRecord = async (record: FinancialRecord) => {
        const responce = await fetch("http://localhost:3001/financial-records", {method: "POST" , body: JSON.stringify(record),});
        try{
            
            if(responce.ok){
                const newRecord = responce.json();
            setRecords((prev) => [...prev, newRecord])
        }
    }
        catch(err){
            
        }
    };
    



return (<FinancialRecordContext.Provider>{children}</FinancialRecordContext.Provider>);
    }


export const useFinancialRecords =() => {
   const context = useContext<FinancialRecordContextType | undefined> (
    FinancialRecordContext
   );  
    if(!context) {
        throw new Error("useFinancialRecords must be used within a FinancialRecordsProvider")
    }
}


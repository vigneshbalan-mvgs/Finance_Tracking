import { useUser } from "@clerk/clerk-react";
import { FinancialRecordList } from "./financial-record-list";
import { FinancialRecordForm } from "./financial-record-form";
export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboard-contiainer">
      <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  );
};

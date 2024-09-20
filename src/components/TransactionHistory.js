import React from "react";

function TransactionHistory() {
  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      <table>
        <thead>
          <tr>
            <th>Indicator</th>
            <th>Transaction</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*</td>
            <td>Starbucks Coffee</td>
            <td>Food</td>
            <td>15 Jul 2023</td>
            <td>$5.60</td>
          </tr>
          <tr>
            <td>*</td>
            <td>Tesco Market</td>
            <td>Food</td>
            <td>14 Jul 2023</td>
            <td>$23.67</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;
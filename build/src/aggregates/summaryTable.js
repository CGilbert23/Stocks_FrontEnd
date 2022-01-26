function SummaryTable() {
    return (
      <div className="summary-table">
        <table className="One">
          <tbody className="summary-table-body">
            <tr>
              <td className="green">
                Average Price <br></br>
                <h1>$45</h1>
              </td>
              <td className="green">
                Total Market Cap <br></br>
                <h1>1,000,000</h1>
              </td>
              <td className="red">
                P/E Ratio<br></br>
                <h1>9</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default SummaryTable;
  
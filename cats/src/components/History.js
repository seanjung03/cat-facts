


function History(props) {
    const {data} = props;
  return (
    <div>
        <ul>
            {data.map((fact) => {
                return <li key={fact}>{fact}</li>;
            })}
        </ul>
    </div>
  );
}

export default History;

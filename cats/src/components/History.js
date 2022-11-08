
import { useState } from "react";

//Allowing the left right buttons to be horizontal
const buttonsStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  gap: '20vw',
};

//Styling of the left right buttons
const butts = {
    margin: "4px",
    borderRadius: "5px",
    backgroundColor: "white",
}

//toggle background color of facts
function toggleFavorite(e, color, index, setColor) {
    if (e.target.style.backgroundColor === 'white') {
        e.target.style.backgroundColor = 'yellow';
        color[index] = 'yellow'
    } else {
        e.target.style.backgroundColor = 'white';
        color[index] = 'white'
    }
    setColor(color);
}

function History(props) {
    const {data, color, setColor} = props;
    const [page, setPage] = useState(1);
 
  return (
    <div>
        <ul>
            {data.map((fact, index) => {
                if (index !== 0 && index > 10 * (page - 1) && index <= 10 * page) {
                    return (
                      <li
                        key={index}
                        style={{ backgroundColor: color[index], listStyleType: 'none', margin: '5px'}}
                        onClick={(e) =>
                          toggleFavorite(e, color, index, setColor)
                        }
                      >
                        {fact}
                      </li>
                    );
                }
                
            })}
        </ul>
        {data.length > 11 ? <div className="buttons" style={buttonsStyle}>
            <button style={butts} onClick={() => {
                if (page !== 1) {
                    setPage(page - 1);
                }
            }}>Left</button>
            <button style={butts} onClick={() => {
                if (page < (data.length - 1) / 10) {
                    setPage(page + 1);
                }
            }}>Right</button>
        </div> : <div></div>}
        
    </div>
  );
}

export default History;

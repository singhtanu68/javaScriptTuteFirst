import "./styles.css";
import { useState } from "react";

export default function App() {
  const [users, setUser] = useState(["preet", "veer", "neet"]);
  const [check, setCheck] = useState([]);
  const remove = (i) => {
    const list = [...users];
    list.splice(i, 1);
    setUser(list);
  };
  const handleChecked = (e, i) => {
    let prev = [...check];
    let itemIndex = prev.indexOf(i);
    if (itemIndex !== -1) {
      prev.splice(itemIndex, 1);
    } else {
      prev.push(i);
    }
    setCheck([...prev]);
    console.log(check.includes(i));
  };

  return (
    <div className="App">
      <ul>
        {users.map((value, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={check.includes(index)}
                onChange={(e) => handleChecked(e, index)}
              ></input>
              {value}
              {check.includes(index) && (
                <button onClick={() => remove(index)} type="button">
                  delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

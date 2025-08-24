import React ,{ useState }from 'react'
import data from '../data'
import iconMinus from "../assets/images/icon-minus.svg"
import iconPlus from "../assets/images/icon-plus.svg"
import iconStar from "../assets/images/icon-star.svg"
import "../style.css"

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  console.log(iconMinus)

  const handleSingle = (id) => {
    setSelected(id === selected ? null : id)
  }
  return (
    <div className="container-accordion">
      <div className="accordion">
        <div className="card-accordion">
          <div className="header">
            <img src={iconStar} alt="star icon" />
            <span>FAQs</span>
          </div>
          {data.length > 0 &&
            data.map((item) => (
              <div className="item" key={item.id}>
                <div className="title" onClick={() => handleSingle(item.id)}>
                  <h3>{item.question}</h3>
                  <span>
                    {item.id === selected ? (
                      <img src={iconMinus} alt="minus icon" />
                    ) : (
                      <img src={iconPlus} alt="minus icon" />
                    )}
                  </span>
                </div>

                {selected === item.id ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion
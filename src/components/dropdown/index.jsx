import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function Dropdown({ title, infos }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen ? true : false);

  const [styleInfos, setStyleInfos] = useState('collapse');
  const [styleChevronInfos, setStyleChevronInfos] = useState('collapse_show');

  const handleCollapseInfos = () => {
    if (isOpen) {
      setStyleInfos('collapse');
      setStyleChevronInfos('collapse_show');
    } else {
      setStyleInfos('collapse_show');
      setStyleChevronInfos('collapse');
    }
  };

  const faSolidDownInfos = (
    <FontAwesomeIcon icon={faChevronDown} className={styleChevronInfos} />
  );
  const faSolidUpInfos = (
    <FontAwesomeIcon icon={faChevronUp} className={styleInfos} />
  );

  return (
    <div className="infos_container">
      <div className="infos_title">
        <h3>{title}</h3>
        <button onClick={() => [toggle(), handleCollapseInfos()]}>
          {faSolidDownInfos}
          {faSolidUpInfos}
        </button>
      </div>
      {typeof infos === 'string' ? (
        <p className={styleInfos}>{infos}</p>
      ) : (
        <ul className={styleInfos}>
          {infos.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";

export interface IOption {
  value: string;
  text: string;
}

interface IDropdownProps {
  options: IOption[];
  initialSelected: IOption;
  onSelect: (optionSort: IOption) => void
}

const Dropdown: React.FC<IDropdownProps> = ({ options, initialSelected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialSelected);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: IOption) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdownContainer}>
      <div className={styles.dropdown} onClick={toggleDropdown}>
        {selected.text}
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}></span>
      </div>
      <ul className={`${styles.dropdownList} ${isOpen ? styles.dropdownListOpen : ""}`}>
        {options.map((option) => (
          <li key={option.value} onClick={() => handleSelect(option)} className={styles.dropdownListItem}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

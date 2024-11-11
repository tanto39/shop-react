import React from 'react';
import styles from './FilterItem.module.css';

interface FilterItemProps {
  label: string;
  children: React.ReactNode;
}

const FilterItem: React.FC<FilterItemProps> = ({ label, children }) => (
  <div className={styles.filterItem}>
    <div className={styles.filterLabel}>{label}</div>
    {children}
  </div>
);

export default FilterItem;
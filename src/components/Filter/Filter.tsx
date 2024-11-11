import React, { ChangeEvent } from "react";
import styles from "./Filter.module.css";
import Dropdown, { IOption } from "../UI/Dropdown/Dropdown";
import FilterItem from "../FilterItem/FilterItem";
import { useAppDispatch, useAppSelector } from "../../store/helpers";
import { setFilter } from "../../store/slices/filter";
import { setSort } from "../../store/slices/sort";
import CheckboxUI from "../UI/CheckboxUI/CheckboxUI";

const options: IOption[] = [
  { value: "default", text: "by default" },
  { value: "newest", text: "newest" },
  { value: "price-high-low", text: "price: high-low" },
  { value: "price-low-high", text: "price: low-high" },
];

interface IFilterProps {
  showDiscountCheckbox?: boolean;
}

const Filter: React.FC<IFilterProps> = ({ showDiscountCheckbox = true }) => {
  const { filter } = useAppSelector((state) => state.filter);
  const { sort } = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();

  const changePriceTo = async (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ ...filter, priceTo: event.target.value ? Number(event.target.value) : 1000000 }));
  };

  const changePriceFrom = async (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ ...filter, priceFrom: event.target.value ? Number(event.target.value) : 0 }));
  };

  const changeDiscounted = async (checked: boolean) => {
    dispatch(setFilter({ ...filter, discountedItems: checked }));
  };

  const onSort = (optionSort: IOption) => {
    dispatch(setSort(optionSort));
  };

  return (
    <section className={styles.filter}>
      <FilterItem label="Price">
        <input
          type="number"
          name="priceFrom"
          className={styles.inputField}
          placeholder="from"
          aria-label="Price from"
          onChange={(event) => changePriceFrom(event)}
          value={filter.priceFrom == 0 ? undefined : filter.priceFrom}
        />
        <input
          type="number"
          name="priceTo"
          className={styles.inputField}
          placeholder="to"
          aria-label="Price to"
          onChange={(event) => changePriceTo(event)}
          value={filter.priceTo == 1000000 ? undefined : filter.priceTo}
        />
      </FilterItem>

      {showDiscountCheckbox && (
        <FilterItem label="Discounted items">
          <CheckboxUI onChange={changeDiscounted} checked={filter.discountedItems}/>
        </FilterItem>
      )}

      <FilterItem label="Sorted">
        <Dropdown options={options} initialSelected={sort} onSelect={onSort} />
      </FilterItem>
    </section>
  );
};

export default Filter;

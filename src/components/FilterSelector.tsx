import { SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductBy } from "../redux/state/products";
import { AppStore } from "../redux/store";
import { OrderProductsBy } from "../utilities/order-products-by.utility";

export const FilterSelector = () => {
    const dispatch = useDispatch();
    const productsState = useSelector( (store: AppStore) => store.products);
    const [filterBy, setFilterBy] = useState('none');
  
    const handleChange = (event: SelectChangeEvent) => {
     
      let OrderedProducts = OrderProductsBy([...productsState], event.target.value);
      dispatch(filterProductBy(OrderedProducts));
      setFilterBy(event.target.value);
    };
  
    return (
      <FormControl fullWidth>
        <InputLabel id="filter-selector">Filter by</InputLabel>
        <Select
          labelId="filter-selector"
          id="filter-selector"
          value={filterBy}
          label="filter-selector"
          onChange={handleChange}
        >
          <MenuItem value='none'>None</MenuItem>
          <MenuItem value='price-up'>Price up</MenuItem>
          <MenuItem value='price-down'>Price down</MenuItem>
        </Select>
    </FormControl>
    )
  }
  
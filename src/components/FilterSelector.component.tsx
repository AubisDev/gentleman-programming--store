import { SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductBy } from "../redux/state/products";
import { AppStore } from "../redux/store";
import { OrderProductsBy } from "../utilities";

export const FilterSelector = () => {
    const dispatch = useDispatch();
    const productsState = useSelector( (store: AppStore) => store.products);
    const [filterBy, setFilterBy] = useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
     
      let OrderedProducts = OrderProductsBy([...productsState], event.target.value);
      dispatch(filterProductBy(OrderedProducts));
      setFilterBy(event.target.value);
    };
  
    return (
      <FormControl sx={{mr:1}}>
        <InputLabel id="filter-selector" sx={{ color:'black', fontSize:"18px"}}>Filter by</InputLabel>
        <Select
          labelId="filter-selector"
          id="filter-selector"
          value={filterBy}
          label="filter-selector"
          onChange={handleChange}
          sx={{background:"white",width:"160px", }}
        >
          <MenuItem value='price-up'>Price up</MenuItem>
          <MenuItem value='price-down'>Price down</MenuItem>
        </Select>
      </FormControl>
    )
  }
  
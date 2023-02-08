import {
  Select,
} from '../AppStyles';
import { ISelectOrder } from '../interfaces';

const SelectOrder = ({ order, setOrder }: ISelectOrder) => {
  return(
    <>
    <label htmlFor='order-select'>order by:</label>
    <Select 
      id="order-select"
      value={order}
      onChange={(e) => setOrder(e.target.value)}
    >
      <option value="category">category</option>
      <option value="title">title</option>
      <option value="description">description</option>
      <option value="price">price</option>
      <option value="stock">stock</option>
      <option value="alphabetically">alphabetically</option>
    </Select>
  </>
  )
}

export default SelectOrder
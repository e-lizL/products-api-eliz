import {
  Select,
  StyledLabel,
  OrderWrapper
} from '../AppStyles';
import { ISelectOrder } from '../interfaces';

const SelectOrder = ({ order, setOrder }: ISelectOrder) => {
  return(
    <OrderWrapper data-test="choose-order-section">  

      <StyledLabel data-test="choose-order-label" htmlFor='order-select'>List products by:
      </StyledLabel>

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
      </Select>   

    </OrderWrapper>
  )
}

export default SelectOrder

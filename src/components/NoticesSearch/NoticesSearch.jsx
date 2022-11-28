import { Form, Input, Button, InputContainer } from "./NoticesSearch.styled";
import { searchIcon } from "img/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/filterSlice";

export default function NoticesSearch() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);

  const handleChangeInput = e => {
    dispatch(setFilter(e.target.value));
  };

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input type="text" name="filter" placeholder="Search" value={value} onChange={handleChangeInput} />
        <Button type="submit">{searchIcon}</Button>
      </InputContainer>
    </Form>
  );
}

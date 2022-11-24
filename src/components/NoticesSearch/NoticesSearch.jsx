import { Form, Input, Button, InputContainer } from "./NoticesSearch.styled";
import { searchIcon } from "img/svgIcons";
// import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { fetchByName } from "api/fetchPets";
// import { notifyWarning } from "helpers/toastNotifications";
import { setFilter } from "redux/filter/filterSlice";

export default function NoticesSearch() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);
  // const [searchValue, setSearchValue] = useState("");

  const handleChangeInput = e => {
    dispatch(setFilter(e.target.value));
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   setSearchParams({ query: form.elements.query.value });
  //   const query = searchParams.get("query");
  //   // console.log(query);
  //   // query &&
  //   //   fetchByName(query)
  //   //     .then(data => setSearchValue(data))
  //   //     .catch(error => console.log(error));

  //   query ? onChange(query) : notifyWarning("Animal with this name does not exist");
  //   form.reset();
  // }
  return (
    <Form>
      <InputContainer>
        <Input type="text" name="filter" placeholder="Search" value={value} onChange={handleChangeInput} />
        <Button type="submit">{searchIcon}</Button>
      </InputContainer>
    </Form>
  );
}

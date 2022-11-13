import { Form, Input, Button, InputContainer } from "./NoticesSearch.styled";
import { searchIcon } from "img/svgIcons";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { fetchByName } from "api/fetchPets";

export default function NoticesSearch({ onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    const query = searchParams.get("query");
    // console.log(query);
    query && fetchByName(query).then(data => setSearchValue(data));
    onChange(searchValue);
    form.reset();
   
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input type="text" name="query" placeholder="Search" />
        <Button type="submit">{searchIcon}</Button>
      </InputContainer>
    </Form>
  );
}

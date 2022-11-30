import PropTypes from "prop-types";
import { Form, Input, Button, InputContainer } from "./NewsSearch.styled";
import { searchIcon } from "img/svgIcons";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { fetchByName } from "api/fetchPets";
import { notifyWarning } from "helpers/toastNotifications";

export default function NewsSearch({ onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    const query = searchParams.get("query");
    query &&
      fetchByName(query)
        .then(data => setSearchValue(data))
        .catch(error => console.log(error));

    searchValue ? onChange(searchValue) : notifyWarning("Sorry, no news found.");
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

NewsSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

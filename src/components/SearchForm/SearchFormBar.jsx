
import SearchForm from "./SearchForm";
import SearchInput from "./SearchInput";
import { BtnIcon, SearchBox } from "./SearchForm.styled";
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';


export const SearchFormBar = ({ onSubmit }) => (
  <SearchBox>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <BtnIcon type="submit">
        <FcSearch />
      </BtnIcon>
    </SearchForm>
  </SearchBox>
);
SearchFormBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
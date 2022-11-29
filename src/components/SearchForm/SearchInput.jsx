import { Input } from './SearchForm.styled';

const SearchInput = () => (
  <Input
    type="text"
    name="movieName"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Titanic"
    required
    autoComplete="off"
    autoFocus
    placeholder="Search movie..."
  />
);

export default SearchInput;

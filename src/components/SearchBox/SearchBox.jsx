import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.container}>
      <p className={css.title}> Find contacts by name</p>
      <input value={filter} type="text" onChange={handleFilter} />
    </div>
  );
}

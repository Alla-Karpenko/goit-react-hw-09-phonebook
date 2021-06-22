import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Filters.scss";
import { contactsSelectors, changeFilter } from "../../redux/contact";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const onChange = (e) => dispatch(changeFilter(e.target.value));
  return (
    <>
      <h3> Find contacts by me </h3>
      <input
        className="Input-Filter"
        type="text"
        name=""
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   filter: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeFilter: (e) => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import { Link } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from "../../store/actions";

export const BackButton = () => {
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);

  const dispatch = useDispatch();
  const set_flags = (val: any) => dispatch(actions.set_flags(val));

  const back_handler = () => set_flags(const_flags);

  return (
    <Link className="back_link block_text" to="/" onClick={back_handler} >
      &lt; Back to Homepage
    </Link>
  )
};
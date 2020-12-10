import React from "react"
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from "../../store/actions";

interface T{
  backer: () => void
}

export const BackButton: React.FC <T> = props => {
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);

  const dispatch = useDispatch();
  const set_flags = (val: any) => dispatch(actions.set_flags(val));

  const back_handler = () => {
    set_flags(const_flags);
    props.backer();
  };

  return (
    <button className="back_link block_text" onClick={back_handler} >
      &lt; Back
    </button>
  )
};
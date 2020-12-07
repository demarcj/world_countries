import { Link } from "react-router-dom";

interface T {
  back_handler: () => void
}

export const BackButton: React.FC <T> = prop => (
  <Link 
    className="back_link block_text" 
    to="/"
    onClick={prop.back_handler}
  >
    &lt; Back to Homepage
  </Link>
);
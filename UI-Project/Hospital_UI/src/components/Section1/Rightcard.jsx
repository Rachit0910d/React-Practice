import "remixicon/fonts/remixicon.css";
import RightcardContent from "./RightcardContent";

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover flex"
        src={props.img}
        alt=""
      />
      
      <RightcardContent tag={props.tag}/>
    </div>
  );
};

export default Rightcard;

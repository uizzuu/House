import { useNavigate } from "react-router-dom";
import "./Room.css";

function Room({oneRoom}) {
  const image = `${oneRoom.image}`;
  const navigate = useNavigate();
  return (
    <>
    <div id="room">
      <img src={image} width="100%"/>
      <h4>{oneRoom.title}</h4>
      <div className="oneline">
      <p>{oneRoom.price}</p>
      <a className="report" onClick={()=>navigate('/report')}>☎︎허위매물신고</a>
      </div>
      </div>
    </>
  );
}
export default Room;

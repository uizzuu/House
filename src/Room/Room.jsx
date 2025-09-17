import "./Room.css";

function Room({oneRoom, onSelect, onReport}) {
  const image = `${oneRoom.image}`;
  return (
    <>
    <div id="room" onClick={onSelect}>
      <img src={image} width="100%"/>
      <h4>{oneRoom.title}</h4>
      <div className="oneline">
      <p>{oneRoom.price}</p>
      <a 
      className="report" 
      onClick={(e)=>{
        e.stopPropagation();
        onReport?.();}}>
          ☎︎허위매물신고
      </a>
      </div>
      </div>
    </>
  );
}
export default Room;

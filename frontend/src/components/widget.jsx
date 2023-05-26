import style from "../styles/widget.module.css";

export const Widget = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <h3 className={style.headerTitle}>{data.cityName}</h3>
        <p className={style.headerDate}>{data.hourOfLecture}</p>
      </div>

      <div className={style.cardData}>
        <div>
          <h2 className={style.imageContainerH2}>{data.temperature} C°</h2>
          <h3>{data.condition.text}</h3>
        </div>
        <div className={style.imageContainer}>
          <img src={data.condition.icon} className={style.image}></img>
        </div>
      </div>
      <div className={style.mainData}>
        <div className={style.mainDataItem}>
          <h4>Latitude: {data.lat}</h4>
          <h4>Longitude: {data.lon}</h4>
        </div>
        <div className={style.mainDataItem}>
          <h4>Wind: {data.windMph} Mph</h4>
          <h4>Pressure: {data.pressure} Mb</h4>
        </div>
        <div className={style.mainDataItem}>
          <h4>Humidity: {data.humidity}% </h4>
          <h4>Feels like: {data.feelsLike}°</h4>
        </div>
      </div>
    </div>
  );
};

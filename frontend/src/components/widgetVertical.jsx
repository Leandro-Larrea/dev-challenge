import style from "../styles/widgetVertical.module.css";

export const WidgetVertical = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <h3 className={style.headerTitle}>{data.cityName}</h3>
      </div>

      <div className={style.cardData}>
        <div>
          <h2 className={style.imageContainerH2}>{data.temperature} C°</h2>
          <div className={style.imageContainer}>
            <img src={data.condition.icon} className={style.image}></img>
          </div>
          <h3>{data.condition.text}</h3>
        </div>
      </div>

      <div className={style.mainData}>
        <div className={style.mainDataItem}>
          <h4>Wind: {data.windMph} Mph </h4>
          <h4>Pressure: {data.pressure} Mb</h4>
          <h4>Wind direction: {data.windDegree}°</h4>
          <h4> {data.hourOfLecture}</h4>
        </div>
      </div>
    </div>
  );
};

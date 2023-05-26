import { useContext, useEffect, useState } from "react";
import { SubmitButton } from "./submitButton";
import style from "../styles/form.module.css";
import { url } from "./home";
import { DataContext } from "../context/context";

export function Form() {
  const { setData, history, setHistory, error, setError } =
    useContext(DataContext);
  const [formObj, setFormObj] = useState({
    lat: "",
    lon: "",
  });
  const [loader, setLoader] = useState(false);

  const handleInput = (e) => {
    if (e.target.value.length > 6) return;
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const fetchData = async (e) => {
    e.preventDefault();
    const { lat, lon } = formObj;

    if (lat.length && lon.length) {
      setLoader(true);
      fetch(`${url}?lat=${lat}&lon=${lon}`)
        .then((response) => response.json())
        .then((response) => {
          setData(response.succes ? response.data : false);
          setError(!response || !response.succes ? true : false);
          setFormObj({
            lat: "",
            lon: "",
          });
          setLoader(false);
          if (!history || !history.some((e) => e.id === response.data.id)) {
            setHistory([
              ...history,
              {
                id: response.data.id,
                cityName: response.data.cityName,
                hourOfLecture: response.data.hourOfLecture,
              },
            ]);
          }
        })
        .catch((err) => {
          setError(true);
          setLoader(false);
        });
    }
  };

  return (
    <div>
      <form onSubmit={fetchData} className={style.form}>
        <div className={style.itemForm}>
          <label htmlFor="lat">Latitude:</label>
          <input
            name="lat"
            id="lat"
            value={formObj.lat}
            onChange={handleInput}
            className={style.input}
          ></input>
        </div>
        <div className={style.itemForm}>
          <label htmlFor="lon">Longitude:</label>
          <input
            name="lon"
            id="lon"
            value={formObj.lon}
            onChange={handleInput}
            className={style.input}
          ></input>
        </div>
        <div className={style.buttonContainer}>
          <SubmitButton loader={loader} name={"Search"} />
        </div>
      </form>
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import { url } from "./home";
import style from "../styles/histories.module.css";
import { DataContext } from "../context/context";

export const Histories = () => {
  const { data, setData } = useContext(DataContext);
  const { history, setHistory, error, setError } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const readingsByPage = 8;
  const lastLecture = currentPage * readingsByPage;
  const firstLecture = lastLecture - readingsByPage;
  const renderPages = history && history.slice(firstLecture, lastLecture);

  //it brings all readings from data base when staring the component
  useEffect(() => {
    (async function () {
      let response = await fetch(`${url}/history`);
      response = await response.json();
      setHistory(response.succes ? response.data : []);
    })();
  }, []);

  /*when selecting a reading from the histories the full data from that reading it's fetched
  with its id*/
  const fetchData = (id) => {
    if (data?.id === id) return;
    fetch(`${url}/byId?id=${id}`)
      .then((response) => response.json())
      .then((response) => {
        setError(!response || !response.succes ? true : false);
        setData(response.succes ? response.data : false);
      })
      .catch((a) => {});
  };

  const changePage = (controll) => {
    if (controll === "+" && history.length - 1 > currentPage * readingsByPage) {
      setCurrentPage(currentPage + 1);
    }
    if (
      controll === "-" &&
      history.length &&
      history[0].id !== renderPages[0].id
    ) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section>
      <div className={style.historiesContainer}>
        {renderPages.length ? (
          renderPages.map((reading) => {
            return (
              <div className={style.historiesCard} key={reading.id}>
                <h4
                  className={
                    reading.id === data?.id
                      ? style.readingNameOn
                      : style.readingNameOff
                  }
                >
                  {reading.cityName}
                </h4>
                <div className={style.historiesCardBottom}>
                  <p>{reading.hourOfLecture}</p>
                  <button
                    className={style.readingButton}
                    onClick={() => fetchData(reading.id)}
                  >
                    See lecture
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className={style.NotRecors}>Not records yet</div>
        )}
      </div>
      <div className={style.pageController}>
        <button
          className={style.pageControllerButton}
          onClick={() => changePage("-")}
        >
          {"<"}
        </button>
        <button
          className={style.pageControllerButton}
          onClick={() => changePage("+")}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

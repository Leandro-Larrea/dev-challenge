import { useContext, useEffect, useState } from "react";
import { Widget } from "./widget";
import style from "../styles/home.module.css";
import { Form } from "./form";
import { Histories } from "./histories";
import { DataContext } from "../context/context";
import { WidgetVertical } from "./widgetVertical";
export const url =
  process.env.REACT_APP_API_URL || "http://localhost:3000/weather";

export default function Home() {
  const { data, setData, error, setError } = useContext(DataContext);

  return (
    <main className={style.main}>
      <div className={style.formContainer}>
        <Form></Form>
      </div>
      <div className={style.sectionsContainer}>
        <div className={style.widgetsContainer}>
          {data && (
            <div>
              <WidgetVertical data={data}></WidgetVertical>
              <Widget data={data}></Widget>
            </div>
          )}
          {error && <h2 className={style.error}>Location not found</h2>}
        </div>
        <Histories></Histories>
      </div>
    </main>
  );
}

import ReactWeather, { useOpenWeather } from "react-open-weather";

const App = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "40d5f267c5807d1331aadb2e3a17863d",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
  );
};

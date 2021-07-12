import "./App.css";
import img1 from "./images/01.svg";
import img2 from "./images/05.svg";
import img3 from "./images/09.svg";
import img4 from "./images/17.svg";

const weatherInfo = [
  {
    weekDey: "Monday",
    imgURL: img1,
    temp: "36C",
  },
  {
    weekDey: "Tuesday",
    imgURL: img2,
    temp: "32C",
  },
  {
    weekDey: "Wednesday",
    imgURL: img2,
    temp: "35C",
  },
  {
    weekDey: "Thursday",
    imgURL: img2,
    temp: "45C",
  },
  {
    weekDey: "Friday",
    imgURL: img3,
    temp: "36C",
  },
  {
    weekDey: "Saturday",
    imgURL: img3,
    temp: "37C",
  },
  {
    weekDey: "Sunday",
    imgURL: img4,
    temp: "39C",
  },
];

function Image(prop) {
  return <img src={prop.src} alt={prop.alt} />;
}

function Title(prop) {
  return <h1>{prop.name}</h1>;
}

function WeatherCard(prop) {
  return (
    <div className="dayWeather">
      <p>{prop.weekDey}</p>
      <Image src={prop.imgURL} alt="bob" />
      <p>{prop.temp}</p>
    </div>
  );
}

function App(prop) {
  let weathers = weatherInfo.map((el) => {
    return (
      <WeatherCard
        key={el.weekDey.toString()}
        weekDey={el.weekDey}
        imgURL={el.imgURL}
        temp={el.temp}
      />
    );
  });

  return <div className="weatherCardContainer"> {weathers} </div>;
}

export default App;

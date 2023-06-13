import image1 from "../assets/images/pattern-divider-desktop.svg";
import image2 from "../assets/images/pattern-divider-mobile.svg";
import dice from "../assets/images/icon-dice.svg";
import { useCustomQuery } from "../Services/Advice.Api.Service";

const AdviceCardComponent = () => {
  const { data, isError, error, isLoading, refetch } = useCustomQuery();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {/* Card starts from over here */}
      <div className="card">
        <p>Advice #{data.id}</p>
        <h2>{data.advice}</h2>
        <img
          src={image1}
          className="desktop_divider"
          alt="divider_of_desktop"
        />
        <img src={image2} className="mobile_divider" alt="divider_of_mobile" />
        <button className="dice" onClick={refetch}>
          <img src={dice} />
        </button>
      </div>
      {/* Card ends  here */}
    </>
  );
};

export default AdviceCardComponent;

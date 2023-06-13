import { useQuery } from "react-query";
import axios from "axios";
{
  /* getAdvice Function starts from over here */
}
const getAdvices = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data.slip;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to fetch service");
  }
};
{
  /* getAdvice Function starts ends here */
}

{
  /*CustomQuery Starts From over here*/
}
export const useCustomQuery = () => {
  return useQuery("Advice", getAdvices);
};
{
  /*CustomQuery Ends here*/
}

import Axios from "@/libs/Axios";
import { useApi } from "@/hook/useApi";

interface payloadType {
  university: string;
  course: string;
}

const useCareerGuidance = () => {
  const { callApi } = useApi();

  const getCareerGuidance = async (payload: payloadType) => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.post("/api/career-guidance", payload);
        return result.data;
      });

      if (response.success) {
         console.log("response ::: ", response);
        return { data: response };
      } else {
        return { data: null };
      }
    } catch (err: any) {
      console.error("error in career guidance fetching API ", err);
      return { data: null };
    }
  };

  return { getCareerGuidance };
};

export default useCareerGuidance;

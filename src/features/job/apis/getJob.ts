import Axios from "@/libs/Axios";
import { useApi } from "@/hook/useApi";

interface payloadType {
  limit: number;
  pageNo: number;
}

const useJobPost = () => {
  const { callApi } = useApi();

  const getJobPost = async (payload: payloadType) => {
    try {
      const response = await callApi(async () => {
        const result = await Axios.get("/api/get-job", {
          params: payload,
        });
        return result.data;
      });

      if (response.status) {
        return { data: response.data, total: response.total };
      } else {
        return { data: [], total: 0 };
      }
    } catch (err: any) {
      console.error("error in job post fetching API ", err);
      return { data: [], total: 0 };
    }
  };

  return { getJobPost };
};

export default useJobPost;

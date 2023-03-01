import axios from "axios";
import { SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";
import { getUniqStartOfTodayTimestamp } from "../../helpers/getUniSubgraphVolume";

const fetch = async (timestamp: number) => {
    const dayTimestamp = getUniqStartOfTodayTimestamp(new Date(timestamp * 1000))

    const url = 'https://gateway.thegraph.com/api/[api-key]/subgraphs/id/3xdURMor7NCcFs1g1Ff7JjnASQcgDyGsGY3Ba5n8VRDL';

    const data = {
      query: `
      {
        dailySwapVolumes(where: {date: ${dayTimestamp}}) {
          amount
        }
      }
      `
    };

    const dailyVolume = await (await axios.post(url, data)).data.data.dailySwapVolumes[0].amount.toString();

    return {
      totalVolume: "0" /**fix it */,
      dailyVolume,
      timestamp: dayTimestamp,
    };
    
};


const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.ETHEREUM]: {
      fetch,
      start: async () => 1649203200,
    },
  },
};

export default adapter;
import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

const adapters = univ2Adapter({
    [CHAIN.ETHEREUM]: "https://api.thegraph.com/subgraphs/name/airswap/airswap",
}, {});

export default adapters;
import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

const adapters = univ2Adapter({
  [CHAIN.METIS]: "https://api.netswap.io/graph/subgraphs/name/netswap/exchange"
}, {
  factoriesName: "netswapFactories",
  dayData: "netswapDayData"
});
adapters.adapter.metis.start = async () => 1638760703;
export default adapters;

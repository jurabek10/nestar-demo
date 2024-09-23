import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { NextPage } from "next";
import { Stack } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/homepage/TrendProperties";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      {/* <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents /> */}
    </Stack>
  );
};

export default withLayoutMain(Home);

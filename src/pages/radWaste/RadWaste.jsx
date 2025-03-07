import styles from "../../styles/radWaste/radWaste.module.css";
import { useCallback, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  fetchAvgRadiation,
  fetchRecentRadiation,
} from "../../hooks/axios/FetchData.js";
import HeaderSection from "../../components/radWaste/HeaderSection.jsx";
import ContainerSection from "../../components/radWaste/ContainerSection.jsx";
import InfoSection from "../../components/radWaste/InfoSection.jsx";
import AnimationLayout from "../../AnimationLayout.jsx";

export default function RadWaste() {
  const scrollRef = useRef(null);
  const queryClient = useQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["avgRadiation"],
    queryFn: fetchAvgRadiation,
  });
  queryClient.prefetchQuery({
    queryKey: ["recentRadiation"],
    queryFn: fetchRecentRadiation,
  });

  const onClick = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <AnimationLayout>
      <div className={styles.pageWrapper}>
        <HeaderSection refer={scrollRef} />
        <ContainerSection />
        <InfoSection onClick={onClick} />
      </div>
    </AnimationLayout>
  );
}

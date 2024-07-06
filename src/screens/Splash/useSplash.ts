import { useEffect } from "react";
import { SplashScreenProps } from "../../types";

export const useSplash = (props: SplashScreenProps) => {
  const { navigation } = props;
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeContact');
    }, 2000);
    return () => {}
  }, []);
}
import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return {
    mobile: isMobile,
  };
};

export default useScreenSize;

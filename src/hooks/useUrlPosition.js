import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");

  return [lat, lng];
}

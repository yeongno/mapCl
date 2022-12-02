// import { useEffect } from "react";
// import useMyInfo from "../../../hook/useMyInfo";
// import { PRIORITY_MAP } from "../types";

import axios from "axios";
import { useEffect } from "react";
import { PRIORITY_MAP } from "../types";

export function PriorityMap(data) {
  return {
    type: PRIORITY_MAP,
    payload: data,
  };
}

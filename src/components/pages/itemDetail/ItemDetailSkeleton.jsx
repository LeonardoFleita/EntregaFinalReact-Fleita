import { Skeleton } from "@mui/material";
import React from "react";

const ItemDetailSkeleton = () => {
  let width = window.innerWidth;

  if (width >= 900) {
    return (
      <div className="datosIzqItemDetail">
        <Skeleton
          variant="rectangular"
          width={480}
          height={330}
          sx={{ marginBottom: "1rem" }}
        />
        <Skeleton variant="text" width={480} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={480} sx={{ fontSize: "1rem" }} />
      </div>
    );
  } else if (width > 500 && width < 900) {
    return (
      <div className="datosIzqItemDetail">
        <Skeleton
          variant="rectangular"
          width={240}
          height={150}
          sx={{ marginBottom: "1rem" }}
        />
        <Skeleton variant="text" width={240} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={240} sx={{ fontSize: "1rem" }} />
      </div>
    );
  } else {
    return (
      <div className="datosIzqItemDetail">
        <Skeleton
          variant="rectangular"
          width={160}
          height={110}
          sx={{ marginBottom: "1rem" }}
        />
        <Skeleton variant="text" width={160} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={160} sx={{ fontSize: "1rem" }} />
      </div>
    );
  }
};

export default ItemDetailSkeleton;

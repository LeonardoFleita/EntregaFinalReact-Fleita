import { Skeleton } from "@mui/material";
import React from "react";

const ItemDetailSkeleton = () => {
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
};

export default ItemDetailSkeleton;

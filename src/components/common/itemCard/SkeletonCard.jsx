import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions, Skeleton } from "@mui/material";

const SkeletonCard = ({ dark }) => {
  return (
    <Card
      sx={
        !dark
          ? { maxWidth: 345 }
          : { maxWidth: 345, backgroundColor: "#5a5a5a;" }
      }
      className="tarjeta"
    >
      <CardActionArea>
        <Skeleton variant="rectangular" width={345} height={140} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Skeleton variant="rounded" width={70} height={20} />
      </CardActions>
    </Card>
  );
};

export default SkeletonCard;

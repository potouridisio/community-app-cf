import Typography from '@mui/material/Typography';

export default function ActivityHistory() {
  return (
    <>
      <Typography sx={{ mb: 0.5 }} variant="h1">
        Activity history
      </Typography>
      <Typography component="p" sx={{ mb: 3 }} variant="subtitle1">
        An overview of all your actions.
      </Typography>
    </>
  );
}

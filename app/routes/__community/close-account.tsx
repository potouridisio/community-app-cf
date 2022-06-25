import Typography from '@mui/material/Typography';

export default function CloseAccount() {
  return (
    <>
      <Typography sx={{ mb: 0.5 }} variant="h1">
        My account / Close account
      </Typography>
      <Typography component="p" sx={{ mb: 3 }} variant="subtitle1">
        Set up your account.
      </Typography>
    </>
  );
}

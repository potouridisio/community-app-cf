import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function ReferAFriend() {
  return (
    <>
      <Typography sx={{ mb: 0.5 }} variant="h1">
        Refer a friend
      </Typography>
      <Typography component="p" sx={{ mb: 3 }} variant="subtitle1">
        Want to be part of the best rewards program on the planet?{' '}
        <ReadMoreLink />.
      </Typography>
    </>
  );
}

function ReadMoreLink() {
  return <Link href="/refer-a-friend">Read more</Link>;
}

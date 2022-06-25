import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Login() {
  return (
    <>
      <Typography
        component="h1"
        sx={{
          fontSize: '2.125rem',
          fontWeight: 'fontWeightBold',
          lineHeight: 1.25,
          mb: 2,
          textAlign: 'center',
        }}
      >
        Hello
      </Typography>
      <Typography sx={{ mb: 5, textAlign: 'center' }}>
        Login to earn rewards!
      </Typography>
      {/* login form  */}
      <Typography
        component="div"
        sx={{ fontWeight: 600, textAlign: 'center' }}
        variant="caption"
      >
        Please make sure you&apos;ve read our <Link>Privacy policy</Link> and{' '}
        <Link>Terms of service</Link>
      </Typography>
    </>
  );
}

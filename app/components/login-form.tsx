import { useState } from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';

export default function LoginForm() {
  return (
    <>
      <Stack
        component="form"
        sx={{
          '& > :not([type="hidden"]) + :not([type="hidden"])': {
            mt: 4,
          },
          mb: 4,
        }}
      >
        <TextField defaultValue="" label="Country" name="country" select>
          <MenuItem value="2">Belgium</MenuItem>
          <MenuItem value="4">Germany</MenuItem>
          <MenuItem value="5">Netherlands</MenuItem>
          <MenuItem value="6">United Kingdom</MenuItem>
        </TextField>
        <TextField defaultValue="" label="Language" name="language" select>
          <MenuItem value="DUT-BE">Dutch (Belgium)</MenuItem>
          <MenuItem value="DUT-NL">Dutch (Netherlands)</MenuItem>
          <MenuItem value="ENG-GB">English</MenuItem>
          <MenuItem value="FRE-BE">French</MenuItem>
          <MenuItem value="GER-DE">German</MenuItem>
        </TextField>
        <TextField autoComplete="email" label="Email" name="email" />
        <div>
          <PasswordTextField />
          <Link
            sx={{
              display: 'inline-flex',
              fontWeight: 600,
              mt: 1,
            }}
            variant="caption"
          >
            Forgotten / Reset password
          </Link>
        </div>
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </Stack>
      <Button component="a" fullWidth sx={{ mb: 3 }} variant="outlined">
        Don&apos;t have an account? Sign up
      </Button>
    </>
  );
}

function HideIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        clipRule="evenodd"
        d="M4.75774 15.5076L1.99194 17.1387L3.00791 18.8614L6.59375 16.7467C8.22835 17.6936 10.046 18.3386 11.8651 18.3386H12.1219C15.7457 18.3386 19.3503 15.7968 21.5319 13.396C22.1569 12.6959 22.1558 11.638 21.5294 10.9393C20.9642 10.3174 20.3036 9.68653 19.5719 9.09292L22.5079 7.3614L21.4919 5.63867L17.7883 7.82287C16.0206 6.73141 14.0116 5.97248 11.9993 6.00083C8.33137 5.94831 4.67423 8.51423 2.46928 10.9393C1.84348 11.6389 1.84348 12.6971 2.46928 13.3968C3.11813 14.1114 3.89345 14.8386 4.75774 15.5076ZM9.46892 15.0511C10.1442 15.6445 11.0297 16.0044 11.9993 16.0044C14.1172 16.0044 15.834 14.2875 15.834 12.1697C15.834 11.8881 15.8037 11.6135 15.7461 11.3492L13.6078 12.6102C13.4146 13.3172 12.7677 13.837 11.9993 13.837C11.864 13.837 11.7325 13.8208 11.6065 13.7904L9.46892 15.0511ZM10.3328 12.2197L8.3605 13.3829C8.23345 13.0016 8.16464 12.5937 8.16464 12.1697C8.16464 10.0519 9.8815 8.335 11.9993 8.335C13.1154 8.335 14.1202 8.81181 14.821 9.57285L12.8498 10.7353C12.6008 10.5874 12.31 10.5024 11.9993 10.5024C11.0785 10.5024 10.3321 11.2489 10.3321 12.1697C10.3321 12.1864 10.3323 12.2031 10.3328 12.2197Z"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

function PasswordTextField() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      autoComplete="current-password"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              edge="end"
              onClick={handleClickShowPassword}
              size="small"
            >
              {showPassword ? <HideIcon /> : <ShowIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      label="Password"
      name="password"
      type={showPassword ? 'text' : 'password'}
    />
  );
}

function ShowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        clipRule="evenodd"
        d="M21.5295 10.9392C19.3245 8.51336 15.6674 5.94911 11.9994 6.00079C8.33144 5.94827 4.6743 8.51419 2.46935 10.9392C1.84355 11.6389 1.84355 12.6971 2.46935 13.3968C4.64846 15.7968 8.25391 18.3385 11.8652 18.3385H12.122C15.7458 18.3385 19.3504 15.7968 21.532 13.3959C22.157 12.6959 22.1559 11.638 21.5295 10.9392ZM11.9994 8.33496C14.1173 8.33496 15.8341 10.0518 15.8341 12.1697C15.8341 14.2875 14.1173 16.0044 11.9994 16.0044C9.88157 16.0044 8.16472 14.2875 8.16472 12.1697C8.16472 10.0518 9.88157 8.33496 11.9994 8.33496ZM11.9994 10.5024C11.0786 10.5024 10.3322 11.2489 10.3322 12.1697C10.3322 13.0905 11.0786 13.8369 11.9994 13.8369C12.9202 13.8369 13.6667 13.0905 13.6667 12.1697C13.6667 11.2489 12.9202 10.5024 11.9994 10.5024Z"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export default function ArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        clipRule="evenodd"
        d="M11.9858 16C11.655 16.0004 11.34 15.8492 11.1213 15.5849L6.21607 9.64931C5.89362 9.24024 5.93691 8.63195 6.31359 8.27927C6.69026 7.92659 7.26253 7.95851 7.6025 8.35118L11.8918 13.5416C11.9155 13.5704 11.9498 13.5869 11.9858 13.5869C12.0218 13.5869 12.0561 13.5704 12.0798 13.5416L16.3691 8.35118C16.5845 8.07796 16.922 7.95035 17.251 8.01772C17.58 8.0851 17.8489 8.33689 17.9537 8.67567C18.0584 9.01444 17.9826 9.38705 17.7556 9.64931L12.8518 15.5827C12.6328 15.8477 12.3173 15.9997 11.9858 16Z"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

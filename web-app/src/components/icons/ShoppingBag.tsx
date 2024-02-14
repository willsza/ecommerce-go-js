type Props = React.SVGProps<SVGSVGElement>;

export default function IconShoppingBag(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      className="w-6 h-6 text-gray-800 dark:text-white"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 10V6a3 3 0 013-3v0a3 3 0 013 3v4m3-2l1 12c0 .5-.5 1-1 1H6a1 1 0 01-1-1L6 8h12z"
      ></path>
    </svg>
  );
}

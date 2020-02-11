import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/home">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* <Link href="/login">
      <a style={linkStyle}>Login</a>
    </Link> */}
  </div>
);

export default Header;
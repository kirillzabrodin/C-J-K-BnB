
const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/log-in">
        <a style={linkStyle}>Log-in</a>
      </Link>
      <Link href="/sign-up">
        <a style={linkStyle}>Sign-up</a>
      </Link>
      <Link href="/new-space">
        <a style={linkStyle}>New Space</a>
      </Link>
    </div>
)

export default Header

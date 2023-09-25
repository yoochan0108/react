//rfce
function Header() {
	const handler = (text) => {
		console.log(text);
	};
	return (
		<header>
			<h1 className='title'>Logo</h1>
			<p onClick={() => handler('Hello')}>링크</p>
		</header>
	);
}

export default Header;

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='Footer flex w-full items-center justify-between px-4 py-2'>
			<p className='flex items-center gap-1'>
				&copy; {currentYear}
				<a href='https://www.oldmountainacidtest.com'>Old Mountain Acid Test</a>
			</p>

			<p>Top</p>
		</footer>
	);
}

export default Footer;

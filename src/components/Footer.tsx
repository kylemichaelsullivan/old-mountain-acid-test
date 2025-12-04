import ToTop from './ToTop';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='Footer flex w-full items-center justify-between p-4'>
			<p className='flex items-center gap-1'>
				&copy; {currentYear}
				<a href='https://www.oldmountainacidtest.com'>Old Mountain Acid Test</a>
			</p>

			<ToTop />
		</footer>
	);
}

export default Footer;

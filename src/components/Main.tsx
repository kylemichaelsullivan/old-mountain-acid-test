import Music from './Music';
import Videos from './Videos';
import Photos from './Photos';
import Events from './Events';
import Booking from '@/components/Booking';
import Support from '@/components/Support';
import Socials from '@/components/Socials';

function Main() {
	return (
		<main className='Main flex w-full flex-col items-center justify-center gap-2 p-4'>
			<Music />
			<Videos />
			<Photos />
			<Events />
			<Booking />
			<Support />
			<Socials />
		</main>
	);
}

export default Main;

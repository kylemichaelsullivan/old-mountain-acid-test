import Booking from '@/components/Booking';
import Socials from '@/components/Socials';
import Support from '@/components/Support';
import Events from './Events';
import Music from './Music';
import Photos from './Photos';
import Videos from './Videos';

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

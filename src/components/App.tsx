import Header from './Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

function App() {
	return (
		<div className='App flex h-full min-h-screen w-full flex-col items-center justify-between'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;

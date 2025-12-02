import { useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ToTop() {
	const scrollToTop = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<button
			className='ToTop flex items-center justify-center gap-1'
			type='button'
			onClick={scrollToTop}
		>
			<span>Top</span>
			<FontAwesomeIcon icon={faArrowUp} aria-hidden='true' />
		</button>
	);
}

export default ToTop;

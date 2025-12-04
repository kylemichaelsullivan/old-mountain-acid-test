import { useState } from 'react';

import clsx from 'clsx';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { ReactNode } from 'react';

type AccordionProps = {
	title: string;
	children: ReactNode;
	align?: 'left' | 'center' | 'right' | 'justify';
	hasArrows?: boolean;
	id?: string;
};

function Accordion({
	title,
	align = 'center',
	hasArrows = true,
	id = '',
	children,
}: AccordionProps) {
	const accordionClassName = title.replace(/ /g, '').toLowerCase();
	const accordionId =
		id === '' ? `epk-${title.toLowerCase().replace(/ /g, '-')}` : id;

	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={clsx(
				accordionClassName,
				'accordion w-full max-w-4xl',
				isOpen && 'open'
			)}
			id={accordionId}
		>
			<div
				className='accordion-toggle flex cursor-pointer justify-between'
				onClick={toggleAccordion}
				onKeyUp={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						toggleAccordion();
					}
				}}
			>
				<h3 className={`flex-auto text-${align}`}>{title}</h3>
				{hasArrows && (
					<FontAwesomeIcon icon={faChevronRight} aria-hidden='true' />
				)}
			</div>

			<div className='accordion-container'>
				<div className='accordion-content'>{children}</div>
			</div>
		</div>
	);
}

export default Accordion;

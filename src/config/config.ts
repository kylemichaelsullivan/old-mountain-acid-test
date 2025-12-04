import { DefaultConfig } from './defaults';
import { ConfigSchema as ConfigSchemaZod, PhotosSchema } from './schema';

import type { ConfigSchema } from './schema';

/**
 * Deep merge utility that merges override values into defaults.
 * Arrays are replaced entirely (not merged).
 */
function deepMerge<T>(defaults: T, overrides: Partial<T>): T {
	const result = { ...defaults };

	for (const key in overrides) {
		if (overrides[key] !== undefined) {
			const overrideValue = overrides[key];
			const defaultValue = defaults[key];

			// If both are objects (and not arrays), merge recursively
			if (
				overrideValue &&
				typeof overrideValue === 'object' &&
				!Array.isArray(overrideValue) &&
				defaultValue &&
				typeof defaultValue === 'object' &&
				!Array.isArray(defaultValue)
			) {
				result[key] = deepMerge(defaultValue, overrideValue) as T[Extract<
					keyof T,
					string
				>];
			} else {
				// Otherwise, use the override value (or replace array entirely)
				result[key] = overrideValue as T[Extract<keyof T, string>];
			}
		}
	}

	return result;
}

/**
 * Deep partial type helper for nested objects
 */
type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

/**
 * Centralized override values - only specify what differs from defaults.
 * Each section uses DeepPartial<> to allow partial overrides at any nesting level.
 */
const configOverrides: {
	[K in keyof ConfigSchema]?: DeepPartial<ConfigSchema[K]>;
} = {
	SiteIdentity: {
		'Band Name': 'Old Mountain Acid Test',
		Hometown: 'Grand Rapids, MI',
		'Logo Type': 'SVG',
	},
	Music: {
		'Apple Music':
			'https://music.apple.com/us/artist/old-mountain-acid-test/1631696043',
		Spotify:
			'https://open.spotify.com/artist/3vGq6UOuOElSbvfm4RJmGZ?si=JBZH1SrRQJGpnI9k3NieRw&fbclid=IwAR3QcXwOrhggic2Tk0htg_D4h49mC9GSIaddXlUZwjABbjYe_Usq9DhQnFM&nd=1',
		'Music Embed':
			'<iframe style="display:block;border-radius:12px; margin:0.5rem auto 1rem;" src="https://open.spotify.com/embed/artist/3vGq6UOuOElSbvfm4RJmGZ?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media;  picture-in-picture" loading="lazy"></iframe>',
	},
	Videos: {
		YouTube: 'https://www.youtube.com/channel/UCDRc80oBf7lvwcuqfXbalSw',
		'Video Embed':
			'<iframe height="315" src="https://www.youtube.com/embed/aDpI5BcjNYo?si=z0D6-7Zzzb1z3cip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width:100%"></iframe>',
	},
	Photos: [],
	Contact: {
		Booking: {
			Email: 'oldmountainacidtest@gmail.com',
			Phone: '(616) 822-0393',
		},
		'Social Media': {
			Facebook: 'https://www.facebook.com/oldmountainacidtest',
			Instagram: 'https://www.instagram.com/oldmountainacidtest/',
		},
		Settings: {
			'Contact Label': 'Contact',
			'Split Booking & Socials': false,
		},
	},
	Support: {
		'Apple Pay': '',
		'Google Pay': '',
		PayPal: '',
		Stripe: '',
		Venmo: '',
		'Custom Label': '',
		'Custom Link': '',
	},
	Colors: {
		Background: '#ffffff',
		Accent: '#000000',
		Body: '#000000',
		White: '#ffffff',
		Black: '#000000',
	},
	Fonts: {
		Header: 'sans-serif',
		Fancy: 'cursive',
		Main: 'serif',
		Imports: '',
	},
	Elements: {
		h1: {
			Color: 'Accent',
			'Font Family': 'Header',
			'Font Size (px)': 48,
			'Font Weight': 'Bold',
		},
		h2: {
			Color: 'Accent',
			'Font Family': 'Header',
			'Font Size (px)': 42,
			'Font Weight': 'Bold',
		},
		h3: {
			Color: 'Accent',
			'Font Family': 'Header',
			'Font Size (px)': 36,
			'Font Weight': 'Bold',
		},
		h4: {
			Color: 'Accent',
			'Font Family': 'Header',
			'Font Size (px)': 30,
			'Font Weight': 'Bold',
		},
		h5: {
			Color: 'Accent',
			'Font Family': 'Header',
			'Font Size (px)': 24,
			'Font Weight': 'Bold',
		},
		h6: {
			Color: 'Accent',
			'Font Family': 'Header',
			'Font Size (px)': 18,
			'Font Weight': 'Bold',
		},
		p: {
			Color: 'Body',
			'Font Family': 'Main',
			'Font Size (px)': 16,
			'Font Weight': 'Normal',
		},
		a: {
			Color: 'Body',
			'Font Family': 'Inherit',
			Italic: false,
			Underline: false,
			Hover: {
				Color: 'Accent',
				Italic: false,
				Underline: true,
			},
		},
	},
	Options: {
		Accordions: {
			Headings: 'Left',
			'Text Shadow': 'Accent',
			'Shadow: X (px)': 0,
			'Shadow: Y (px)': 0,
			'Accordion Arrows': true,
			'Body Background': 'Accent',
			'Background Opacity': 'Solid',
			'Border Radius (px)': 0,
			'Body Padding (px)': 0,
		},
		Analytics: {
			'Google Analytics': '',
		},
		Background: {
			'Background Image': '',
			'Background Position (X, Y)': 'Center, Top',
			'Background Size': 'Cover',
			'Background Repeat': 'Repeat',
			'Background Color': 'Background',
			'Background Opacity': 'Solid',
		},
		Footer: {
			Color: 'White',
			'Font Weight': 'Normal',
		},
		Sections: [
			'Music',
			'Videos',
			'Photos',
			'Events',
			'Press',
			'Biography',
			'Contact',
			'Support',
		],
	},
};

/**
 * Functional config builder that merges defaults with overrides.
 * Uses deepMerge for each top-level section to ensure proper type safety.
 * Validates both defaults and overrides with Zod schemas.
 */
function buildConfig(
	defaults: ConfigSchema,
	overrides: {
		[K in keyof ConfigSchema]?: DeepPartial<ConfigSchema[K]>;
	}
): ConfigSchema {
	const validatedDefaults = ConfigSchemaZod.parse(defaults);

	const result: ConfigSchema = { ...validatedDefaults };

	for (const key of Object.keys(overrides) as Array<keyof ConfigSchema>) {
		const overrideSection = overrides[key];
		if (overrideSection === undefined) continue;

		const defaultSection = validatedDefaults[key];

		// Special handling for Photos (array) - arrays are replaced entirely
		if (key === 'Photos') {
			const validatedOverride = PhotosSchema.parse(overrideSection);
			(result as Record<keyof ConfigSchema, ConfigSchema[keyof ConfigSchema]>)[
				key
			] = validatedOverride as ConfigSchema[typeof key];
			continue;
		}

		// For all other sections, get the schema and validate as partial
		const sectionSchema = ConfigSchemaZod.shape[key];
		if (!sectionSchema) continue;

		// Use partial() to allow partial overrides, then merge
		try {
			// Check if it's a ZodObject by trying to call partial()
			if (
				'partial' in sectionSchema &&
				typeof sectionSchema.partial === 'function'
			) {
				const partialSchema = sectionSchema.partial();
				const validatedOverride = partialSchema.parse(overrideSection);
				(
					result as Record<keyof ConfigSchema, ConfigSchema[keyof ConfigSchema]>
				)[key] = deepMerge(
					defaultSection,
					validatedOverride
				) as ConfigSchema[typeof key];
			} else {
				// For non-objects, validate directly
				const validatedOverride = sectionSchema.parse(overrideSection);
				(
					result as Record<keyof ConfigSchema, ConfigSchema[keyof ConfigSchema]>
				)[key] = validatedOverride as ConfigSchema[typeof key];
			}
		} catch (error) {
			// If validation fails, log error but continue with default
			console.error(
				`Validation error for config section "${String(key)}":`,
				error
			);
		}
	}

	return ConfigSchemaZod.parse(result);
}

/**
 * Complete configuration built from defaults and overrides.
 * This is the single source of truth for application configuration.
 */
export const Config: ConfigSchema = buildConfig(DefaultConfig, configOverrides);

export function getField<K extends keyof ConfigSchema>(
	field: K
): ConfigSchema[K] {
	return (Config[field] as ConfigSchema[K]) ?? DefaultConfig[field];
}

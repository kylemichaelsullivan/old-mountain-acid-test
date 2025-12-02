import { z } from 'zod';
import {
	AlignmentTypeSchema,
	BackgroundPositionTypeSchema,
	BackgroundRepeatTypeSchema,
	BackgroundSizeTypeSchema,
	ColorTypeSchema,
	FontFamilyTypeSchema,
	FontWeightTypeSchema,
	LogoTypeSchema,
	OpacityTypeSchema,
	SectionTypeSchema,
} from './types';

export const SiteIdentitySchema = z.object({
	'Band Name': z.string(),
	Hometown: z.string(),
	'Logo Type': LogoTypeSchema,
	Biography: z.string(),
});

export const MusicSchema = z.object({
	'Apple Music': z.string(),
	Bandcamp: z.string(),
	SoundCloud: z.string(),
	Spotify: z.string(),
	'Music Embed': z.string(),
});

export const VideosSchema = z.object({
	Vimeo: z.string(),
	YouTube: z.string(),
	'Video Embed': z.string(),
});

export const PhotosSchema = z.array(z.string());

export const ContactSchema = z.object({
	Booking: z.object({
		Email: z.string(),
		Phone: z.string(),
	}),
	'Social Media': z.object({
		Facebook: z.string(),
		Instagram: z.string(),
		Snapchat: z.string(),
		TikTok: z.string(),
		'X (Twitter)': z.string(),
	}),
	Settings: z.object({
		'Contact Label': z.string(),
		'Split Booking & Socials': z.boolean(),
	}),
});

export const SupportSchema = z.object({
	'Apple Pay': z.string(),
	'Google Pay': z.string(),
	PayPal: z.string(),
	Stripe: z.string(),
	Venmo: z.string(),
	'Custom Label': z.string(),
	'Custom Link': z.string(),
});

export const ColorsSchema = z.object({
	Background: z.string(),
	Accent: z.string(),
	Body: z.string(),
	White: z.string(),
	Black: z.string(),
});

export const FontsSchema = z.object({
	Header: z.string(),
	Fancy: z.string(),
	Main: z.string(),
	Imports: z.string(),
});

export const ElementSchema = z.object({
	Color: ColorTypeSchema,
	'Font Family': FontFamilyTypeSchema,
	'Font Size (px)': z.number(),
	'Font Weight': FontWeightTypeSchema,
});

export const AnchorSchema = z.object({
	Color: ColorTypeSchema,
	'Font Family': FontFamilyTypeSchema.or(z.literal('Inherit')),
	Italic: z.boolean(),
	Underline: z.boolean(),
	Hover: z.object({
		Color: ColorTypeSchema,
		Italic: z.boolean(),
		Underline: z.boolean(),
	}),
});

export const ElementsSchema = z.object({
	h1: ElementSchema,
	h2: ElementSchema,
	h3: ElementSchema,
	h4: ElementSchema,
	h5: ElementSchema,
	h6: ElementSchema,
	p: ElementSchema,
	a: AnchorSchema,
});

export const AccordionSchema = z.object({
	Headings: AlignmentTypeSchema,
	'Text Shadow': ColorTypeSchema,
	'Shadow: X (px)': z.number(),
	'Shadow: Y (px)': z.number(),
	'Accordion Arrows': z.boolean(),
	'Body Background': z.string(),
	'Background Opacity': OpacityTypeSchema,
	'Border Radius (px)': z.number(),
	'Body Padding (px)': z.number(),
});

export const AnalyticsSchema = z.object({
	'Google Analytics': z.string(),
});

export const BackgroundSchema = z.object({
	'Background Image': z.string(),
	'Background Position (X, Y)': BackgroundPositionTypeSchema,
	'Background Size': BackgroundSizeTypeSchema,
	'Background Repeat': BackgroundRepeatTypeSchema,
	'Background Color': z.string(),
	'Background Opacity': OpacityTypeSchema,
});

export const FooterSchema = z.object({
	Color: ColorTypeSchema,
	'Font Weight': FontWeightTypeSchema,
});

export const SectionsSchema = z.array(SectionTypeSchema);

export const OptionsSchema = z.object({
	Accordions: AccordionSchema,
	Analytics: AnalyticsSchema,
	Background: BackgroundSchema,
	Footer: FooterSchema,
	Sections: SectionsSchema,
});

export const ConfigSchema = z.object({
	SiteIdentity: SiteIdentitySchema,
	Music: MusicSchema,
	Videos: VideosSchema,
	Photos: PhotosSchema,
	Contact: ContactSchema,
	Support: SupportSchema,
	Colors: ColorsSchema,
	Fonts: FontsSchema,
	Elements: ElementsSchema,
	Options: OptionsSchema,
});

export type SiteIdentitySchema = z.infer<typeof SiteIdentitySchema>;
export type MusicSchema = z.infer<typeof MusicSchema>;
export type VideosSchema = z.infer<typeof VideosSchema>;
export type PhotosSchema = z.infer<typeof PhotosSchema>;
export type ContactSchema = z.infer<typeof ContactSchema>;
export type SupportSchema = z.infer<typeof SupportSchema>;
export type ColorsSchema = z.infer<typeof ColorsSchema>;
export type FontsSchema = z.infer<typeof FontsSchema>;
export type ElementSchema = z.infer<typeof ElementSchema>;
export type AnchorSchema = z.infer<typeof AnchorSchema>;
export type ElementsSchema = z.infer<typeof ElementsSchema>;
export type AccordionSchema = z.infer<typeof AccordionSchema>;
export type AnalyticsSchema = z.infer<typeof AnalyticsSchema>;
export type BackgroundSchema = z.infer<typeof BackgroundSchema>;
export type FooterSchema = z.infer<typeof FooterSchema>;
export type SectionsSchema = z.infer<typeof SectionsSchema>;
export type OptionsSchema = z.infer<typeof OptionsSchema>;
export type ConfigSchema = z.infer<typeof ConfigSchema>;

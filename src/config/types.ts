import { z } from 'zod';

export const AlignmentTypeSchema = z.enum(['Left', 'Center', 'Right']);

export const BackgroundPositionTypeSchema = z.enum([
	'Left, Top',
	'Left, Center',
	'Left, Bottom',
	'Center, Top',
	'Center, Center',
	'Center, Bottom',
	'Right, Top',
	'Right, Center',
	'Right, Bottom',
]);

export const BackgroundRepeatTypeSchema = z.enum([
	'Repeat',
	'Repeat Horizontal',
	'Repeat Vertical',
	'No Repeat',
]);

export const BackgroundSizeTypeSchema = z.enum(['Cover', 'Contain']);

export const ColorTypeSchema = z.enum([
	'Background',
	'Accent',
	'Body',
	'White',
	'Black',
]);

export const ColorHexSchema = z.string().regex(/^#[0-9A-Fa-f]{6}$/);

export const ElementStyleTypeSchema = z.enum([
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
	'a',
]);

export const FontFamilyTypeSchema = z.enum(['Header', 'Fancy', 'Main']);

export const FontWeightTypeSchema = z.enum([
	'Thin',
	'Extra Light',
	'Light',
	'Normal',
	'Medium',
	'Semi Bold',
	'Bold',
	'Extra Bold',
	'Black',
]);

export const LogoTypeSchema = z.enum(['Title', 'Image', 'SVG', 'None']);

export const OpacityTypeSchema = z.enum([
	'Transparent',
	'Light',
	'Medium',
	'Dark',
	'Solid',
]);

export const SectionTypeSchema = z.enum([
	'Music',
	'Videos',
	'Photos',
	'Events',
	'Merchandise',
	'Press',
	'Biography',
	'Contact',
	'Support',
]);

export type AlignmentType = z.infer<typeof AlignmentTypeSchema>;
export type BackgroundPositionType = z.infer<
	typeof BackgroundPositionTypeSchema
>;
export type BackgroundRepeatType = z.infer<typeof BackgroundRepeatTypeSchema>;
export type BackgroundSizeType = z.infer<typeof BackgroundSizeTypeSchema>;
export type ColorType = z.infer<typeof ColorTypeSchema>;
export type ColorHex = z.infer<typeof ColorHexSchema>;
export type ElementStyleType = z.infer<typeof ElementStyleTypeSchema>;
export type FontFamilyType = z.infer<typeof FontFamilyTypeSchema>;
export type FontWeightType = z.infer<typeof FontWeightTypeSchema>;
export type LogoType = z.infer<typeof LogoTypeSchema>;
export type OpacityType = z.infer<typeof OpacityTypeSchema>;
export type SectionType = z.infer<typeof SectionTypeSchema>;

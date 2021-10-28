// export interface ImageFormats {
//   large: string;
//   medium: string;
//   small: string;
//   thumbnail: string;
// }

// export interface Image {
//   formats: {
//     [key: string]: { [key: string]: ImageFormats };
//   };
// }

interface Sizes {
  url: string;
}

interface Formats {
  medium: Sizes;
  small: Sizes;
}

interface Image {
  formats: Formats;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: Image;
  slug: string;
  description: string;
  created_at: string;
}

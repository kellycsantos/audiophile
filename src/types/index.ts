export type ImagesType = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type IncludesType = {
  quantity: number;
  item: string;
};

export type OtherProductType = {
  slug: string;
  name: string;
  image: ImagesType;
};

export type GalleryType = {
  first: ImagesType;
  second: ImagesType;
  third: ImagesType;
};

export type ProductType = {
  id: number;
  slug: string;
  name: string;
  image: ImagesType;
  category: string;
  categoryImage: ImagesType;
  new: boolean;
  price: number;
  quantity?: number;
  description: string;
  features: string;
  includes: IncludesType[];
  gallery: GalleryType;
  others: OtherProductType[];
};

export type CartType = {
  totalAmount: number;
  totalItems: number
  items: ProductType[];
}
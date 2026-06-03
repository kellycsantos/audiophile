// type ImagesType = {
//     desktop: string,
//     mobile: string,
//     tablet: string
// }

// type IncludesType = {
//     quantity: number,
//     item: string
// }
// type OthersType = {
//     slug: string,
//     name: string,
//     image: ImagesType
// }


// export type ProductType = {
//     id: number,
//     slug: string,
//     name: string,
//     image: ImagesType,
//     category: string,
//     categoryImage: ImagesType,
//     new: boolean,
//     price: number,
//     description: string,
//     features: string,
//     includes: IncludesType[],
//     gallery: any, //todo: criar tipo para galeria
//     others: OthersType[],
// }


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
  description: string;
  features: string;
  includes: IncludesType[];
  gallery: GalleryType;
  others: OtherProductType[];
};
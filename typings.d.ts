export interface Template {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  price: number;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  mobileImage: {
    asset: {
      url: string;
    };
  };
  desktopImage: {
    asset: {
      url: string;
    };
  };
  imageGallery: [
    asset: {
      url: string;
    }
  ];
  body: [object];
}

export interface Category {
  _id: string;
  title: string;
  description: string;
}

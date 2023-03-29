

export interface NewsArticle {
    
    author: string;
    content:string | null;
    description:string | null;
    publishedAt:string;
    source: {
      id:string;
      name:string;
    }
    title:string;
    url:string;
    urlToImage:string;
    
   
    
   
  }
  
  export interface NewsSource {
    country: string;
  }

  export interface Countries {
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    cca2: string;
  }






const baseUrl = process.env.wordpress_baseurl || 'default_value';


export const getAllAirtcle=async ()=>{
  const response=await fetch(`${baseUrl}/wp-json/wp/v2/posts`,{
    method: 'GET',
  })
  const responseJson:[Article]=await response.json()
  return responseJson;
  
  


}

export const getAirtcleById=async(id:string)=>{
    const response=await fetch(`${baseUrl}/wp-json/wp/v2/posts/${id}`,{
        method: 'GET',
      })
      const responseJson:Article=await response.json()
      return responseJson;
}

export interface Article {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
      emotion: string;
      emotion_color: string;
      title_style: string;
      license: string;
      footnotes: string;
    };
    categories: number[];
    tags: number[];
    class_list: string[];
    yoast_head: string;
    yoast_head_json: {
      title: string;
      description: string;
      robots: {
        index: string;
        follow: string;
        "max-snippet": string;
        "max-image-preview": string;
        "max-video-preview": string;
      };
      canonical: string;
      og_locale: string;
      og_type: string;
      og_title: string;
      og_description: string;
      og_url: string;
      og_site_name: string;
      article_published_time: string;
      article_modified_time: string;
      og_image: {
        width: number;
        height: number;
        url: string;
        type: string;
      }[];
      author: string;
      twitter_card: string;
      twitter_misc: {
        作者: string;
        预计阅读时间: string;
      };
      schema: {
        "@context": string;
        "@graph": any[]; // You can further define this if needed
      };
    };
    _links: {
      self: {
        href: string;
        targetHints?: {
          allow: string[];
        };
      }[];
      collection: {
        href: string;
      }[];
      about: {
        href: string;
      }[];
      author: {
        embeddable: boolean;
        href: string;
      }[];
      replies: {
        embeddable: boolean;
        href: string;
      }[];
      "version-history": {
        count: number;
        href: string;
      }[];
      "predecessor-version": {
        id: number;
        href: string;
      }[];
      "wp:attachment": {
        href: string;
      }[];
      "wp:term": {
        taxonomy: string;
        embeddable: boolean;
        href: string;
      }[];
      curies: {
        name: string;
        href: string;
        templated: boolean;
      }[];
    };
  }
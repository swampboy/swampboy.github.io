import { removeWhitespace } from '../utils';

export const getAllAssets = removeWhitespace(`
{
    allAssets {
      id,
      url,
      fileName,
      height,
      width,
    }
}
`);

export const getMusicAssets = removeWhitespace(`
{
    allMusics {
      id,
      title,
      link,
      createdAt,
      cover {
        id,
        url
      }
    }
  }
`);

export const getBlogPosts = removeWhitespace(`
{
    allBlogPosts {
      id,
      postTags,
      isPublished,
      postContent,
      postSlug,
      postTitle,
      postDateAndTime,
      postImage {
        id,
        url,
        fileName,
        height,
        width
      }
      authors {
        id,
        authorName
      }
    }
}
`);

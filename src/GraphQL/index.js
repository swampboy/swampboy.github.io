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

export const getAboutCopy = removeWhitespace(`
{
  Author(id:"cj7sj522ozzoe0122n5tz38fp") {
		id,
  	city,
    authorName,
    authorBibliography,
    authorImage {
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

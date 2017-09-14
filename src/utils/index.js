import { config } from '../config'

export const removeWhitespace = (str) =>
    str.replace(/\s+/g, '');

export const getGraphcmsHeaders = () => new Headers({
    ...config.graphcms,
})
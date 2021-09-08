import { urlEncoding } from '../constants/url.constant';

export default class StringUtils {
    static encodeTextToUrl(text: string) {
        const textEncoded = text.replace(/%/gi, urlEncoding['%'])
            .replace(/ /gi, urlEncoding.space)
            .replace(/'/gi, urlEncoding['\''])
            .replace(/#/gi, urlEncoding['#'])
            .replace(/</gi, urlEncoding['<'])
            .replace(/>/gi, urlEncoding['>'])
            .replace(/'|'/gi, urlEncoding['|']);
        return textEncoded;
    }
}
